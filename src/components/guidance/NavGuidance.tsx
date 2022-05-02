import { Grid, Box, Typography } from "@mui/material";
import Unity3dScene from "./scene/Unity3dScene";

function NavInstructions(): JSX.Element {
  return (
    <Box
      sx={{
        color: "white",
        fontSize: "clamp(2em, 0.05vh, 3em)",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
        Demo instructions:
      </Typography>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h5">Choose a target household item</Typography>
        <Typography variant="h5">Navigate the house</Typography>
        <Typography variant="h5">Ask the chatbot for assistance</Typography>
      </Box>
    </Box>
  );
}

function NavGuidance(): JSX.Element {
  return (
    <Box
      component="section"
      py="clamp(16rem, 10vh, 30rem)"
      sx={{ bgcolor: "black" }}
    >
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Grid item>
          <NavInstructions />
        </Grid>
        <Grid item>
          <Unity3dScene />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavGuidance;
