"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useExactPath = (rootUrl: string, pathCount: number = 1) => {
  const pathname = usePathname();

  if (pathname !== rootUrl) {
    const pathWithoutQuery = pathname?.split("?")[0];
    let pathArray = pathWithoutQuery?.split("/");
    pathArray?.shift();

    return "/" + (pathArray && pathArray.splice(0, pathCount).join("/"));
  }

  return pathname;
};

export default useExactPath;
