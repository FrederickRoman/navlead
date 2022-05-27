import useWindowWidth from "@/hooks/useWindowWidth";
import { Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const CONTAINER_WIDTH: Readonly<{ [size: string]: string }> = Object.freeze({
  small: "80%",
  medium: "70%",
  large: "60%",
  extraLarge: "50%",
});

function ImgContainer(props: Props): JSX.Element {
  const windowWidth = useWindowWidth();
  const width =
    windowWidth < 600
      ? CONTAINER_WIDTH.small
      : windowWidth < 900
      ? CONTAINER_WIDTH.medium
      : windowWidth < 1200
      ? CONTAINER_WIDTH.large
      : CONTAINER_WIDTH.extraLarge;
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item sx={{ width }}>
        {props.children}
      </Grid>
    </Grid>
  );
}

export default ImgContainer;
