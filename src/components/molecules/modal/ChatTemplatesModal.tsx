import { Button, FieldInput, Modal } from "@/src/components/atoms";
import { IChatTemplate } from "@/src/modules/settings/types/chat-template-type";
import { ModalType } from "@/src/types";
import React from "react";

interface ChatTemplatesModalProps extends Omit<ModalType, "title"> {
  disabled?: boolean;
}

const ChatTemplatesModal: React.FC<ChatTemplatesModalProps> = ({
  onClose,
  visible,
  disabled,
}) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="Create or Edit Command"
      width={800}
      height={360}
      footer={
        <div className="flex flex-row items-center justify-between gap-4">
          <Button
            variant="subtle"
            label="Cancel"
            className="!flex-1"
            onClick={onClose}
          />
          <Button
            type="submit"
            variant="primary"
            label="Save"
            className="!flex-1"
            disabled={disabled}
          />
        </div>
      }
    >
      <div className="flex flex-col gap-8 pb-6">
        <FieldInput
          name="command"
          label="Command"
          placeholder="Insert your command"
        />
        <FieldInput
          name="content"
          label="Content"
          placeholder="Insert your content"
        />
      </div>
    </Modal>
  );
};

export default ChatTemplatesModal;
