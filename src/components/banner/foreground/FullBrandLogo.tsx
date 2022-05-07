import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { brandFontFamily } from "@/themes/theme";
import logoImg from "@/public/img/navlead_logo.svg";

function FullBrandLogo(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Image src={logoImg} width="100" height="100" alt="Navlead logo" />
      </Grid>
      <Grid item>
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "primary.light",
              fontFamily: brandFontFamily,
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

export default FullBrandLogo;
