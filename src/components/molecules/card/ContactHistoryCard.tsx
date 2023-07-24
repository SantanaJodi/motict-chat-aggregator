import { BroadcastIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { EmptyState, Loading } from "../../atoms";
import { FailedToLoad } from "../states";

interface ContactHistoryCardProps extends PropsWithChildren {
  title: string;
  isLoading?: boolean;
  isEmpty?: boolean;
  isError?: boolean;
}

const ContactHistoryCard: React.FC<ContactHistoryCardProps> = ({
  title,
  isEmpty,
  isError,
  isLoading,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg w-full p-4 flex flex-col gap-4 border border-[#EEF5FF]">
      <div className="pb-4 border-b border-[#D7E4F5]">
        <p className="text-xl font-bold text-[#0D0F12]">{title}</p>
      </div>
      <div className="relative w-full max-h-[500px] flex flex-col">
        {children}
        <div
          className={clsx(
            "absolute w-full h-full bg-white flex items-center justify-center",
            !isEmpty && !isError && !isLoading && "hidden"
          )}
        >
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <FailedToLoad onReload={() => alert("reload")} />
          ) : isEmpty ? (
            <EmptyState Icon={BroadcastIcon} title="No Campaign" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactHistoryCard;
