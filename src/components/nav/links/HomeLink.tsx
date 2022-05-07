import Image from "next/image";
import Link from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import logoImg from "@/public/img/navlead_logo_light.png";

function HomeLink(): JSX.Element {
  return (
    <Link href="/" passHref>
      <Box component="a" style={{ textDecoration: "none" }}>
        <Button>
          <Grid container justifyContent="center" alignItems="center" gap={0.1}>
            <Grid item>
              <Grid container justifyContent="center" alignItems="center">
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
    </Link>
  );
}

export default HomeLink;
