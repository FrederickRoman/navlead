import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";

function MainFooter(): JSX.Element {
  const currentYear: number = new Date().getFullYear();
  return (
    <AppBar position="static" sx={{ py: 2 }}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body1" color="#f3e5f5" align="center">
              <Grid
                container
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
              >
                <Grid item>
                  ©
                  <Link
                    color="inherit"
                    underline="hover"
                    href="https://www.frederickroman.com/"
                  >
                    &nbsp; Frederick Roman {currentYear} &amp;
                    <br />
                  </Link>
                </Grid>

                <Grid item>
                  ©
                  <Link
                    color="inherit"
                    underline="hover"
                    href="https://homeroroman.com/"
                  >
                    &nbsp; Homero Roman {currentYear}
                  </Link>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid item>About</Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MainFooter;
