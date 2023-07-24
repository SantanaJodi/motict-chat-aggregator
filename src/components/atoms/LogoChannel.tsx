import { ChannelWa, ChannelWaUnmasking } from "@/public/icons/logo";
import React from "react";

interface LogoChannelProps extends React.SVGProps<SVGSVGElement> {
  type: "whatsapp" | "whatsapp-unmasking";
}

const LogoChannel: React.FC<LogoChannelProps> = ({ type, ...props }) => {
  if (type === "whatsapp") return <ChannelWa {...props} />;
  return <ChannelWaUnmasking {...props} />;
};

export default LogoChannel;
