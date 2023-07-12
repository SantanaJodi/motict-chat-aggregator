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
        "absolute w-full h-full flex items-center justify-center bg-white px-6 z-10",
        !isEmpty && !isError && !isLoading && "hidden"
      )}
    >
      <div className="mb-20">
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
    </div>
  );
};

export default StatesContainer;
