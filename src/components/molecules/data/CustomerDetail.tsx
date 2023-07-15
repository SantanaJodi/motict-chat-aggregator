import { ChannelWa } from "@/public/icons/logo";
import React from "react";
import { Avatar, Button } from "../../atoms";

interface CustomerDetailProps {}

const CustomerDetail: React.FC<CustomerDetailProps> = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-2">
        <Avatar url="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" />
        <div className="flex flex-col items-start gap-1 w-full">
          <p className="text-[#0D0F12] font-bold leading[20.83px]">
            Untung Suropati
          </p>
          <div className="flex flex-row items-center gap-1 w-full">
            <ChannelWa width={16} height={16} />
            <div className="flex flex-row items-center gap-1 w-full">
              <p className="text-[#0D0F12] text-[14px] leading-[18.23px] mr-1">
                +6281234567890
              </p>
              <Button
                variant="link"
                label="• 2 more contact(s)"
                onClick={() => alert("change")}
                color="#67768B"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Excluded in MVP phase */}
      {/* <div className="w-full flex flex-row items-center gap-2">
        <Button
          type="ghost"
          size="small"
          label="Merge Contact(s)"
          Icon={MergeIcon}
          onClick={() => alert("")}
          style="flex-1"
        />
        <Button
          type="subtle"
          size="small"
          label="Edit"
          Icon={PenIcon}
          onClick={() => alert("")}
          style="flex-1"
        />
      </div>
      <BlockButton /> */}
    </div>
  );
};

export default CustomerDetail;
