"use client";

import { EmojiIcon as EmojiIconDuotone } from "@/public/icons/duotone";
import {
  AttachmentIcon,
  EmojiIcon as EmojiIconOutline,
  PaperPlaneIcon,
} from "@/public/icons/outline";
import { useChatroomContext } from "@/src/modules/chatroom";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button, IconButton } from "../../atoms";
import { AttachFile, EmojiPicker } from "../popup";

interface ChatInputProps {
  isExpired: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ isExpired }) => {
  const { sendMessage } = useChatroomContext();
  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState(false);
  const [attachFile, setAttachFile] = useState(false);

  const handleSend = async () => {
    await sendMessage({ type: "text", file: undefined, text: value }).then(
      (_) => {
        setValue("");
        setEmoji(false);
      }
    );
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length) {
      const fileType = files[0].type;
      const allowedType = ["image/png", "image/gif", "image/jpeg"];

      if (allowedType.includes(fileType)) {
        await sendMessage({ type: "image", file: files[0], text: value }).then(
          (_) => setAttachFile(false)
        );
      } else {
        toast.error("Only accept .jpg, .jpeg, or .png format");
      }
    }
  };

  if (isExpired) {
    return (
      <div className="w-full bg-[#CB5237] p-4">
        <p className="font-medium text-white truncate">
          This chatroom has passed 24 hours since the custumer’s last reply
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white w-full p-6 flex flex-row items-center gap-4 border-t border-[#EEF5FF]">
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
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something here. Press “shift + enter” to make a new line."
        className="bg-[#EEF5FF] px-4 py-2 h-[37px] rounded-lg w-full text-[#0D0F12] hover:bg-[#D7E4F5] placeholder:text-[#AABDD7] focus:outline-none"
      />
      <Button
        variant="primary"
        Icon={PaperPlaneIcon}
        onClick={handleSend}
        disabled={!value}
      />
      <EmojiPicker
        visible={emoji}
        onSelect={(emoji) => setValue((val) => val + emoji)}
      />
      <AttachFile
        visible={attachFile}
        onClose={() => setAttachFile(false)}
        onClickImage={handleImageSelect}
      />
    </div>
  );
};

export default ChatInput;
