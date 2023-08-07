/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  FailedToLoad,
  IntegrationChannelCard,
  IntegrationHeader,
  Loading,
} from "@/src/components";
import clsx from "clsx";
import React from "react";
import IntegrationViewModel from "../../model/IntegrationViewModel";

interface IntegrationViewProps {}

const IntegrationView: React.FC<IntegrationViewProps> = () => {
  const { data, toggle, isLoading, isError, handleToggle, refetch } =
    IntegrationViewModel();
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
          <div className="flex flex-row items-center gap-8">
            <IntegrationChannelCard />
            <IntegrationChannelCard
              account={data}
              toggle={toggle}
              onToggle={() => handleToggle(!toggle)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationView;
