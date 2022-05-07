import { Box, Grid, Typography } from "@mui/material";
import SmoothScrollCss from "@/components/content/about/base/SmoothScrollCss";
import ContentIndex from "@/components/content/about/ContentIndex";
import ContentSection from "@/components/content/about/ContentSection";
import ImageCollage from "@/components/content/about/ImageCollage";

function About(): JSX.Element {
  return (
    <>
      <SmoothScrollCss />
      <Box component="article" sx={{ my: 4 }}>
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2" gutterBottom>
              About
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <ContentIndex />
              </Grid>
              <Grid item>
                <ImageCollage/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ContentSection />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default About;
