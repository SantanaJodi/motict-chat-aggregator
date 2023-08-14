"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const useNavigationEvent = (onPathnameChange: () => void) => {
  const pathname = usePathname();
  const savedPathnameRef = useRef(pathname);

  useEffect(() => {
    if (savedPathnameRef.current !== pathname) {
      onPathnameChange();
      savedPathnameRef.current = pathname;
    }
  }, [pathname, onPathnameChange]);
};

export default useNavigationEvent;
