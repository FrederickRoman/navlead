import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import type { NextPage } from "next";

const PageHead = (): JSX.Element => (
  <Head>
    <title>Navlead | Coming soon!</title>
    <meta
      name="description"
      content="Navlead (3D Navigation Assistance Chatbot) comming soon page."
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const ComingSoon: NextPage = () => (
  <>
    <PageHead />
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
