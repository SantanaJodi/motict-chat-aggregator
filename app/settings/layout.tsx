import { Container, SettingSidePanel } from "@/src";
import React, { PropsWithChildren } from "react";

interface SettingsLayoutProps extends PropsWithChildren {}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <Container>
      <div className="w-full h-full flex flex-row gap-[1px]">
        <SettingSidePanel />
        {children}
      </div>
    </Container>
  );
};

export default SettingsLayout;
