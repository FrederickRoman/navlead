import { useEffect } from "react";
import Location from "@/types/interfaces/Location";

declare global {
  interface Window {
    sendRequestToUnity: () => void;
    processMessageFromUnity: () => void;
    sendAnswerToUnity: (answer: string) => void;
  }
}

export class UnityMessager {
  static async requestTravelerLocation(): Promise<Location> {
    const unityMessageToLocation = (unityMessage: string): Location => {
      const splitMsg = unityMessage.split(",");
      const [x, y, z] = splitMsg.map(parseFloat);
      return { x, y, z };
    };
    return new Promise((resolve, reject) => {
      const TIMEOUT_DELAY = 3000;
      const TIMEOUT_ERROR_MSG = "unity map location response took too long";
      const rejectTimeout = () => reject(TIMEOUT_ERROR_MSG);
      const timeoutId = setTimeout(rejectTimeout, TIMEOUT_DELAY);
      const resolveLocation = (event: Event): void => {
        clearTimeout(timeoutId);
        const unityMessage = (event as CustomEvent).detail;
        const location = unityMessageToLocation(unityMessage);
        resolve(location);
      };
      window.addEventListener("unityResponse", resolveLocation, { once: true });
      window.sendRequestToUnity();
    });
  }
}

function Unity3DMap(): JSX.Element {
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

  return (
    <>
      <div
        id="unity-container"
        className="unity-desktop"
        style={{ display: "grid", placeContent: "center" }}
      >
        <canvas
          id="unity-canvas"
          width="480" //960
          height="300" //600
          tabIndex={0}
        ></canvas>
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
