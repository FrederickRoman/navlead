import Link from "next/link";
import { Box, Typography } from "@mui/material";

function AboutLink(): JSX.Element {
  return (
    <Link href="/about" passHref>
      <Box component="a" sx={{ textDecoration: "none", color: "#f3e5f5" }}>
        <Typography
          variant="h6"
          sx={{
            textTransform: "none",
            color: "#f3e5f5",
          }}
        >
          About
        </Typography>
      </Box>
    </Link>
  );
}

export default AboutLink;
