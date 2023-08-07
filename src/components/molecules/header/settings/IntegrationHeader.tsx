import { Button } from "@/src/components/atoms";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface IntegrationHeaderProps {}

const IntegrationHeader: React.FC<IntegrationHeaderProps> = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="font-bold text-xl text-[#0D0F12]">WhatsApp Integration</h2>
      <p className="text-sm text-[#323944]">
        Manage conversations from your WhatsApp business directly from
        Omnichannel. Our team can help you to apply for WhatsApp Business
        Account. Or you can apply it yourself with your facebook business
        account, it will only take few minutes. Any questions?{" "}
        <Link href="/" className="underline text-[#C02716]">
          Contact Us
        </Link>
      </p>
      <p className="text-sm text-[#323944]">
        To learn more regarding WhatsApp Integration, you can check this{" "}
        <Link href="/" className="underline text-[#C02716]">
          Documentation.
        </Link>
      </p>
      <div className="flex flex-row items-center gap-4">
        <Button
          variant="subtle"
          label="Apply Through Us"
          onClick={() => router.push(`${pathname}/apply-us`)}
        />
        <Button
          variant="subtle"
          label="Apply with Facebook"
          onClick={() => router.push(`${pathname}/apply-facebook`)}
        />
      </div>
    </div>
  );
};

export default IntegrationHeader;
