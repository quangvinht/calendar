import { useState, useEffect } from "react";

type SizeType = {
  width: number;
  height: number;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<SizeType>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}

export default useWindowSize;
