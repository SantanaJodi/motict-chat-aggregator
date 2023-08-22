"use client";
import { Container, ReportHeader } from "@/src";
import { ReportContextProvider } from "@/src/modules/report/context/ReportContext";
import React, { PropsWithChildren } from "react";

interface ReportViewLayoutProps extends PropsWithChildren {}

const ReportViewLayout: React.FC<ReportViewLayoutProps> = ({ children }) => {
  return (
    <Container>
      <ReportContextProvider>
        <div className="w-full h-full flex flex-col bg-white overflow-y-auto">
          <ReportHeader />
          <div className="w-full h-full flex flex-col">{children}</div>
        </div>
      </ReportContextProvider>
    </Container>
  );
};

export default ReportViewLayout;
