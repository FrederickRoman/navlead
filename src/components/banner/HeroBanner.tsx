import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import logoImg from "@/public/img/navlead_logo.png";

function BackgroundVideo(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Box component="video" autoPlay loop muted width="99vw">
          <source src="video/hero_bg_video.mp4" type="video/mp4" />
        </Box>
      </Grid>
    </Grid>
  );
}

function FullBrandLogo(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Image src={logoImg} width={80} height={80} alt="Navlead logo" />
      </Grid>
      <Grid item>
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "primary.light",
              fontFamily: "'Audiowide', cursive",
              fontSize: "clamp(2rem, 10vw, 5rem)",
              textAlign: "center",
            }}
          >
            Navlead
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

function BrandSlogan(): JSX.Element {
  return (
    <Typography
      variant="h2"
      sx={{
        color: "#f3e5f5",
        fontSize: "clamp(1rem, 5vw, 2.5rem)",
        textAlign: "center",
        padding: 2,
      }}
    >
      3D Navigation Assistance Chatbot
    </Typography>
  );
}

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
