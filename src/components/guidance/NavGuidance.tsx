import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Grid, Box } from "@mui/material";
import useVisible from "@/hooks/useVisible";
import NavInstructions from "./intro/NavInstructions";
const Unity3dScene = dynamic(() => import("./scene/Unity3dScene"));

interface Props {
  demoSeenBefore: boolean;
  setDemoSeenBefore: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavGuidance(props: Props): JSX.Element {
  const { demoSeenBefore, setDemoSeenBefore } = props;
  const demoRef = useRef<HTMLDivElement | null>(null);
  const isDemoSeen = useVisible(demoRef);

  useEffect(() => {
    if (isDemoSeen) setDemoSeenBefore(true);
  }, [isDemoSeen, setDemoSeenBefore]);

  return (
    <Box
      component="section"
      py="clamp(16rem, 10vh, 30rem)"
      sx={{ bgcolor: "black" }}
    >
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Grid item>
          <NavInstructions />
        </Grid>
        <Grid item>
          <Box width="96vw" height="calc(min(96vw/1.6, 90vh))" ref={demoRef}>
            {(demoSeenBefore || isDemoSeen) && <Unity3dScene />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NavGuidance;
