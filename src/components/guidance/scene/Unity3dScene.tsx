import { useState, useEffect } from "react";
import type Location from "@/types/interfaces/Location";
import type Traveler from "@/types/interfaces/Traveler";
import NavGuideService from "@/services/client/NavGuideService";

declare global {
  interface Window {
    processMessageFromUnity: () => void;
    sendAnswerToUnity: (answer: string) => void;
  }
}

function useLoadUnityScript(): void {
  useEffect(() => {
    function appendUnityLoaderScript(): void {
      try {
        const script = document.createElement("script");
        script.src = "/static/script.js";
        script.async = true;
        document.body.appendChild(script);
      } catch (error) {
        console.log(error);
      }
    }
    appendUnityLoaderScript();
  }, []);
}

function useNavGuide(): void {
  useEffect(() => {
    const formatStringToLocation = (location: string): Location => {
      const [x, y, z] = location.split(",").map(parseFloat);
      return { x, y, z };
    };
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
    window.addEventListener("askNavGuide", askNavGuide);
    return () => window.removeEventListener("askNavGuide", askNavGuide);
  }, []);
}

function Unity3DMap(): JSX.Element {
  useLoadUnityScript();
  useNavGuide();

  return (
    <>
      <div
        id="unity-container"
        className="unity-desktop"
        style={{
          position: "relative",
          display: "grid",
          //placeItems: "center",
          backgroundImage: "url(/img/maze_pattern_by_peax_under_CC.webp)",
        }}
      >
        <canvas
          id="unity-canvas"
          width="100vw"
          height="calc(min(100vw/1.6, 90vh))"
          tabIndex={0}
        />
        <input id="canvas-mobile-keyboard-input" type="text" style={{display:"none"}}/>
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
        <div id="unity-footer">
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
             float: "left"
              
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
                //lineHeight: 38,
                fontFamily: "'Audiowide', arial, cursive",
                fontSize: 26,
              }}
            >
              NavLead
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Unity3DMap;
