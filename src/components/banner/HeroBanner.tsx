import { Box, Grid } from "@mui/material";
import BackgroundVideo from "./background/BackgroundVideo";
import FullBrandLogo from "./foreground/FullBrandLogo";
import BrandSlogan from "./foreground/BrandSlogan";

function HeroBanner(): JSX.Element {
  return (
    <Box component="section" role="banner" position="relative">
      <Box top={0} left={0} sx={{ background: "black" }}>
        <BackgroundVideo />
      </Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.5)",
          minWidth: 300,
        }}
      >
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Box mt={1}>
              <FullBrandLogo />
            </Box>
          </Grid>
          <Grid item>
            <BrandSlogan />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HeroBanner;
