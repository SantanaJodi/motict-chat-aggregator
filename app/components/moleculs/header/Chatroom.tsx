import React from "react";

export const Chatroom: React.FC<ChatroomProps> = () => {
  return <h1>Chatroom</h1>;
};

export interface ChatroomProps {
  isLoading?: boolean;
}
