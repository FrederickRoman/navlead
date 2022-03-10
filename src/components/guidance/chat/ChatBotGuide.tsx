interface Props {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  target: string;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitNavGuideReq: (event: any) => void;
}

function ChatBotGuide(props: Props): JSX.Element {
  const { question, setQuestion, handleSubmitNavGuideReq } = props;

  return (
    <section style={{ display: "grid", placeContent: "center" }}>
      <form onSubmit={handleSubmitNavGuideReq}>
        <label>
          Enter your question
          <input
            type="text"
            value={question}
            onChange={(e) => {
              e.stopPropagation();
              setQuestion(e.target.value);
            }}
          />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
}

export default ChatBotGuide;
