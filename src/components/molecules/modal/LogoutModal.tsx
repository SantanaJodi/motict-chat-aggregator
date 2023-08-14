import { LogoutIcon } from "@/public/icons/outline";
import { useAuthContext } from "@/src/hooks/auth-context";
import { ModalType } from "@/src/types";
import React from "react";
import { Button, Modal } from "../../atoms";

interface LogoutModalProps extends Omit<ModalType, "title"> {}

const LogoutModal: React.FC<LogoutModalProps> = ({ onClose, visible }) => {
  const { handleLogout } = useAuthContext();
  const footerContent = (
    <div className="w-full flex flex-row items-center justify-between gap-4">
      <Button
        label="Cancel"
        variant="subtle"
        className="!w-full"
        onClick={onClose}
      />
      <Button
        label="Log Out"
        variant="primary"
        size="small"
        color="#C02716"
        Icon={LogoutIcon}
        className="!w-full"
        onClick={handleLogout}
      />
    </div>
  );

  return (
    <Modal
      title={`Log Out as Admin Wikitoko`}
      onClose={onClose}
      visible={visible}
      footer={footerContent}
      width={480}
      height={210}
    >
      <div className="pb-6">
        <p className="text-[#323944]">
          Are you sure want to log out from this account?
        </p>
      </div>
    </Modal>
  );
};

export default LogoutModal;
