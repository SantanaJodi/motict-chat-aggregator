"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  collapsed?: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  const router = useRouter();
  return (
    <Image
      src={`/images/svg/brand-logo-${collapsed ? "graph" : "type"}.svg`}
      alt="brand-logo"
      className="self-center"
      onClick={() => router.push("/")}
      width={collapsed ? 24 : 84}
      height={24}
    />
  );
};

export default Logo;
