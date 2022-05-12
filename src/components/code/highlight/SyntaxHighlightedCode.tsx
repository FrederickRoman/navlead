import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
require("prismjs/components/prism-python");
require("prismjs/components/prism-csharp");

interface Props {
  codeLang: "javascript" | "python" | "csharp";
  codeText: string;
}

function SyntaxHighlightedCode(props: Props): JSX.Element {
  const { codeLang, codeText } = props;
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${codeLang}`}>{codeText}</code>
      </pre>
    </div>
  );
}

export default SyntaxHighlightedCode;
