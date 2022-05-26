import { useEffect } from "react";
import Prism from "prismjs";
import VsCodeTheme from "../theme/VsCodeTheme";
//import "prismjs/themes/prism-tomorrow.css";
require("prismjs/components/prism-python");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");

interface Props {
  codeLang: "javascript" | "python" | "csharp" | "tsx";
  codeText: string;
}

function SyntaxHighlightedCode(props: Props): JSX.Element {
  const { codeLang, codeText } = props;
  useEffect(() => Prism.highlightAll(), []);
  return (
    <VsCodeTheme>
      <div className="Code">
        <pre>
          <code className={`language-${codeLang}`}>{codeText}</code>
        </pre>
      </div>
    </VsCodeTheme>
  );
}

export default SyntaxHighlightedCode;
