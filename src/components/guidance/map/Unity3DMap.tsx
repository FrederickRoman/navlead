import { useEffect } from "react";

function Unity3DMap(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/static/script.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="unity-container" className="unity-desktop">
      <canvas id="unity-canvas" width="960" height="600"></canvas>
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
  );
}

export default Unity3DMap;
