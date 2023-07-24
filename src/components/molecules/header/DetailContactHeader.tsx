import { usePathname } from "next/navigation";
import React from "react";
import { Avatar } from "../../atoms";
import { Breadcrumbs } from "../navigation";

interface DetailContactHeaderProps {}

const DetailContactHeader: React.FC<DetailContactHeaderProps> = ({}) => {
  const pathname = usePathname();
  return (
    <div className="p-6 flex flex-col gap-6 border-b border-[#EEF5FF]">
      <Breadcrumbs
        items={[
          {
            label: "Contact",
            path: "/contact",
          },
          {
            label: "Jon Raynor",
            path: pathname || "",
          },
        ]}
      />
      <div className="flex flex-row items-center gap-2">
        <Avatar url="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" />
        <div className="flex flex-col items-start gap1">
          <p className="font-medium text-[#0D0F12]">Jon Raynor</p>
          <p className="text-[14px] text-[#8B9EB7]">
            Last activity: 27 November 2022 at 12:36
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailContactHeader;
