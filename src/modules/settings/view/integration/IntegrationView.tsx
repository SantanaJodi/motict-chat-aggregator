/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  AddWhatsappAccountCard,
  FailedToLoad,
  IntegrationChannelCard,
  IntegrationHeader,
  Loading,
} from "@/src/components";
import clsx from "clsx";
import React from "react";
import IntegrationViewModel from "../../model/IntegrationViewModel";
import { IWhatsAppAccount } from "../../types";

interface IntegrationViewProps {
  accounts: IWhatsAppAccount[];
}

const IntegrationView: React.FC<IntegrationViewProps> = ({ accounts }) => {
  const { data, isLoading, isError, handleToggle, refetch } =
    IntegrationViewModel({ accounts });

  return (
    <div className="bg-white overflow-y-auto relative flex flex-col w-full h-full">
      <IntegrationHeader />
      <div
        className={clsx(
          "p-6 w-full h-full flex flex-col",
          isLoading || isError ? "items-center justify-center" : "items-start"
        )}
      >
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <FailedToLoad onReload={refetch} />
        ) : (
          <div className="flex flex-row items-center gap-8 flex-wrap">
            <AddWhatsappAccountCard />
            {data?.map((account) => (
              <IntegrationChannelCard
                key={account.token}
                account={account}
                onToggle={handleToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationView;
