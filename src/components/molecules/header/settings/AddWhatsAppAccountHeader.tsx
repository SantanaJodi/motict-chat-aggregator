"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Breadcrumbs } from "../../navigation";

interface AddWhatsAppAccountHeaderProps {}

const AddWhatsAppAccountHeader: React.FC<
  AddWhatsAppAccountHeaderProps
> = () => {
  const pathname = usePathname();
  return (
    <div className="p-6 flex flex-col gap-4">
      <Breadcrumbs
        items={[
          {
            label: "WhatsApp Integration",
            path: "/settings/integration",
          },
          {
            label: "Add WhatsApp Account",
            path: pathname || "",
          },
        ]}
      />
      <h2 className="font-bold text-xl text-[#0D0F12]">Add WhatsApp Account</h2>
      <p className="text-xs text-[#0D0F12]">
        If you have WhatsApp Business API, you can follow this step.
      </p>
    </div>
  );
};

export default AddWhatsAppAccountHeader;
