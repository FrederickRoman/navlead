import { Box, Typography } from "@mui/material";

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

export default NavInstructions;
