import { Box, Grid, Typography } from "@mui/material";

function PageLongIntro(): JSX.Element {
  return (
    <Box
      component="section"
      px={2}
      py={4}
      sx={{
        fontSize: "clamp(2em, 0.5vh, 3em)",
        textAlign: "center",
        backgroundImage: "url(/img/maze_pattern_by_peax_under_CC.webp)",
      }}
    >
      <Typography variant="h2">How does it work?</Typography>
      <p>
        Under the hood, NavLead is a machine learning model trained using the
        CVDN dataset.
      </p>
      <p>
        In particular, NavLead employs a sequence-to-sequence architecture that
        takes as input the sequence of words in the player&apos;s question along
        with the location of the player for context and outputs a sequence of
        generated words as a text answer.
      </p>
    </Box>
  );
}

export default PageLongIntro;
