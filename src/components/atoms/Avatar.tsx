import Image from "next/image";
import React from "react";
import LogoChannel from "./LogoChannel";

interface AvatarProps {
  url?: string;
  channel?: string;
}

const Avatar: React.FC<AvatarProps> = ({ url, channel }) => {
  const image = (
    <Image
      alt="avatar"
      src={url || "/images/svg/avatar-placeholder.svg"}
      width={48}
      height={48}
      className="object-cover rounded-full w-12 h-12"
    />
  );

  if (!channel) return image;

  return (
    <div className="relative flex-shrink-0">
      {image}
      <div className="p-1 rounded-full bg-white flex flex-shrink-0 absolute -bottom-3 left-[12px]">
        <LogoChannel type={channel} width={16} height={16} />
      </div>
    </div>
  );
};

export default Avatar;
