import { useState, useEffect } from "react";

function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const saveWidth = () => setWidth(window.innerWidth);
    saveWidth();
    window.addEventListener("resize", saveWidth);
    return () => window.removeEventListener("resize", saveWidth);
  }, []);
  return width;
}

export default useWindowWidth;
