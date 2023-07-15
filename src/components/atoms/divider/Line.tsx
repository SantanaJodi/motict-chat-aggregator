import React from "react";

interface LineProps {}

const Line: React.FC<LineProps> = () => {
  return <hr className="border-none h-[1px] bg-[#EEF5FF]" />;
};

export default Line;
