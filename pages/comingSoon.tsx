import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import PageHead from "@/components/seo/PageHead";
import type { NextPage } from "next";

const ComingSoon: NextPage = () => (
  <>
    <PageHead
      title="Navlead | Coming soon!"
      description="Navlead (3D Navigation Assistance Chatbot) comming soon page."
    />
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100vw", height: "calc(100vh - 44px - 72px)" }}
    >
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(3rem, 15vw, 7.5rem)",
            textAlign: "center",
          }}
        >
          Coming Soon!
        </Typography>
      </Grid>
    </Grid>
  </>
);

export default ComingSoon;
