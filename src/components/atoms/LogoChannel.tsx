import { ChannelWa, ChannelWaUnmasking } from "@/public/icons/logo";
import React from "react";

interface LogoChannelProps extends React.SVGProps<SVGSVGElement> {
  type: string;
}

const LogoChannel: React.FC<LogoChannelProps> = ({ type, ...props }) => {
  if (type === "Whatsapp") return <ChannelWa {...props} />;
  return <ChannelWaUnmasking {...props} />;
};

export default LogoChannel;
