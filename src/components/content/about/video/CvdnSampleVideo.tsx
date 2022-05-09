import YouTubeVideo from "@/components/video/YouTubeVideo";
import useWindowWidth from "@/hooks/useWindowWidth";
import theme from "@/themes/theme";
import { useMediaQuery } from "@mui/material";

function CvdnSampleVideo() {
  const windowWidth = useWindowWidth();
  const isScreenWidthNarrow = useMediaQuery(theme.breakpoints.down("xs"));
  const isScreenWidthWide = useMediaQuery(theme.breakpoints.down("md"));
  const pad = isScreenWidthWide ? 200 : 600;
  const width = isScreenWidthNarrow ? "auto" : `${windowWidth - pad}px`;
  const height = isScreenWidthNarrow
    ? "auto"
    : `${(windowWidth - pad) * (360 / 640)}px`;
  return (
    <YouTubeVideo
      title="CVDN interaction"
      videoId="BonlITv_PKw"
      width={width}
      height={height}
    />
  );
}

export default CvdnSampleVideo;
