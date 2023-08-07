/* eslint-disable react/no-unescaped-entities */
"use client";
import { WarningIcon } from "@/public/icons/outline";
import { Breadcrumbs, Button } from "@/src/components";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface ApplyThroughFacebookViewProps {}

const ApplyThroughFacebookView: React.FC<
  ApplyThroughFacebookViewProps
> = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full bg-white p-6 flex flex-col gap-4">
      <Breadcrumbs
        items={[
          {
            label: "WhatsApp Integration",
            path: "/settings/integration",
          },
          {
            label: "Apply With Facebook",
            path: pathname || "",
          },
        ]}
      />
      <h2 className="font-bold text-xl text-[#0D0F12]">Apply With Facebook</h2>
      <p className="text-sm text-[#0D0F12]">
        Create WhatsApp Business Account and start receiving messages in just a
        few minutes. You'll need :
        <br />
        <br />
        • Your company’s profile and address.
        <br />
        • A display name and short business description.
        <br />• A phone number you have access to, owned by your business.
      </p>
      <div className="flex flex-row items-center gap-4">
        <Button variant="subtle" label="Open Form In English" />
        <Button variant="subtle" label="Open Form In Bahasa" />
      </div>
      <div className="bg-[#FFEECD] p-4 w-full rounded-lg border border-[#F0A22E] flex flex-col gap-2">
        <div className="flex flex-row items-center gap-1">
          <WarningIcon />
          <p className="text-[#21252B] font-medium">
            Attention before continue integrating
          </p>
        </div>
        <p className="text-sm text-[#647182]">
          Do not use a number that’s already connected to a WhatsApp account,
          you won’t be able to complete the process. circleFor each addition of
          WABA number or WABA ID will incur a fee of minimum IDR 250,000 or USD
          17 per month. Please contact your account manager or Contact Us for
          the exact fee.
        </p>
      </div>
      <Button
        variant="subtle"
        label="Back"
        className="!self-end"
        onClick={() => router.back()}
      />
    </div>
  );
};

export default ApplyThroughFacebookView;
