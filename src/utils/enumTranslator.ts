import { StatusEnum } from "../components/organism/chatroom/messages/types/MessagesTypes";
import { UserTypeEnum } from "../modules/report/types/report-general-type";

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

export const UsertTypeEnumTranslator = (item: UserTypeEnum) => {
  switch (item) {
    case UserTypeEnum.ADMIN:
      return "Admin";
    case UserTypeEnum.AGENT:
      return "Agent";
    case UserTypeEnum.CUSTOMER:
      return "Customer";
  }
};
