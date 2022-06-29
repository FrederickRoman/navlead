import { Box, Grid, Button } from "@mui/material";
import Link from "next/link";

function LearnMoreSection(): JSX.Element {
  return (
    <Box
      py={20}
      sx={{
        backgroundImage: "url(/img/cartographer_by_Sam_Feyaerts_under_CC.png)",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Link href="/about" passHref>
            <Button component="a" variant="contained">
              How does it work?
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LearnMoreSection;
