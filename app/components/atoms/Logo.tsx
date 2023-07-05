"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  collapsed?: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  const router = useRouter();
  const image = `/images/svg/brand-logo-${collapsed ? "graph" : "type"}.svg`;
  return (
    <Image
      src={image}
      alt="brand-logo"
      width={collapsed ? 24 : 84}
      height={24}
      onClick={() => router.push("/")}
      className={clsx("self-center", collapsed ? "w-6" : "w-[84px]", "h-6")}
    />
  );
};

export default Logo;
