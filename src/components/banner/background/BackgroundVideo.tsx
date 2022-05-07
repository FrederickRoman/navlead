import { Box, Grid } from "@mui/material";

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

export default BackgroundVideo;
