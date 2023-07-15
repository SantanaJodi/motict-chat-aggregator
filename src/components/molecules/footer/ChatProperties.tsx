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

interface ChatPropertiesProps {
  onSend: (value: string) => void;
}

const ChatProperties: React.FC<ChatPropertiesProps> = () => {
  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState(false);
  const [attachFile, setAttachFile] = useState(false);
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
        <PaperPlaneIcon fill="#fff" />
      </button>

      <EmojiPicker visible={emoji} onClose={() => setEmoji(false)} />
      <AttachFile visible={attachFile} onClose={() => setAttachFile(false)} />
    </div>
  );
};

export default ChatProperties;
