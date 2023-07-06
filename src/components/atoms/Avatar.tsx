import Image from "next/image";
import React from "react";

interface AvatarProps {
  url?: string;
  withChannel?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ url, withChannel }) => {
  const image = (
    <Image
      alt="avatar"
      src={url || "/images/svg/avatar-placeholder.svg"}
      width={48}
      height={48}
      className="object-cover rounded-full w-12 h-12"
    />
  );

  if (!withChannel) return image;

  return (
    <div className="relative flex-shrink-0">
      {image}
      <div className="p-1 rounded-full bg-white flex flex-shrink-0 absolute -bottom-2 left-[14px]">
        <Image
          src="/images/svg/channel-wa.svg"
          alt="whatsapp"
          width={13.333}
          height={13.333}
        />
      </div>
    </div>
  );
};

export default Avatar;
