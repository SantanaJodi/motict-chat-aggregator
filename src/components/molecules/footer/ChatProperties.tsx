"use client";

import { EmojiIcon as EmojiIconDuotone } from "@/public/icons/duotone";
import {
  AttachmentIcon,
  EmojiIcon as EmojiIconOutline,
  PaperPlaneIcon,
} from "@/public/icons/outline";
import React, { useState } from "react";
import { IconButton } from "../../atoms";
import { AttachFile, EmojiPicker } from "../popup";
import { useChatroomContext } from "@/src/modules/chatroom/context/ChatroomContext";

interface ChatPropertiesProps {
  isExpired: boolean;
}

const ChatProperties: React.FC<ChatPropertiesProps> = ({ isExpired }) => {
  const { sendMessage } = useChatroomContext();
  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState(false);
  const [attachFile, setAttachFile] = useState(false);

  const handleSend = async () => {
    await sendMessage({
      type: "text",
      text: value,
      file: null,
    }).then((_) => {
      setValue("");
    });
  };

  if (isExpired) {
    return (
      <div className="w-full absolute bottom-[81px] bg-[#CB5237] p-4 flex flex-row items-center justify-between gap-4">
        <p className="font-medium text-white truncate">
          This chatroom has passed 24 hours since the custumer’s last reply
        </p>
        {/* remove in MVP phase */}
        {/* <Button
          variant="primary"
          color="#323944"
          label="Follow Up Customer"
          className="!flex-shrink-0"
        /> */}
      </div>
    );
  }

  return (
    <div className="bg-white  w-full p-6 flex flex-row items-center gap-4 absolute bottom-[81px] border-t border-[#EEF5FF]">
      <IconButton
        Icon={AttachmentIcon}
        onClick={() => setAttachFile((value) => !value)}
        color={attachFile ? "#C02716" : "#0D0F12"}
      />
      <IconButton
        Icon={emoji ? EmojiIconDuotone : EmojiIconOutline}
        onClick={() => setEmoji((value) => !value)}
        color={emoji ? "#C02716" : "#0D0F12"}
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something here. Press “shift + enter” to make a new line."
        className="bg-[#EEF5FF] px-4 py-2 h-[37px] rounded-lg w-full text-[#0D0F12] hover:bg-[#D7E4F5] placeholder:text-[#AABDD7] focus:outline-none"
      />
      <button className="bg-[#AABDD7] rounded-lg p-2 border-none">
        <PaperPlaneIcon fill="#fff" onClick={handleSend} />
      </button>

      <EmojiPicker visible={emoji} onClose={() => setEmoji(false)} />
      <AttachFile visible={attachFile} onClose={() => setAttachFile(false)} />
    </div>
  );
};

export default ChatProperties;
