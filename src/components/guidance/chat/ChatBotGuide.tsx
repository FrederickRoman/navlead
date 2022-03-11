interface Props {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  targetOptions: readonly { value: string; text: string }[];
  target: string;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
  handleSubmitNavGuideReq: (event: any) => void;
}

function ChatBotGuide(props: Props): JSX.Element {
  const {
    question,
    setQuestion,
    targetOptions,
    target,
    setTarget,
    answer,
    handleSubmitNavGuideReq,
  } = props;

  return (
    <section style={{ display: "grid", placeContent: "center" }}>
      <div>{answer}</div>
      <form onSubmit={handleSubmitNavGuideReq}>
        <select value={target} onChange={(e) => setTarget(e.target.value)}>
          {targetOptions.map(({ value, text }, i) => (
            <option value={value} key={i}>
              {text}
            </option>
          ))}
        </select>
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
