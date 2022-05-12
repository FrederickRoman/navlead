import CodeSection from "@/components/code/CodeSection";
import { Box, Typography } from "@mui/material";
import ResultsChart from "./chart/ResultsChart";
import unitySimToclientWindow from "./code/snippet/unitySimToclientWindow";
import CvdnSampleVideo from "./video/CvdnSampleVideo";



function ContentSection(): JSX.Element {
  return (
    <Box component="section" px={2} py={20}>
      <Box component="section" py={10}>
        <Typography variant="h2" id="about-tldr">
          TLDR;
        </Typography>
        <Typography variant="body1">Todo</Typography>
      </Box>
      <Box component="section" py={10}>
        <Typography variant="h2">Motivation</Typography>
        <Typography variant="body1">Todo</Typography>
      </Box>
      <Box component="section" py={10}>
        <Typography variant="h2" py={1}>
          3D simulated enviroment modeling
        </Typography>
        <Box py={1}>
          <Typography variant="h6">
            For the demo in this webpage, the 3D objects were created using
            Voxeldesk [5]and Blender[6]. Voxeldesk is an online voxel-art editor
            and a great tool for modeling with voxels. Voxeldesk was also
            developed by Frederick Roman [7] and Homero Roman [8] as an
            open-source online editor to make 3D art creation easy and
            installation-free. For NavLead, the first draft of the layout of the
            house is as shown in the following image:
          </Typography>
          <Typography variant="h6">
            Blender is a free and open-source professional-level 3D editor with
            a strong community of developers. For these reasons, Blender is the
            main tool for modeling the 3D house in this demo. The walls, floor,
            and objects throughout the house are modeled in great detail using
            the power of Blender by Homero Roman Roman [8] The following is a
            shot of part of the 3D house as it is being created:
          </Typography>
          <Typography variant="h6">
            The 3D objects in the house are placed carefully to correspond with
            the locations where the Navigator and Guide observed them when
            collecting the CVDN dataset. The house was also created with easy of
            navigation in mind. For instance, doorways are clearly marked, and
            the floor has a unique distinctive color so users can learn to
            distinguish walkable surfaces. Also, a consistent color palette is
            used along with best design practices to avoid information overload.
            One important feature to note is that the house and objects are
            low-poly on purpose to optimize for space, download, and rendering
            time over the web. Also, the underlying structure of repeated
            objects is linked, instead of copied, across these objects for
            efficiency.
          </Typography>
        </Box>
      </Box>
      <section>
        <Typography variant="h2">Client-side integration</Typography>
        <Typography variant="body1">Todo</Typography>
      </section>
      <section>
        <Typography variant="h2">Server-side API</Typography>
        <Typography variant="body1">Todo</Typography>
      </section>
      <section>
        <Typography variant="h2">Machine Learning modeling</Typography>
        <Typography variant="body1">Todo</Typography>
        <CvdnSampleVideo />
        <ResultsChart />
        <CodeSection codeLang="javascript" codeText={unitySimToclientWindow} />
      </section>
      <section>
        <Typography variant="h2">References</Typography>
        <Typography variant="body1">Todo</Typography>
      </section>
      <section>
        <Typography variant="h2">Authors</Typography>
        <Typography variant="body1">Todo</Typography>
      </section>
    </Box>
  );
}

export default ContentSection;
