"use client";

import { Button } from "@/src/components/atoms";
import { useAuthContext } from "@/src/hooks/auth-context";
import useExactPath from "@/src/hooks/useExactPath";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ISidebarMenuItem {
  path: string;
  label: string;
  Icon: React.ElementType;
  collapsed?: boolean;
  isMain?: boolean;
}

const SidebarMenuItem: React.FC<ISidebarMenuItem> = ({
  Icon,
  label,
  path,
  collapsed,
  isMain,
}) => {
  const router = useRouter();
  const pathname = useExactPath("/");
  const isLogout = path.includes("logout");
  const { handleLogoutModal } = useAuthContext();

  return (
    <button
      onClick={() => {
        if (isLogout) {
          handleLogoutModal(true);
        } else {
          router.push(path);
        }
      }}
      className={clsx(
        "flex flex-row items-center gap-x-2 relative rounded-lg border-none bg-transparent",
        {
          "justify-center": collapsed,
          "justify-start": !collapsed,
        },
        {
          "p-4  hover:bg-[#0D0F12]": isMain,
          "p-2": !isMain,
        }
      )}
    >
      <Icon
        size={24}
        width={24}
        height={24}
        className="flex-shrink-0"
        fill={isLogout ? "#C02716" : isMain ? "#fff" : "#0D0F12"}
      />
      {!collapsed && (
        <p
          className={clsx("text-[16px]", {
            "text-white": isMain,
            "text-[#0D0F12]": !isMain,
            "text-[#C02716]": isLogout,
          })}
        >
          {label}
        </p>
      )}
      {path === pathname && (
        <div className="w-4 h-4  flex-shrink-0 bg-[#323944] rounded-full border-4 border-white border-solid absolute -right-4 z-10" />
      )}
    </button>
  );
};

export default SidebarMenuItem;
