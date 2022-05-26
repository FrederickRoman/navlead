import YouTubeVideo from "@/components/video/YouTubeVideo";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, useMediaQuery } from "@mui/material";

function SunHouseTourVideo(): JSX.Element {
  const windowWidth = useWindowWidth();
  const theme = useTheme();
  const isScreenWidthNarrow = useMediaQuery(theme.breakpoints.down("sm"));
  const width = isScreenWidthNarrow ? "100%" : `${windowWidth / 2}px`;
  const height = isScreenWidthNarrow
    ? "100%"
    : `${(windowWidth / 2) * (360 / 640)}px`;
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Box width={width} height={height}>
          <YouTubeVideo title="CVDN interaction" videoId="EHgn-eMxFnk" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SunHouseTourVideo;
