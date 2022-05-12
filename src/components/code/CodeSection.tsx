import dynamic from "next/dynamic";
import { Grid, Box } from "@mui/material";

interface Props {
  codeLang: "javascript" | "python" | "csharp";
  codeText: string;
}

const SyntaxHighlightedCode = dynamic(
  () => import("./highlight/SyntaxHighlightedCode"),
  { ssr: false }
);

function CodeSection(props: Props): JSX.Element {
  const { codeLang, codeText } = props;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Box width="90vw" height="auto">
          <SyntaxHighlightedCode codeLang={codeLang} codeText={codeText} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default CodeSection;
