import { StatusEnum } from "../components/organism/chatroom/messages/types/MessagesTypes";

export const StatusEnumTranslator = (item: StatusEnum) => {
  switch (item) {
    case StatusEnum.ALL:
      return "All";
    case StatusEnum.ASSIGNED:
      return "Assigned";
    case StatusEnum.ASSIGNED_TO_ME:
      return "Assigned to Me";
    case StatusEnum.EXPIRED:
      return "Expired";
    case StatusEnum.RESOLVED:
      return "Resolved";
    case StatusEnum.WAITING:
      return "Waiting";
  }
};
