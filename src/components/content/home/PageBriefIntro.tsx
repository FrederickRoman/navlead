import { Box, Grid, Typography } from "@mui/material";

function PageBriefIntro(): JSX.Element {
  return (
    <>
      <Box px="5px" pt={20} sx={{ bgcolor: "black" }}>
        <Grid
          container
          component="section"
          justifyContent="center"
          alignItems="center"
          px={2}
          py={4}
          sx={{
            fontSize: "clamp(2em, 0.05vh, 3em)",
            textAlign: "center",
            backgroundImage: "url(/img/maze_pattern_by_peax_under_CC.webp)",
            borderRadius: 5,
          }}
        >
          <Grid item>
            <Typography variant="h2">
              NavLead is an AI-driven chatbot that gives navigation assistance
              in a 3D enviroment.
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{ textAlign: "left", fontSize: "clamp(1em, 0.025vh, 1.5em)" }}
            >
              <p>
                The chatbot was trained on real-world navigation assistance
                dialogs to give natural responses.
              </p>
              <p>
                The 3D enviroments were reconstructed form real-world houses.
              </p>
              <p>
                No downloads are neeeded; both the chatbot and 3D enviroments
                are on this site.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        top={0}
        left={0}
        width="100%"
        height="67.65px"
        mt="-5px"
        sx={{
          overflow: "hidden",
          lineHeight: 0,
          bgcolor: "black",
        }}
      >
        <Box
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          position="relative"
          width="calc(100% + 1.3px)"
          height={150}
          sx={{ display: "block" }}
        >
          <Box
            component="path"
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            fill="#eeeeee"
          />
        </Box>
      </Box>
    </>
  );
}

export default PageBriefIntro;
