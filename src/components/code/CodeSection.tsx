import dynamic from "next/dynamic";
import { Grid, Box, Paper, Stack } from "@mui/material";

interface Props {
  codeName?: string;
  codeLang: "javascript" | "python" | "csharp" | "tsx";
  codeText: string;
}

const SyntaxHighlightedCode = dynamic(
  () => import("./highlight/SyntaxHighlightedCode"),
  { ssr: false } // Must be turned off to prevent inconsistencies in rendering
);

function CodeSection(props: Props): JSX.Element {
  const { codeName, codeLang, codeText } = props;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Stack>
          {codeName && (
            <Box
              width="90vw"
              border="1px solid black"
              style={{
                backgroundColor: "black",
                color: "#0CFE6F",
                textAlign: "center",
                fontSize: 20,
                overflow: "auto"
              }}
            >
              {codeName}
            </Box>
          )}
          <Box
            component={Paper}
            square
            width="90vw"
            height="auto"
            style={{ background: "#1e1e1e" }}
          >
            <SyntaxHighlightedCode codeLang={codeLang} codeText={codeText} />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CodeSection;
