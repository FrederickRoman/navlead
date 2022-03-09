import { useEffect } from "react";

declare global {
  interface Window {
    sendRequestToUnity: () => void;
    processMessageFromUnity: () => void;
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
      <div id="unity-container" className="unity-desktop">
        <canvas id="unity-canvas" width="960" height="600" />
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
