import Image from "next/image";
import { Box, Grid, Stack, Typography } from "@mui/material";
import sysArchDiagram from "@/public/img/sys_arch_diagram.svg";
import reactLogo from "@/public/img/react_logo.svg";
import blenderLogo from "@/public/img/blender_logo.svg";
import unityLogo from "@/public/img/unity_logo.svg";
import djangoLogo from "@/public/img/django_logo.svg";
import pytorchLogo from "@/public/img/pytorch_logo.svg";
import nextjsLogo from "@/public/img/nextjs_logo.svg";

function DescriptionSubsection(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center" gap={4}>
      <Grid item>
        <Stack maxWidth={600} spacing={2}>
          <Typography variant="h2" sx={{ fontWeight: "medium" }}>
            TLDR;
          </Typography>
          <Typography variant="h6">
            Navlead is an AI-powered assistant chatbot for navigation in 3D
            enviroments. The simulation, the chatbot, and their deployment
            online are all part of this project.
          </Typography>
          <Typography variant="h6">
            The simulation has custom 3D assets, a chat dialog box, motion
            controls and game logic. The chatbot has a custom ML NLP model that
            has a seq2seq architecture and was trained on CVDN dataset. The
            client-host loads the simulation and mediates its interactions with
            the API server. The API server authenticates the request and runs
            the ML NLP model.
          </Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Image
          src={sysArchDiagram}
          width={400}
          height={400}
          alt="navlead architecture diagram"
        />
      </Grid>
    </Grid>
  );
}

function TechStackSubsection(): JSX.Element {
  return (
    <Grid container justifyContent="space-evenly" alignItems="center" gap={4}>
      <Grid item>
        <Stack spacing={4}>
          <Box>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Grid item>
                <Typography variant="h4">Simulation</Typography>
              </Grid>
              <Grid item>
                <Image
                  src={blenderLogo}
                  width={275}
                  height={100}
                  alt="Blender logo"
                />
                <Image
                  src={unityLogo}
                  width={275}
                  height={100}
                  alt="Unity logo"
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Grid item>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Grid item>
                    <Typography variant="h4">Front-end</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">(Browser client)</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Image
                  src={reactLogo}
                  width={275}
                  height={100}
                  alt="React logo"
                />
                <Image
                  src={nextjsLogo}
                  width={275}
                  height={100}
                  alt="Nextjs logo"
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Grid item>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Grid item>
                    <Typography variant="h4">Back-end</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">(API server)</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Image
                  src={djangoLogo}
                  width={275}
                  height={100}
                  alt="Django logo"
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Grid item>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Grid item>
                    <Typography variant="h4">Machine learning</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">(Navigation guide)</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Image
                  src={pytorchLogo}
                  width={275}
                  height={100}
                  alt="Pytorch logo"
                />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

function TldrSection(): JSX.Element {
  return (
    <Box component="section" id="about_tldr">
      <Stack spacing={8}>
        <DescriptionSubsection />
        <TechStackSubsection />
      </Stack>
    </Box>
  );
}

export default TldrSection;
