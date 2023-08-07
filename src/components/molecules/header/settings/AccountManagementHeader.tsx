/* eslint-disable react/no-unescaped-entities */
import { Avatar } from "@/src/components/atoms";
import React from "react";

interface AccountManagementHeaderProps {}

const AccountManagementHeader: React.FC<AccountManagementHeaderProps> = () => {
  return (
    <div className=" flex flex-row items-start justify-between p-6">
      <div>
        <h2 className="font-bold text-xl text-[#0D0F12] mb-6">
          Account Management
        </h2>
        <span className="text-sm text-[#323944]">
          Easily manage your account details here.
          <br /> Please note when you change the avatar, it will only affect on
          this admin's avatar and remember to upload 200px x 200px (square
          image) for better result
        </span>
      </div>
      <Avatar
        isEditable
        url="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"
      />
    </div>
  );
};

export default AccountManagementHeader;
