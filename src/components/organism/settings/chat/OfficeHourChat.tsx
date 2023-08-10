import { Dropdown } from "@/src/components/atoms";
import React from "react";

interface OfficeHourChatProps {}

const OfficeHourChat: React.FC<OfficeHourChatProps> = () => {
  return (
    <Dropdown title="Office Hour">
      <div className="flex flex-col gap-6 px-6 pb-6">
        <p className="text-xs text-[#8B9EB7]">
          Admin can set the services’ operating hours. The Admin can also set
          several operating hours in a day. In addition, Admin can set their
          hours according to their country’s time zone.
        </p>
      </div>
    </Dropdown>
  );
};

export default OfficeHourChat;
