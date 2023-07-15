"use client";

import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { Sidebar } from "../organism";
import Toaster from "./Toaster";

interface ContainerProps extends PropsWithChildren {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname && ["/login", "/register"].includes(pathname);
  return (
    <div className="h-full w-full p-0 m-0 flex flex-row">
      {!isAuthPage && <Sidebar />}
      <Toaster />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Container;
