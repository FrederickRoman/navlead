import { Grid, Box } from "@mui/material";
import NavInstructions from "./intro/NavInstructions";
import Unity3dScene from "./scene/Unity3dScene";

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
