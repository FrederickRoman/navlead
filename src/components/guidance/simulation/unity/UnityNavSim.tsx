import { useEffect } from "react";
import NavGuideService from "@/services/client/NavGuideService";
import { brandFontFamily } from "@/themes/theme";
import type Location from "@/types/interfaces/Location";
import type Traveler from "@/types/interfaces/Traveler";

declare global {
  interface Window {
    processMessageFromUnity: () => void;
    sendAnswerToUnity: (answer: string) => void;
  }
}

function useLoadUnityScript(): void {
  useEffect(() => {
    const UNITY_BOOTSTRAP_LOADER_SRC = "/static/script.js";
    const UNITY_BUILD_LOADER_SRC = "/static/Build/ReleaseBuild.loader.js";
    const UNITY_BUILD_FRAMEWORK_SRC = "/static/Build/ReleaseBuild.framework.js";
    function appendScript(srcPath: string): void {
      const script = document.createElement("script");
      script.src = srcPath;
      script.async = true;
      document.body.appendChild(script);
    }
    function removeScript(srcPath: string): void {
      const scripts = document.getElementsByTagName("script");
      Array.from(scripts).forEach((script) => {
        if (script?.getAttribute("src")?.includes(srcPath))
          script.parentNode?.removeChild(script);
      });
    }
    function appendUnityLoaderScript(): void {
      try {
        appendScript(UNITY_BOOTSTRAP_LOADER_SRC);
      } catch (error) {
        console.log(error);
      }
    }
    function removeUnityScripts(): void {
      try {
        removeScript(UNITY_BOOTSTRAP_LOADER_SRC);
        removeScript(UNITY_BUILD_LOADER_SRC);
        removeScript(UNITY_BUILD_FRAMEWORK_SRC);
      } catch (error) {
        console.log(error);
      }
    }
    appendUnityLoaderScript();
    return () => removeUnityScripts();
  }, []);
}

function useNavGuide(): void {
  useEffect(() => {
    const formatStringToLocation = (location: string): Location => {
      const [x, y, z] = location.split(",").map(parseFloat);
      return { x, y, z };
    };
    async function awakeNavGuide(): Promise<void> {
      try {
        await NavGuideService.awake();
      } catch (error) {
        console.log(error);
      }
    }
    async function askNavGuide(event: Event): Promise<void> {
      try {
        const unityGameState = (event as CustomEvent).detail;
        const gameStateObj = JSON.parse(unityGameState);
        const { question, target, location: locationString } = gameStateObj;
        const location: Location = formatStringToLocation(locationString);
        const traveler: Traveler = { question, target, location };
        const answer: string = await NavGuideService.answer(traveler);
        window.sendAnswerToUnity(answer);
        console.log(answer);
      } catch (error) {
        console.log(error);
      }
    }
    awakeNavGuide();
    window.addEventListener("askNavGuide", askNavGuide);
    return () => window.removeEventListener("askNavGuide", askNavGuide);
  }, []);
}

function UnityContainer(props: { children: React.ReactNode }): JSX.Element {
  return (
    <div
      id="unity-container"
      className="unity-desktop"
      style={{
        position: "relative",
        display: "grid",
        backgroundImage: "url(/img/maze_pattern_by_peax_under_CC.webp)",
      }}
    >
      {props.children}
    </div>
  );
}

function CanvasContainer(props: { children: React.ReactNode }): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        placeContent: "center",
        backgroundColor: "white",
      }}
    >
      {props.children}
    </div>
  );
}

function UnityCanvas(): JSX.Element {
  return (
    <canvas
      id="unity-canvas"
      width="96vw"
      height="calc(min(96vw/1.6, 90vh))"
      tabIndex={0}
    />
  );
}

function UnityLoadingBar(): JSX.Element {
  return (
    <div
      id="unity-loading-bar"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "none",
      }}
    >
      <div
        id="unity-logo"
        style={{
          width: 154,
          height: 130,
          background:
            "url('/static/TemplateData/unity-logo-light.png') no-repeat center",
        }}
      />
      <div
        id="unity-progress-bar-empty"
        style={{
          width: 141,
          height: 18,
          marginTop: 10,
          background:
            "url('/static/TemplateData/progress-bar-empty-light.png') no-repeat center",
        }}
      >
        <div
          id="unity-progress-bar-full"
          style={{
            width: "0%",
            height: 18,
            marginTop: 10,
            background:
              "url('/static/TemplateData/progress-bar-full-light.png') no-repeat center",
          }}
        />
      </div>
    </div>
  );
}

function UnityWarning(): JSX.Element {
  return (
    <div
      id="unity-warning"
      style={{
        position: "absolute",
        left: "50%",
        top: "5%",
        transform: "translate(-50%)",
        background: "white",
        padding: 10,
        display: "none",
      }}
    />
  );
}

function UnityFooter(): JSX.Element {
  return (
    <div id="unity-footer" style={{ display: "none" }}>
      <div
        id="unity-webgl-logo"
        style={{
          float: "left",
          width: 204,
          height: 38,
          background:
            "url('/static/TemplateData/webgl-logo.png') no-repeat center",
        }}
      />
      <div
        id="unity-fullscreen-button"
        style={{
          float: "right",
          color: "white",
          width: 38,
          height: 38,
          background:
            "url('/static/TemplateData/fullscreen-button.png') no-repeat center",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "40px 1fr",
          float: "left",
        }}
      >
        <div
          id="navlead-logo"
          style={{
            width: 40,
            height: 40,
            background: "url('/img/navlead_logo.png') no-repeat center",
          }}
        />
        <div
          id="unity-build-title"
          style={{
            color: "#a158a3",
            textAlign: "center",
            marginLeft: 5,
            marginRight: 10,
            fontFamily: brandFontFamily,
            fontSize: 26,
          }}
        >
          NavLead
        </div>
      </div>
    </div>
  );
}

function Unity3dNavSim(): JSX.Element {
  useLoadUnityScript();
  useNavGuide();
  return (
    <UnityContainer>
      <CanvasContainer>
        <UnityCanvas />
      </CanvasContainer>
      <UnityLoadingBar />
      <UnityWarning />
      <UnityFooter />
    </UnityContainer>
  );
}

export default Unity3dNavSim;
