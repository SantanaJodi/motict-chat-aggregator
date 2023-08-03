"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Loading } from "../../atoms";
import { DetailContactHeader, FailedToLoad } from "../../molecules";
import { ListContactHandle } from "../../molecules/list";

interface ContactDetailProps {}

const ContactDetail: React.FC<ContactDetailProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="bg-white w-[375px] h-full flex flex-col flex-shrink-0 ">
      <DetailContactHeader />
      <div className="h-full  flex flex-col relative">
        <div className="p-6 flex flex-col gap-4">
          <p className="text-xs font-medium text-[#67768B]">Contact Handle</p>
          <ListContactHandle />
        </div>

        <div
          className={clsx(
            "absolute flex items-center justify-center h-full w-full bg-white p-6",
            !isLoading && !error && "hidden"
          )}
        >
          {isLoading ? (
            <Loading />
          ) : error ? (
            <FailedToLoad
              onReload={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setError(false);
                  setIsLoading(false);
                }, 1000);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
