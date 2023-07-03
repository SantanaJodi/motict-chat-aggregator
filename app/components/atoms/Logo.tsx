"use client";

import brandLogoGraph from "@/public/images/brand-logo-graph.png";
import brandLogoType from "@/public/images/brand-logo-type.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  collapsed?: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  const router = useRouter();
  const image = collapsed ? brandLogoGraph : brandLogoType;
  return (
    <Image
      src={image}
      alt="brand-logo"
      className="self-center"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
