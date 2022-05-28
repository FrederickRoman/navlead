import Image from "next/image";
import CodeSection from "@/components/code/CodeSection";
import ImgContainer from "@/components/container/ImgContainer";
import { Box, Stack, Typography } from "@mui/material";
import loadUnityScript from "../code/snippet/js/loadUnityScript";
import navGuide from "../code/snippet/js/navGuide";
import unitySimToclientWindow from "../code/snippet/js/unitySimToclientWindow";
import answerTraveler from "@/public/img/answer_traveler.svg";
import loadUnityDiagram from "@/public/img/load_unity_diagram.svg";
import reactLogo from "@/public/img/react_logo.svg";
import ExternalLink from "@/components/link/ExternalLink";
import HREFS from "@/constants/hrefs";

function SimToBrowserBridge(): JSX.Element {
  return (
    <>
      <Typography variant="h3" py={1} id="about_sim-to-browser-js">
        Bridging simulation to browser (browser-side)
      </Typography>
      <Box py={1}>
        <Stack spacing={8}>
          <Typography variant="h6">
            After we built the Unity simulation (with the official &nbsp;
            <ExternalLink href={HREFS.webGLTemplate}>
              WebGL template
            </ExternalLink>
            ), we stablished the communication between it and the browser by
            passing and receiving messages through the window object. We
            accomplished that by adding the following lines to script.js
            (Unity&apos;s bootstrap loader).
          </Typography>
          <CodeSection
            codeName="script.js (inserted lines)"
            codeText={unitySimToclientWindow}
            codeLang="javascript"
          />
        </Stack>
      </Box>
    </>
  );
}

function LoadingUnityScript(): JSX.Element {
  return (
    <>
      <Typography variant="h3" py={1} id="about_loading-unity-script">
        Loading Unity script
      </Typography>
      <Box py={1}>
        <Stack spacing={8}>
          <Typography variant="h6">
            To run the Unity simulation in the browser, we must first load the
            Unity bootstrap loader script (script.js). We accomplish this by
            appending the script asynchronously to the document&apos;s body when
            the Simulation component is mounted (as suggested by &nbsp;
            <ExternalLink href={HREFS.addExtJsFiles}>this article</ExternalLink>
            ).
          </Typography>
          <Typography variant="h6">
            Since the Unity bootstrap loader script appends the simulation build
            scripts, we should remove them when the Simulation component is
            unmounted. We can implement all that in the following custom &nbsp;
            <ExternalLink href={HREFS.reactHooksPage}>
              React hook
            </ExternalLink>
            :
          </Typography>
          <ImgContainer>
            <Image
              src={loadUnityDiagram}
              layout="responsive"
              alt="UML state machine diagram for loading/unloading unity"
            />
          </ImgContainer>
          <CodeSection
            codeName="useLoadUnityScript.tsx"
            codeText={loadUnityScript}
            codeLang="tsx"
          />
        </Stack>
      </Box>
    </>
  );
}

function AnswerSimQuestion(): JSX.Element {
  return (
    <>
      <Typography variant="h3" py={1} id="about_answer-sim-question">
        Answer simulation question
      </Typography>
      <ImgContainer>
        <Image
          src={answerTraveler}
          layout="responsive"
          alt="UML sequence diagram for answering a question from simulation to server"
        />
      </ImgContainer>
      <Typography variant="h6">
        When the user (traveler) asks for navigation guidance, the inquiry
        itself is sent to a remote ML API service through the NavGuideService.
      </Typography>
      <CodeSection
        codeName="useNavGuide.tsx"
        codeText={navGuide}
        codeLang="tsx"
      />
    </>
  );
}

function ClientSideSection(): JSX.Element {
  return (
    <Box component="section" id="about_client-side">
      <Stack spacing={8}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "medium" }}
        >
          Client-side integration
        </Typography>
        <Stack spacing={8}>
          <Typography variant="h6">
            Once the simulation is finished, we must brought it to the browser.
            Since we decided to embed it in a full-fledge web site, we decided
            to choose a front-end UI framework. We chose &nbsp;
            <ExternalLink href={HREFS.reactPage}>React</ExternalLink>. React is
            a free and open-source front-end JavaScript library for building
            user interfaces based on UI components.
          </Typography>
          <Image src={reactLogo} width={275} height={100} alt="React logo" />
          <SimToBrowserBridge />
          <LoadingUnityScript />
          <AnswerSimQuestion />
        </Stack>
      </Stack>
    </Box>
  );
}

export default ClientSideSection;
