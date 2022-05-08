import dynamic from "next/dynamic";
import { useRef, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import useVisible from "@/hooks/useVisible";
import { ObservationContext } from "contexts/ObservationContext";
const UnityNavSim = dynamic(() => import("./unity/UnityNavSim"));

function NavSimSection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useVisible(containerRef);
  const { observed, setObserved } = useContext(ObservationContext);

  useEffect(() => {
    if (isVisible) setObserved(true);
  }, [isVisible]);

  return (
    <Box width="96vw" height="calc(min(96vw/1.6, 90vh))" ref={containerRef}>
      {observed && <UnityNavSim />}
    </Box>
  );
}

export default NavSimSection;
