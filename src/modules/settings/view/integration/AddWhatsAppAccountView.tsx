"use client";
import {
  AddWhatsAppAccountHeader,
  Button,
  WhatsAppAccountForm,
} from "@/src/components";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider } from "react-hook-form";
import AddWhatsAppAccountViewModel from "../../model/AddWhatsAppAccountViewModel";

interface AddWhatsAppAccountViewProps {}

const AddWhatsAppAccountView: React.FC<AddWhatsAppAccountViewProps> = () => {
  const router = useRouter();
  const { formModule, onAdd } = AddWhatsAppAccountViewModel();
  return (
    <div className="w-full bg-white overflow-y-auto">
      <AddWhatsAppAccountHeader />
      <FormProvider {...formModule}>
        <form onSubmit={formModule.handleSubmit(onAdd)}>
          <WhatsAppAccountForm />
          <div className="flex flex-row items-center justify-end gap-4 p-6 pt-2">
            <Button
              variant="ghost"
              label="Back"
              onClick={() => router.back()}
            />
            <Button
              variant="primary"
              color="#323944"
              label="Add"
              disabled={!formModule.formState.isDirty}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddWhatsAppAccountView;
