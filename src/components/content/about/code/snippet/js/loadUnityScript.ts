const loadUnityScript = `import { useEffect } from "react";

/**
 * Appends Unity scripts when the component is mounted 
 * and removes them when is unmounted.
 * Note: Once appended, script.js appends loader.js and framework.js
 */
function useLoadUnityScript(): void {
    useEffect(() => {
      /* Source paths to Unity scripts */
      const UNITY_BOOTSTRAP_LOADER_SRC = "/static/script.js";
      const UNITY_BUILD_LOADER_SRC = "/static/Build/ReleaseBuild.loader.js";
      const UNITY_BUILD_FRAMEWORK_SRC = "/static/Build/ReleaseBuild.framework.js";
      /* Helper functions */
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
      /* Main functions */
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
      /* Function calls */
      appendUnityLoaderScript(); // on mount 
      return () => removeUnityScripts(); // on unmount
    }, []);
  }
  
  export default useLoadUnityScript;`

  export default loadUnityScript;