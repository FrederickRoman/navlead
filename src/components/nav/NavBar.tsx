import { AppBar, Grid, Toolbar } from "@mui/material";
import AboutLink from "./links/AboutLink";
import HomeLink from "./links/HomeLink";

function NavBar(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <HomeLink />
          </Grid>
          <Grid item>
            <AboutLink />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
