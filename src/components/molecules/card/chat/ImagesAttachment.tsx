"use client";

import { ImageProps, getImage } from "@/src/utils";
import clsx from "clsx";
import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

interface ImagesAttachmentProps {
  urls: string | string[];
  isLoading?: boolean;
}

interface OverlayProps {
  isUploading?: boolean;
  label: string;
}

const Overlay = ({ label, isUploading }: OverlayProps) => {
  return (
    <div
      className={clsx(
        "absolute top-0 w-full h-full flex items-center justify-center flex-col gap-2 bg-[#0d0f1282] rounded-lg text-white",
        isUploading ? "text-[12px]" : "text-[16px]"
      )}
    >
      {isUploading && <ClipLoader size={24} color="#fff" />}
      {label}
    </div>
  );
};

const ImagesAttachment: React.FC<ImagesAttachmentProps> = ({
  urls,
  isLoading,
}) => {
  const [size, setSize] = useState<ImageProps>();
  const isString = typeof urls === "string";

  useEffect(() => {
    const getImageSize = async () => {
      if (!isString) return;
      return await getImage(urls);
    };

    getImageSize().then((img: any) => {
      setSize(img);
    });
  }, [urls, isString]);

  if (isString && !size) return null;

  if (isString) {
    return (
      <div className="relative">
        <NextImage
          // TODO: Image not shown because the url don't have preview
          // try to access in browser and directly download the image
          src={urls}
          alt="images"
          width={size?.width}
          height={size?.height}
          className="object-cover rounded-lg"
          style={{
            width: size?.width,
            height: size?.height,
          }}
        />
        {isLoading && <Overlay isUploading={isLoading} label="Uploading 50%" />}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex flex-row items-center flex-wrap gap-2 ",
        urls.length > 3 && "w-[200px] h-[200px]"
      )}
    >
      {urls.slice(0, 4).map((url, id) => (
        <div key={id} className="relative">
          <NextImage
            src={url}
            alt="media"
            width={96}
            height={96}
            className="object-cover rounded-lg w-[96px] h-[96px]"
          />
          {((urls.length > 4 && id === 3) || isLoading) && (
            <Overlay
              isUploading={isLoading && id !== 3}
              label={
                isLoading && id !== 3
                  ? "Uploading 50%"
                  : `+${urls.length - 4} More`
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImagesAttachment;
