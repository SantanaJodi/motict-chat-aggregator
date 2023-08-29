import { ChevronRightIcon } from "@/public/icons/outline";
import { IWhatsAppAccount } from "@/src/modules/settings/types/whatsapp-integration-type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Switch } from "../../atoms";

interface IntegrationChannelCardProps {
  account: IWhatsAppAccount;
  onToggle: (toogle: boolean, token: string) => void;
}

const IntegrationChannelCard: React.FC<IntegrationChannelCardProps> = ({
  account,
  onToggle,
}) => {
  const router = useRouter();
  return (
    <div className="bg-white border border-[#D7E4F5] p-4 rounded-lg w-[240px]">
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-row items-center gap-4">
          <Image
            alt="WhatsApp-Logo"
            src="/images/WhatsApp.png"
            width={50}
            height={50}
          />
          <div>
            <p className="text-[#0D0F12]">{account.whatsappName}</p>
            <Button
              variant="link"
              label="Settings"
              color="#8B9EB7"
              Icon={ChevronRightIcon}
              className="!flex-row-reverse"
              onClick={() =>
                router.push(`/settings/integration/${account.whatsappNumber}`)
              }
            />
          </div>
        </div>
        <Switch
          checked={account.isActive}
          onChange={(e: any) => {
            // change params based on BE req
            onToggle(e.target.checked, account.token);
          }}
        />
      </div>
    </div>
  );
};

export default IntegrationChannelCard;
