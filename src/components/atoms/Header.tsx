import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="px-6 py-4 w-full">
      <p className="font-bold text-2xl color-[#0D0F12]">{title}</p>
    </div>
  );
};

export default Header;
