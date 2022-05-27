import ExternalLink from "@/components/link/ExternalLink";
import { Box, Grid, Stack, Typography } from "@mui/material";
import HREFS from "@/constants/hrefs";

function ReferencesSection(): JSX.Element {
  return (
    <Box component="section" id="about_references">
      <Stack spacing={4}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          References
        </Typography>
        <Grid container justifyContent="center" alignItems="start">
          <Box width={260} p={4}>
            <Stack spacing={1}>
              <Box
                component="header"
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Simulation
              </Box>
              <ExternalLink href={HREFS.sunHouseOnCurbed}>
                Circular Sun House (a.k.a. Norman Lykes House) on Curbed
              </ExternalLink>
              <ExternalLink href={HREFS.blender}>
                Blender official site
              </ExternalLink>
              <ExternalLink href={HREFS.unityPage}>
                Unity official site
              </ExternalLink>
              <ExternalLink href={HREFS.doorProblem}>
                Door problem of game design
              </ExternalLink>
            </Stack>
          </Box>
          <Box width={260} p={4}>
            <Stack spacing={1}>
              <Box
                component="header"
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Client
              </Box>
              <ExternalLink href={HREFS.reactPage}>
                React Official site
              </ExternalLink>
              <ExternalLink href={HREFS.reactHooksPage}>
                React hooks
              </ExternalLink>
              <ExternalLink href={HREFS.nextjsPage}>
                Nextjs Officail site
              </ExternalLink>
              <ExternalLink href={HREFS.unityDocsJs}>
                Bridging Unity to javascript
              </ExternalLink>
              <ExternalLink href={HREFS.addExtJsFiles}>
                Adding external js files
              </ExternalLink>
            </Stack>
          </Box>
          <Box width={260} p={4}>
            <Stack spacing={1}>
              <Box
                component="header"
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Server
              </Box>
              <ExternalLink href={HREFS.djangoPage}>
                Django Official site
              </ExternalLink>
              <ExternalLink href={HREFS.restApiWiki}>REST API</ExternalLink>
            </Stack>
          </Box>
          <Box width={260} p={4}>
            <Stack spacing={1}>
              <Box
                component="header"
                style={{ textAlign: "center", fontWeight: "bold" }}
              >
                Machine Learning
              </Box>
              <ExternalLink href={HREFS.cvdnPage}>
                CVDN dataset official site
              </ExternalLink>
              <ExternalLink href={HREFS.pytorchPage}>
                Pytorch official site
              </ExternalLink>
              <ExternalLink href={HREFS.seq2seq}>
                Sequence to sequency architecture
              </ExternalLink>
              <ExternalLink href={HREFS.crossEntropy}>
                Cross entropy loss
              </ExternalLink>
              <ExternalLink href={HREFS.teacherForcing}>
                Teacher forcing
              </ExternalLink>
              <ExternalLink href={HREFS.blueScore}>BLUE score</ExternalLink>
            </Stack>
          </Box>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ReferencesSection;
