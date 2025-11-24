"use client";
import { useState, useEffect } from "react";

const useIsScreenSmall = (): boolean => {
  // Initialize with undefined to match server render, then set on client
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(() => {
    // Only check window on client side
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false; // Default for SSR
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Set initial value
    setIsSmallScreen(window.innerWidth < 640);

    // Add event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Add empty dependency array to run only once

  return isSmallScreen;
};

export default useIsScreenSmall;
