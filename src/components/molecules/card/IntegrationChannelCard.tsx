import { PlusIcon } from "@/public/icons/line";
import { ChevronRightIcon } from "@/public/icons/outline";
import Image from "next/image";
import React from "react";
import { Button, Switch } from "../../atoms";

interface IntegrationChannelCardProps {
  account?: string;
  toggle: boolean;
  onToggle: () => void;
}

const IntegrationChannelCard: React.FC<IntegrationChannelCardProps> = ({
  account,
  toggle,
  onToggle,
}) => {
  return (
    <div className="bg-white border border-[#D7E4F5] p-4 rounded-lg w-[240px]">
      {account ? (
        <div className="flex flex-row items-start justify-between gap-4">
          <div className="flex flex-row items-center gap-4">
            <Image
              alt="WhatsApp-Logo"
              src="/images/WhatsApp.png"
              width={50}
              height={50}
            />
            <div>
              <p className="text-[#0D0F12]">{account}</p>
              <Button
                variant="link"
                label="Settings"
                color="#8B9EB7"
                Icon={ChevronRightIcon}
                className="!flex-row-reverse"
              />
            </div>
          </div>
          <Switch checked={toggle} onChange={onToggle} />
        </div>
      ) : (
        <div className="flex flex-row items-center gap-4">
          <div className="w-9 h-9 rounded-full p-2 bg-[#FCEFED]">
            <PlusIcon />
          </div>
          <p className="text-[#0D0F12]">Add WhatsApp Account</p>
        </div>
      )}
    </div>
  );
};

export default IntegrationChannelCard;
