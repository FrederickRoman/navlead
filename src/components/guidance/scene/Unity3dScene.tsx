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

function useUnityCanvasResize(): [string, string] {
  const DEFAULT_UNITY_CANVAS_WIDTH = "480px";
  const DEFAULT_UNITY_CANVAS_HEIGHT = "300px";
  const [width, setWidth] = useState<string>(DEFAULT_UNITY_CANVAS_WIDTH);
  const [height, setHeight] = useState<string>(DEFAULT_UNITY_CANVAS_HEIGHT);

  useEffect(() => {
    function resizeUnityCanvas(): void {
      if (/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)) {
        setWidth("95vw");
        setHeight("calc(min(95vw/1.6, 90vh))");
      } else {
        setWidth("480px");
        setHeight("300px");
      }
    }
    resizeUnityCanvas();
    window.addEventListener("resize", resizeUnityCanvas);
    return () => window.removeEventListener("resize", resizeUnityCanvas);
  }, []);

  return [width, height];
}

function Unity3DMap(): JSX.Element {
  useLoadUnityScript();
  useNavGuide();
  const [width, height] = useUnityCanvasResize();

  return (
    <>
      <div
        id="unity-container"
        className="unity-desktop"
        style={{ display: "grid", placeContent: "center" }}
      >
        <canvas id="unity-canvas" width={width} height={height} tabIndex={0} />
        <div id="unity-loading-bar">
          <div id="unity-logo" />
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full" />
          </div>
        </div>
        <div id="unity-warning" />
        <div id="unity-footer">
          <div id="unity-webgl-logo" />
          <div id="unity-fullscreen-button" />
          <div id="unity-build-title">NavLead</div>
        </div>
      </div>
    </>
  );
}

export default Unity3DMap;
