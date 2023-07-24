import { TrashIcon } from "@/public/icons/outline";
import { ModalType } from "@/src/types";
import React from "react";
import { Button, Modal } from "../../atoms";

interface DeleteRecipientGroupModalProps extends ModalType {
  content: string;
  onDelete: () => void;
}

const DeleteRecipientGroupModal: React.FC<DeleteRecipientGroupModalProps> = ({
  title,
  onClose,
  visible,
  content,
  onDelete,
}) => {
  const footerContent = (
    <div className="w-full flex flex-row items-center justify-between gap-4">
      <Button
        label="Cancel"
        variant="subtle"
        className="!w-full"
        onClick={onClose}
      />
      <Button
        label="Go"
        variant="primary"
        size="small"
        color="#C02716"
        Icon={TrashIcon}
        className="!w-full"
        onClick={onDelete}
      />
    </div>
  );

  return (
    <Modal
      title={title}
      onClose={onClose}
      visible={visible}
      footer={footerContent}
      width={480}
      height={22657}
    >
      <div className="pb-6">
        <p>{content}</p>
      </div>
    </Modal>
  );
};

export default DeleteRecipientGroupModal;
