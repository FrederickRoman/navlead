import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import logoImg from "@/public/img/navlead_logo_light.png";

function HomeLink(): JSX.Element {
  return (
    <Box>
      <Button>
        <Grid container justifyContent="center" alignItems="center" gap={0.1}>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center" >
              <Grid item>
                <Image
                  priority
                  width={22}
                  height={22}
                  alt="Person texting on a mobile chat app while driving"
                  src={logoImg}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                textTransform: "none",
                fontFamily: "'Audiowide', cursive",
                color: "#f3e5f5",
              }}
            >
              Navlead
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Box>
  );
}

function AboutLink(): JSX.Element {
  return (
    <Box>
      <IconButton size="large" aria-label="about">
        <HelpIcon sx={{ color: "background.default" }} />
      </IconButton>
    </Box>
  );
}

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
