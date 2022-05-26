import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  children: React.ReactNode;
}

function ImgContainer(props: Props): JSX.Element {
  const { breakpoints } = useTheme();
  const isSmall = useMediaQuery(breakpoints.down("sm"));
  const isMedium = useMediaQuery(breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(breakpoints.between("md", "lg"));
  const width = isSmall ? "80%" : isMedium ? "70%" : isLarge ? "60%" : "50%";
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item sx={{ width }}>
        {props.children}
      </Grid>
    </Grid>
  );
}

export default ImgContainer;
