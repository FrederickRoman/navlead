import { useState, useEffect, useRef, MutableRefObject } from "react";

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

  export default useVisible;