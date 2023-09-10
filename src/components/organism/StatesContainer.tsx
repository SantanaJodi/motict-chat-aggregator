"use client";

import { SearchIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { EmptyState, Loading } from "../atoms";
import { FailedToLoad } from "../molecules";

interface StatesContainerProps {
  isLoading?: boolean;
  isError?: boolean;
  isEmpty?: boolean;
  noResult?: boolean;
  emptyMsg?: string;
  onReload: () => void;
  noResultMsg?: string;
  EmptyIcon?: any;
  disableErrorToast?: boolean;
  className?: string;
}

const StatesContainer: React.FC<StatesContainerProps> = ({
  isEmpty,
  isError,
  isLoading,
  emptyMsg,
  noResult,
  noResultMsg,
  onReload,
  EmptyIcon,
  disableErrorToast,
  className,
}) => {
  useEffect(() => {
    if (disableErrorToast) return;

    if (isError) toast.error("Something is wrong, please try again.");
  }, [isError, disableErrorToast]);

  return (
    <div
      className={clsx(
        "absolute w-full h-full flex items-center justify-center bg-white px-6",
        !isEmpty && !isError && !isLoading && "hidden"
      )}
    >
      <div className={clsx(" w-full", className)}>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <FailedToLoad onReload={onReload} />
        ) : noResult ? (
          <EmptyState Icon={SearchIcon} title={noResultMsg || "No result"} />
        ) : isEmpty ? (
          <EmptyState Icon={EmptyIcon} title={emptyMsg || ""} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StatesContainer;
