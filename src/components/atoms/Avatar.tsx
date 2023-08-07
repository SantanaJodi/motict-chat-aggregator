import { CameraIcon } from "@/public/icons/outline";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import LogoChannel from "./LogoChannel";

interface AvatarProps {
  url?: string;
  channel?: string;
  isEditable?: boolean;
  onChange?: () => void;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  url,
  channel,
  isEditable,
  onChange,
  className,
}) => {
  const image = (
    <Image
      alt="avatar"
      src={url || "/images/svg/avatar-placeholder.svg"}
      width={48}
      height={48}
      className="object-cover rounded-full w-12 h-12 flex flex-shrink-0"
    />
  );

  if (!channel && !isEditable) return image;

  return (
    <div className={clsx("relative flex-shrink-0 w-12 h-12", className)}>
      {image}
      <div
        className="p-1 rounded-full bg-white flex flex-shrink-0 absolute -bottom-3 left-[12px]"
        onClick={() => {
          if (onChange) {
            onChange();
          }
        }}
      >
        {isEditable ? (
          <CameraIcon width={16} height={16} />
        ) : (
          <LogoChannel type={channel} width={16} height={16} />
        )}
      </div>
    </div>
  );
};

export default Avatar;
