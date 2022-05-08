import { Grid, Box } from "@mui/material";
import NavInstructions from "./intro/NavInstructions";
import NavSimSection from "./simulation/NavSimSection";

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
          <NavSimSection />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavGuidance;
