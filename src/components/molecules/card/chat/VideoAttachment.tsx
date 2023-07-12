"use client";

import { PlayIcon } from "@/public/icons/outline";
import NextImage from "next/image";
import React from "react";
import { ClipLoader } from "react-spinners";

interface VideoAttachmentProps {
  url: string;
  isLoading?: boolean;
}

interface OverlayProps {
  isUploading?: boolean;
}

const Overlay = ({ isUploading }: OverlayProps) => {
  return (
    <div className="absolute top-0 w-full h-full flex items-center justify-center bg-[#0d0f1282] rounded-lg">
      {isUploading ? (
        <div className="flex flex-col items-center gap-2 text-white text-[12px]">
          <ClipLoader size={24} color="#fff" />
          Uploading 50%
        </div>
      ) : (
        <PlayIcon stroke="#fff" />
      )}
    </div>
  );
};
// TODO APIN: handling video, detect landscape or potrait and set the maximum width & height
const VideoAttachment: React.FC<VideoAttachmentProps> = ({
  url,
  isLoading,
}) => {
  return (
    <div className="flex flex-row items-center flex-wrap gap-2">
      <div className="relative">
        <NextImage
          src={url}
          alt="media"
          width={280}
          height={200}
          className="object-cover rounded-lg w-[96px] h-[96px]"
        />
        <Overlay isUploading={isLoading} />
      </div>
    </div>
  );
};

export default VideoAttachment;
