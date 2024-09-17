"use client";
import { useState, useEffect } from "react";

const useIsScreenSmall = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    setIsSmallScreen(window.innerWidth < 640);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isSmallScreen;
};

export default useIsScreenSmall;
