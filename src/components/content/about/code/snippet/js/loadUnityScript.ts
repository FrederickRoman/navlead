const loadUnityScript = `import { useEffect } from "react";

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
  
  export default useLoadUnityScript;`

  export default loadUnityScript;