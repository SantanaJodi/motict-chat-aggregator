import React from "react";
import { ClipLoader } from "react-spinners";

interface LoadingProps {
  hideText?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ hideText }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <ClipLoader color="#C02716" size={20} />
      <p className="text-[#8B9EB7] text-center">Loading...</p>
    </div>
  );
};

export default Loading;
