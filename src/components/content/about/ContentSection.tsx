import { Box, Divider, Stack } from "@mui/material";
import TldrSection from "./subsections/TldrSection";
import MotivationSection from "./subsections/MotivationSection";
import SimulatedEnviromentSection from "./subsections/SimulatedEnviromentSection";
import ClientSideSection from "./subsections/ClientSideSection";
import ServerSideSection from "./subsections/ServerSideSection";
import MachineLearningSection from "./subsections/MachineLearningSection";
import ReferencesSection from "./subsections/ReferencesSection";
import AuthorsSection from "./subsections/AuthorsSection";

function ContentSection(): JSX.Element {
  return (
    <Box component="article" px={2} py={20}>
      <Stack divider={<Divider sx={{border:"1px solid purple", background:"purple"}}/>} spacing={10}>
        <TldrSection />
        <MotivationSection />
        <SimulatedEnviromentSection />
        <ClientSideSection />
        <ServerSideSection />
        <MachineLearningSection />
        <ReferencesSection />
        <AuthorsSection />
      </Stack>
    </Box>
  );
}

export default ContentSection;
