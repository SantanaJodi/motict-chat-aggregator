"use client";
import { CameraIcon } from "@/public/icons/outline";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import LogoChannel from "./LogoChannel";

interface AvatarProps {
  url?: string;
  channel?: string;
  isEditable?: boolean;
  onChange?: (_images: FileList) => void;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  url,
  channel,
  isEditable,
  onChange,
  className,
}) => {
  const [imageFile, setImageFile] = useState<Blob | MediaSource>();

  const getImageUrl = () => {
    if (imageFile) {
      return URL.createObjectURL(imageFile);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length) {
      const fileType = files[0].type;
      const allowedType = ["image/png", "image/gif", "image/jpeg"];

      if (allowedType.includes(fileType) && onChange) {
        setImageFile(files[0]);
        onChange(files);
      } else {
        toast.error("Only accept .jpg, .jpeg, or .png format");
      }
    }
  };
  const image = (
    <Image
      alt="avatar"
      src={
        url
          ? url
          : imageFile
          ? (getImageUrl() as string)
          : "/images/svg/avatar-placeholder.svg"
      }
      onLoad={() => URL.revokeObjectURL(getImageUrl() as string)}
      width={48}
      height={48}
      className="object-cover rounded-full w-12 h-12 flex flex-shrink-0"
    />
  );

  if (!channel && !isEditable) return image;

  return (
    <div className={clsx("relative flex-shrink-0 w-12 h-12", className)}>
      {image}
      <div className="p-1 rounded-full bg-white flex flex-shrink-0 absolute -bottom-3 left-[12px]">
        {isEditable ? (
          <CameraIcon width={16} height={16} />
        ) : (
          <LogoChannel type={channel} width={16} height={16} />
        )}
      </div>
      {onChange && (
        <input
          type="file"
          className="absolute top-0 left-0 w-12 h-12 opacity-0"
          onChange={(e) => handleImageSelect(e)}
        />
      )}
    </div>
  );
};

export default Avatar;
