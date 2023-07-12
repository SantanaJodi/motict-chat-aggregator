import React from "react";

interface ChatTimeProps {
  time: string;
}

const ChatTime: React.FC<ChatTimeProps> = ({ time }) => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 w-full relative h-[29px]">
      <hr className="w-full h-px bg-[#EEF5FF] border-0 m-0" />
      <div className="absolute  -translate-x-1/2  left-1/2 px-3 py-1 bg-white rounded-full text-[#AABDD7] border border-[#EEF5FF]">
        {time}
      </div>
    </div>
  );
};

export default ChatTime;
