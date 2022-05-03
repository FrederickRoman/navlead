import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExternalLink from "@/components/link/ExternalLink";
import sunHouseModelImg from "@/public/img/sun_house_side_view.png";
import sunHousePhotoImg from "@/public/img/sun_house_wiki.jpg";


function ProcessDiagramImage(): JSX.Element {
  const theme = useTheme();
  const isScreenWide = useMediaQuery(theme.breakpoints.up("sm"));
  const src = `img/${isScreenWide ? "horizontal" : "vertical"}_diagram.png`;
  return <img src={src} alt="navlead process diagram" width="100%" />;
}

function PageLongIntro(): JSX.Element {
  return (
    <Box
      component="section"
      px={2}
      py={4}
      sx={{
        fontSize: "clamp(2em, 0.5vh, 3em)",
        backgroundImage: "url(/img/maze_pattern_by_peax_under_CC.webp)",
      }}
    >
      <Grid container justifyContent="start" alignItems="center">
        <Grid item>
          <Box py={5}>
            <Box component="h2" sx={{ textAlign: "center" }}>
              How does it work?
            </Box>
            <Typography variant="inherit" sx={{ textAlign: "left" }}>
              Each question is processed roughly as follows:
            </Typography>
            <Box component="ul" sx={{ listStyleType: "decimal" }}>
              <li>
                The 3D enviroment is displayed on your browser. Then you ask a
                question to the chatbot.
              </li>
              <li>
                This pages sends the question along with the user&apos;s location in
                the 3D enviroment to an API server requesting the answer.
              </li>
              <li>The API server validates and authentificates the request.</li>
              <li>
                The server runs the NavLeadNet deep learning model. It outputs a
                textual answer.
              </li>
              <li>
                Finally the answer is sent all the way back to the chatbot.
              </li>
            </Box>
            <ProcessDiagramImage />
          </Box>
          <Grid container justifyContent="start" alignItems="center">
            <Grid item>
              <Box py={5}>
                <Box component="h3" sx={{ textAlign: "left" }}>
                  3D simulated enviroment
                </Box>
                <p style={{ textAlign: "left" }}>
                  The enviroment used in the demo is a reconstruction of Frank
                  Lloyd Wright&apos;s final design: the circular sun house.
                </p>
                <p style={{ textAlign: "left" }}>
                  It was constructed using Blender and exported to Unity to run
                  on your browser.
                </p>
                <p style={{ textAlign: "left" }}>
                  The chatbot&apos;s UI was then added in Unity as well.
                </p>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  gap={10}
                >
                  <Grid item>
                    <Image
                      src={sunHousePhotoImg}
                      placeholder="blur"
                      layout="responsive"
                      alt="Circular Sun House wikimedia photo"
                    />
                    <Typography variant="subtitle2">
                      Circular Sun House on &nbsp;
                      <ExternalLink href="https://commons.wikimedia.org/wiki/File:Paradise_Valley-Norman_Lykes_House-1959-1967.JPG">
                        wikimedia
                      </ExternalLink>
                      &nbsp; under &nbsp;
                      <ExternalLink href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                        CC
                      </ExternalLink>
                      &nbsp;
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Image
                      src={sunHouseModelImg}
                      placeholder="blur"
                      layout="responsive"
                      alt="Circular Sun House CG model in Blender"
                    />
                    <Typography variant="subtitle2">
                      CG reconstruction of Circular Sun House using Blender
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item>
              <Box py={5}>
                <Box component="h3" sx={{ textAlign: "left" }}>
                  NavLeadNet
                </Box>

                <p style={{ textAlign: "left" }}>
                  NavLeadNet is the navigation guidance deep learning model used
                  here.
                </p>
                <p style={{ textAlign: "left" }}>
                  This model is a sequence-to-sequence architecture that takes
                  the traveler&apos;s question and location (as input sequence)
                  and, then, returns a textual answer (as output sequence).
                </p>
                <p style={{ textAlign: "left" }}>
                  It was trained using the CVDN (Cooperative Vision-and-Dialog
                  Navigation) dataset. CVDN is a dataset of human-human dialogs
                  situated in simulated, photorealistic home environments. The
                  3D enviroment in the demo was reconstructed based on one of
                  those enviroments.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PageLongIntro;
