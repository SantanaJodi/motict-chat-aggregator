import { ITagDetail } from "@/src/components/molecules/node/chatroom-detail/tag/types/TagTypes";

export interface IConversationDetail {
  conversation_id: number;
  sender: IConversationDetailSender;
  created_at: Date;
  expired_at: Date;
  session: IConversationDetailSession;
  notes: string;
  agents: IConversationDetailAgent[];
  tags: ITagDetail[];
}

export interface IConversationDetailAgent {
  name: string;
  assigned_at: Date;
}

export interface IConversationDetailSender {
  from_user_photo: null;
  from_user_name: string;
  platform: string;
  whatsapp: IConversationDetailWhatsapp;
}

export interface IConversationDetailWhatsapp {
  whatsapp_id: string;
}

export interface IConversationDetailSession {
  state: string;
  text: string;
  countdown_second: null;
}

export interface ISendMessageRequest {
  file: File | undefined;
  type: "image" | "text";
  text: string;
}
