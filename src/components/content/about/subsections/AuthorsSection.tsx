import Image from "next/image";
import Link from "next/link";
import ImgContainer from "@/components/container/ImgContainer";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import homeroPhoto from "@/public/img/Homero_Roman.png";
import frederickPhoto from "@/public/img/Frederick_Roman.png";
import HREFS from "@/constants/hrefs";

function FrederickAuthorSection(): JSX.Element {
  return (
    <Stack spacing={8}>
      <Typography
        variant="h3"
        py={1}
        sx={{ textAlign: "center" }}
        id="about_author-frederick-roman"
      >
        Frederick Roman
      </Typography>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <Box py={8}>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Image
                  src={frederickPhoto}
                  width={300}
                  height={370}
                  alt="Frederick Roman photo"
                />
              </Grid>
              <Grid item>
                <Stack spacing={2}>
                  <Link href={HREFS.frederickRoman} passHref>
                    <Button
                      component="a"
                      variant="contained"
                      startIcon={<WebIcon />}
                    >
                      Main Page
                    </Button>
                  </Link>
                  <Link href={HREFS.frederickRomanGithub} passHref>
                    <Button
                      component="a"
                      variant="contained"
                      startIcon={<GitHubIcon />}
                    >
                      Github
                    </Button>
                  </Link>
                  <Link href={HREFS.frederickRomanLinkedIn} passHref>
                    <Button
                      component="a"
                      variant="contained"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item sx={{ maxWidth: 700 }}>
          <Stack spacing={4}>
            <Typography variant="h4">
              I am ML software engineer that builds and brings AI systems to
              life on the web.
            </Typography>
            <Typography variant="h5">
              Main contribution areas: Front-end (React, Next), back-end
              (Django) and DevOps. I am the webmaster for this page, and primary
              point of contact for this project.
            </Typography>
            <Typography variant="h5">
              I put the modules (simulation, AI) together and deploy the
              connected system. I …
              <ul>
                <li> Connected the client-host to the API server</li>
                <li>
                  Build the client-side bridge from the simulation to the
                  client-host
                </li>
                <li> Deployed the system online.</li>
              </ul>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

function HomeroAuthorSection(): JSX.Element {
  return (
    <Stack spacing={8}>
      <Typography
        variant="h3"
        py={1}
        sx={{ textAlign: "center" }}
        id="about_author-homero-roman"
      >
        Homero Roman
      </Typography>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <Box py={8}>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Box py={4}>
                  <Image
                    src={homeroPhoto}
                    width={300}
                    height={300}
                    alt="Homero Roman photo"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Stack spacing={2}>
                  <Link href={HREFS.homeroRoman} passHref>
                    <Button
                      component="a"
                      variant="contained"
                      startIcon={<WebIcon />}
                    >
                      Main Page
                    </Button>
                  </Link>
                  <Link href={HREFS.homeroRomanGithub} passHref>
                    <Button
                      component="a"
                      variant="contained"
                      startIcon={<GitHubIcon />}
                    >
                      Github
                    </Button>
                  </Link>
                  <Link href={HREFS.homeroRomanLinkedIn} passHref>
                    <Button
                      component="a"
                      variant="contained"
                      startIcon={<LinkedInIcon />}
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item sx={{ maxWidth: 700 }}>
          <Stack spacing={4}>
            <Typography variant="h4">
              Machine Learning Software engineer with a passion for XR
            </Typography>
            <Typography variant="h5">
              Main contribution areas: 3D modeling (Blender), VR (Unity), and ML
              development (Pytorch)
            </Typography>
            <Typography variant="h6">
              Homero wrote the majority of the code for the machine learning
              model end-to-end. The initial code base was the CVDN GitHub
              repository. To this, Homero added the speaker model using a
              sequence-to-sequence architecture. Also, he implemented several
              data structures and algorithms for handling and interaction with
              the CVDN data to be able to be ported to any simulator.
            </Typography>
            <Typography variant="h6">
              Homero also leverage web development full-stack expertise to
              implement the Django server that takes in question requests and
              responds with text answers from the NavLead neural network.{" "}
            </Typography>
            <Typography variant="h6">
              Last but not least, Homero sculpted the 3D models in Blender and
              implemented all the Unity code from scratch.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

function AuthorsSection(): JSX.Element {
  return (
    <Box component="section" id="about_authors">
      <Stack spacing={8}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "medium" }}
        >
          Authors
        </Typography>
        <Stack spacing={8} divider={<Divider />}>
          <FrederickAuthorSection />
          <HomeroAuthorSection />
        </Stack>
      </Stack>
    </Box>
  );
}

export default AuthorsSection;
