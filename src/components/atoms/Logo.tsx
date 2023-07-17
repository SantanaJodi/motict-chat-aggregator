"use client";

import { BrandLogoGraph, BrandLogoType } from "@/public/icons/logo";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  collapsed?: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  const router = useRouter();
  const onClick = () => router.push("/");

  if (!collapsed) return <BrandLogoType onClick={onClick} />;

  return (
    <div onClick={onClick} className="p-2 rounded-lg hover:bg-[#EEF5FF]">
      <BrandLogoGraph />
    </div>
  );
};

export default Logo;
