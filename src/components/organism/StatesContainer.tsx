import { ChatIcon, SearchIcon } from "@/public/icons/outline";
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
}

const StatesContainer: React.FC<StatesContainerProps> = ({
  isEmpty,
  isError,
  isLoading,
  emptyMsg,
  noResult,
}) => {
  useEffect(() => {
    if (isError) toast.error("Something is wrong, please try again.");
  }, [isError]);

  return (
    <div
      className={clsx(
        "absolute w-full h-[80%] flex items-center justify-center bg-white px-6 overflow-auto",
        !isEmpty && !isError && !isLoading && "hidden"
      )}
    >
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <FailedToLoad onReload={() => alert("Reloading...")} />
      ) : isEmpty ? (
        <EmptyState Icon={ChatIcon} title={emptyMsg || ""} />
      ) : noResult ? (
        <EmptyState Icon={SearchIcon} title="No result" />
      ) : (
        ""
      )}
    </div>
  );
};

export default StatesContainer;
