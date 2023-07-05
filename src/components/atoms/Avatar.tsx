import Image from "next/image";
import React from "react";

interface AvatarProps {
  url?: string;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <Image
      alt="avatar"
      src={url || "/images/svg/avatar-placeholder.svg"}
      width={48}
      height={48}
      className="object-cover rounded-full w-12 h-12"
    />
  );
};

export default Avatar;
