import { useState } from "react";

function requestMapLocation(): Promise<string> {
  return new Promise((resolve, reject) => {
    const TIMEOUT_DELAY = 3000;
    const TIMEOUT_ERROR_MSG = "unity map location response took too long";
    const rejectTimeout = () => reject(TIMEOUT_ERROR_MSG);
    const timeoutId = setTimeout(rejectTimeout, TIMEOUT_DELAY);
    const resolveLocation = (event: Event): void => {
      clearTimeout(timeoutId);
      const location = (event as CustomEvent).detail;
      resolve(location);
    };
    window.addEventListener("unityResponse", resolveLocation, { once: true });
    window.sendRequestToUnity();
  });
}

function ChatBotGuide(): JSX.Element {
  const DEFAULT_QUESTION = "";
  const [question, setQuestion] = useState<string>(DEFAULT_QUESTION);

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const mapLocation = await requestMapLocation();
      console.log(mapLocation);
      console.log(question);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section style={{ display: "grid", placeContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your question
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
}

export default ChatBotGuide;
