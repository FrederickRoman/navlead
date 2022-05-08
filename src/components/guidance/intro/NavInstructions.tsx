import { Box, Grid, Typography } from "@mui/material";

function NavInstructions(): JSX.Element {
  return (
    <Box
      sx={{
        color: "white",
        fontSize: "clamp(2em, 0.05vh, 3em)",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h3" sx={{ fontWeight: "bold" }}>
        Demo instructions:
      </Typography>
      <Box px={1} my={2} sx={{ textAlign: "left" }}>
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Grid item>
            <Typography variant="h5" component="h4">
              Choose a target household item
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h4">
              Navigate the house (using WASD keys)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h4">
              Ask the chatbot for assistance
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default NavInstructions;
