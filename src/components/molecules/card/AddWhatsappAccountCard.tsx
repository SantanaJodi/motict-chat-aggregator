import { PlusIcon } from "@/public/icons/line";
import { useRouter } from "next/navigation";
import React from "react";

interface AddWhatsappAccountCardProps {}

const AddWhatsappAccountCard: React.FC<AddWhatsappAccountCardProps> = () => {
  const router = useRouter();
  return (
    <div className="bg-white border border-[#D7E4F5] p-4 rounded-lg w-[240px]">
      <div
        className="flex flex-row items-center gap-4 cursor-pointer"
        onClick={() => router.push("/settings/integration/add")}
      >
        <div className="w-9 h-9 rounded-full p-2 bg-[#FCEFED]">
          <PlusIcon />
        </div>
        <p className="text-[#0D0F12]">Add WhatsApp Account</p>
      </div>
    </div>
  );
};

export default AddWhatsappAccountCard;
