"use client";
import { Breadcrumbs, Button } from "@/src/components";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface ApplyThroughUsViewProps {}

const ApplyThroughUsView: React.FC<ApplyThroughUsViewProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full bg-white p-6 flex flex-col gap-4">
      <Breadcrumbs
        items={[
          {
            label: "WhatsApp Integration",
            path: "/settings/integration",
          },
          {
            label: "Apply Through Us",
            path: pathname || "",
          },
        ]}
      />
      <h2 className="font-bold text-xl text-[#0D0F12]">Apply Through Us</h2>
      <p className="text-sm text-[#0D0F12]">
        You can apply for the Motict WhatsApp Business Account by filling out
        the following form. Requests that you have successfully submitted will
        be processed immediately. This process takes time, because we need to
        review your application. We will notify you immediately when the process
        is complete.
      </p>
      <div className="flex flex-row items-center gap-4">
        <Button variant="subtle" label="Open Form In English" />
        <Button variant="subtle" label="Open Form In Bahasa" />
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

export default ApplyThroughUsView;
