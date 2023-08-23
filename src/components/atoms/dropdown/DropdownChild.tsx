import useExactPath from "@/src/hooks/useExactPath";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

interface DropdownChildProps {
  label: string;
  path: string;
}

const DropdownChild: React.FC<DropdownChildProps> = ({ label, path }) => {
  const router = useRouter();
  const pathname = useExactPath("/settings", 2);

  const isActive = pathname === path;
  return (
    <div
      className="p-6 w-full hover:bg-[#EEF5FF] cursor-pointer relative"
      onClick={() => router.push(path)}
    >
      <p className={clsx("text-[#323944]", isActive && "font-bold")}>{label}</p>
      {isActive && (
        <div className="absolute top-0 right-0 border-r-2 border-[#C02716] w-12 h-full bg-gradient-to-l from-[#C027161A]" />
      )}
    </div>
  );
};

export default DropdownChild;
