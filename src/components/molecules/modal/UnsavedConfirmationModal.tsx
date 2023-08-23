import { SaveIcon } from "@/public/icons/outline";
import { ModalType } from "@/src/types";
import React from "react";
import { Button, Modal } from "../../atoms";

interface UnsavedConfirmationModalProps extends Omit<ModalType, "title"> {}

const UnsavedConfirmationModal: React.FC<UnsavedConfirmationModalProps> = ({
  onClose,
  visible,
}) => {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="Changes have not been saved"
      width={480}
      height={226}
      footer={
        <div className="flex flex-row items-center gap-4">
          <Button variant="subtle" label="Cancel" onClick={onClose} />
          <Button
            variant="primary"
            label="Save & Continue"
            Icon={SaveIcon}
            onClick={onClose}
          />
        </div>
      }
    >
      <p className="text-[#323944]">
        Do you want to save your changes before moving on to another page?
      </p>
    </Modal>
  );
};

export default UnsavedConfirmationModal;
