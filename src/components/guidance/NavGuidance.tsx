import { useEffect } from "react";
import Unity3DMap from "./map/Unity3DMap";
import ChatBotGuide from "./chat/ChatBotGuide";

declare global {
  interface Window {
    sendRequestToUnity: () => void;
    processMessageFromUnity: () => void;
  }
}

function NavGuidance(): JSX.Element {
  useEffect(() => {
    window.addEventListener("unityResponse", (e) =>
      console.log((e as CustomEvent).detail)
    );
  }, []);

  const handleClick = () => window.sendRequestToUnity();

  return (
    <>
      <Unity3DMap />
      <ChatBotGuide />
      <button onClick={handleClick}>Request Location</button>
    </>
  );
}

export default NavGuidance;
