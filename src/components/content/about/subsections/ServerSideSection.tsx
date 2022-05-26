import { Box, Grid, Stack, Typography } from "@mui/material";
import requestSample from "../code/snippet/js/requestSample";
import responseSample from "../code/snippet/js/responseSample";

function ServerSideSection(): JSX.Element {
  return (
    <Box component="section" id="about_server-side">
      <Stack spacing={4}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "medium" }}
        >
          Server-side API
        </Typography>
        <Typography variant="h3" py={1} id="about_req-handling">
          Request handling
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box maxWidth={700} px={4}>
              <Typography variant="h6">
                The NavGuideService acts as a proxy that sends a request like
                this to the ML REST API server:
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box component="pre" width={280} p={4} border="1px solid #1e1e1e">
              {requestSample}
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box maxWidth={700}  px={2}>
              <Typography variant="h6">
                After validation and authentication, it runs NavleadNet to infer
                the answer to the traveler&apos;s question given his/her
                location and target. The response looks as follows:
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box component="pre" width={280} p={4} border="1px solid #1e1e1e">
              {responseSample}
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ServerSideSection;
