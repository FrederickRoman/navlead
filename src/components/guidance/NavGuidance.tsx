import { useState, useEffect, useRef, MutableRefObject } from "react";
import dynamic from "next/dynamic";
import { Grid, Box } from "@mui/material";
import NavInstructions from "./intro/NavInstructions";
const Unity3dScene = dynamic(() => import("./scene/Unity3dScene"));

interface Props {
  demoSeenBefore: boolean;
  setDemoSeenBefore: React.Dispatch<React.SetStateAction<boolean>>;
}

function useVisible(ref: MutableRefObject<HTMLDivElement | null>): boolean {
  const [isVisible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      const target: HTMLDivElement | null = ref.current;
      const observer = new IntersectionObserver(([entry]) =>
        setVisible(entry.isIntersecting)
      );
      if (target) observer.observe(target);
      return () => {
        setVisible(false);
        if (target) observer.unobserve(target);
      };
    } else {
      setVisible(true);
      return () => setVisible(false);
    }
  }, []);
  return isVisible;
}

function NavGuidance(props: Props): JSX.Element {
  const { demoSeenBefore, setDemoSeenBefore } = props;
  const demoRef = useRef<HTMLDivElement | null>(null);
  const isDemoSeen = useVisible(demoRef);

  useEffect(() => {
    if (isDemoSeen) setDemoSeenBefore(true);
  }, [isDemoSeen]);

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
