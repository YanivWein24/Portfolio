import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  const mobileSize: boolean = innerWidth < 480;
  const tabletSize: boolean = innerWidth < 768;
  const laptopSize: boolean = innerWidth < 1200;
  return { innerWidth, innerHeight, mobileSize, laptopSize, tabletSize };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
