import Unity3DMap from "./map/Unity3DMap";
import ChatBotGuide from "./chat/ChatBotGuide";

function NavGuidance(): JSX.Element {
  return (
    <>
      <Unity3DMap />
      <ChatBotGuide />
    </>
  );
}

export default NavGuidance;
