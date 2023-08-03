import { ModalType } from "@/src/types";
import React from "react";
import { FormProvider } from "react-hook-form";
import { Button, FieldInput, Modal } from "../../../atoms";
import ChangePasswordModel from "./ChangePasswordModel";

interface ChangePasswordModalProps extends Omit<ModalType, "title"> {}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  onClose,
  visible,
}) => {
  const { formModule, onChangePassword } = ChangePasswordModel();

  return (
    <FormProvider {...formModule}>
      <form onSubmit={formModule.handleSubmit(onChangePassword)}>
        <Modal
          title="Change Password"
          onClose={onClose}
          visible={visible}
          width={480}
          height={"auto"}
          footer={
            <div className="w-full flex flex-row items-center justify-between gap-4">
              <Button
                label="Cancel"
                variant="subtle"
                className="!w-full"
                onClick={onClose}
              />
              <Button
                label="Change"
                variant="primary"
                color="#323944"
                className="!w-full"
                type="submit"
                onClick={onClose}
                disabled={!formModule.formState.isDirty}
              />
            </div>
          }
        >
          <div className="pb-6 flex flex-col gap-8">
            <FieldInput
              name="old"
              label="Old Password"
              placeholder="Insert your old password"
              type="password"
            />
            <FieldInput
              name="new"
              label="New Password"
              placeholder="Create your new password"
              type="password"
              hints="Use a combination of letters and numbers."
            />
            <FieldInput
              name="confirm"
              label="Repeat New Password"
              placeholder="Repeat your new password"
              type="password"
            />
          </div>
        </Modal>
      </form>
    </FormProvider>
  );
};

export default ChangePasswordModal;
