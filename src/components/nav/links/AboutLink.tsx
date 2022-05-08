import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { lightestFontColor } from "@/themes/theme";

function AboutLink(): JSX.Element {
  return (
    <Link href="/comingSoon" passHref>
      <Box component="a" sx={{ textDecoration: "none", color: "#f3e5f5" }}>
        <Typography
          variant="h6"
          sx={{
            textTransform: "none",
            color: lightestFontColor,
          }}
        >
          About
        </Typography>
      </Box>
    </Link>
  );
}

export default AboutLink;
