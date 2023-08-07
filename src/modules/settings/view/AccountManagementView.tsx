"use client";

import { AccountManagementHeader } from "@/src/components";
import {
  Button,
  FieldInput,
  FieldSelect,
  Loading,
} from "@/src/components/atoms";
import { ChangePasswordModal } from "@/src/components/molecules/modal";
import React from "react";
import { FormProvider } from "react-hook-form";
import AccountManagementViewModel from "../model/AccountManagementViewModel";

interface AccountManagementViewProps {}

const AccountManagementView: React.FC<AccountManagementViewProps> = () => {
  const { isLoading, formModule, passwordModal, onSave, handlePasswordModal } =
    AccountManagementViewModel();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white overflow-y-auto relative w-full">
      <AccountManagementHeader />
      <FormProvider {...formModule}>
        <form onSubmit={formModule.handleSubmit(onSave)}>
          <div className="flex flex-col p-6 gap-8">
            <FieldInput
              name="name"
              label="Fullname"
              placeholder="Your fullname here"
            />
            <FieldInput
              name="company"
              label="Company Name"
              placeholder="Your company name here"
            />
            <FieldSelect
              name="industry"
              label="Industry"
              options={[
                { value: "Others", label: "Others" },
                { value: "Automotive", label: "Automotive" },
                { value: "Banking", label: "Banking" },
                { value: "Consumer", label: "Consumer Goods" },
                { value: "Pharmaceutical", label: "Pharmaceutical" },
                { value: "Retail", label: "Retail" },
              ]}
            />
            <FieldInput
              name="address"
              label="Address"
              placeholder="Your address here"
            />
            <FieldInput
              name="phoneNumber"
              label="Phone Number"
              placeholder="Your phone number here"
            />
            <FieldInput
              name="email"
              label="Email"
              placeholder="Your email here"
            />
            {/* Skip for this MVP */}
            {/* <FieldInput
              name="alternativeEmail1"
              label="Alternative Billing Email 1"
              placeholder="Your billing email 1 here"
            />
            <FieldInput
              name="alternativeEmail2"
              label="Alternative Billing Email 2"
              placeholder="Your billing email 2 here"
            />
            <FieldInput
              name="alternativeEmail3"
              label="Alternative Billing Email 3"
              placeholder="Your billing email 3 here"
            /> */}
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[#0D0F12]">Password</p>
              <Button
                variant="primary"
                color="#323944"
                label="Change Password"
                onClick={() => handlePasswordModal(true)}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              color="#323944"
              label="Save Changes"
              className="!self-end"
              disabled={!formModule.formState.isDirty}
            />
          </div>
        </form>
      </FormProvider>

      <ChangePasswordModal
        visible={passwordModal}
        onClose={() => handlePasswordModal(false)}
      />
    </div>
  );
};

export default AccountManagementView;
