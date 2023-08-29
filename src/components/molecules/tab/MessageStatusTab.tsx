import { StatusEnumTranslator } from "@/src/utils";
import { groupBy } from "lodash";
import React, { useCallback } from "react";
import { Filter } from "../../atoms/tag";
import { IChatroomDetail, StatusEnum } from "../../organism";

interface MessageStatusTabProps {
  messages?: IChatroomDetail[];
  status?: string;
  onChangeStatus: (value: StatusEnum) => void;
}

const MessageStatusTab: React.FC<MessageStatusTabProps> = ({
  onChangeStatus,
  messages,
  status,
}) => {
  // message status still not clear
  const getLabel = useCallback(
    (item: StatusEnum) => {
      if (item === StatusEnum.WAITING || item === StatusEnum.ASSIGNED_TO_ME) {
        const count = groupBy(messages, "status")[item]?.length;
        return (
          StatusEnumTranslator(item) +
          (count > 0 ? ` • ${count <= 99 ? count : "+99"}` : "")
        );
      }

      return StatusEnumTranslator(item);
    },
    [messages]
  );

  return (
    <div className="flex flex-row items-center gap-2 overflow-x-auto  px-4 pb-4 no-scrollbar flex-shrink-0">
      {Object.values(StatusEnum).map((item) => (
        <Filter
          key={item}
          label={getLabel(item)}
          onClick={() => onChangeStatus(item)}
          isActive={status === item}
        />
      ))}
    </div>
  );
};

export default MessageStatusTab;
