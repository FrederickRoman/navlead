import { Box, Typography } from "@mui/material";

function ReferencesSection(): JSX.Element {
  return (
    <Box component="section" id="about_references">
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        References
      </Typography>
      <Typography variant="body1">Todo</Typography>
      <ul>
        <li>
          <ul>
            Simulation
            <li>Circular Sun House (a.k.a. Norman Lykes House)</li>
            <li>Blender official site</li>
            <li>Unity official site</li>
          </ul>
        </li>
        <li>
          <ul>
            Client
            <li>React Official site</li>
            <li>React hooks</li>
            <li>Nextjs Officail site</li>
            <li>Bridging Unity to javascript</li>
          </ul>
        </li>
        <li>
          <ul>
            Server
            <li>Django Official site</li>
          </ul>
        </li>
        <li>
          <ul>
            Machine Learning
            <li>CVDN dataset official site</li>
            <li>CVDN interaction video</li>
            <li>Pytorch official site</li>
            <li>Sequence to sequency architecture</li>
            <li>Cross entropy loss</li>
            <li>Teacher forcing</li>
            <li>BLUE score</li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}

export default ReferencesSection;
