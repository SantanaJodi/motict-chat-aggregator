"use client";

import {
  Container,
  HowToAddMultipleContact,
  NewContactHeader,
} from "@/src/components";
import React from "react";
import { FormProvider } from "react-hook-form";
import AddMultipleContactForm from "../form/AddMultipleContactForm";
import AddSingleContactForm from "../form/AddSingleContactForm";
import AddContactViewModel from "../view-model/AddContactViewModel";

interface AddNewContactViewProps {}

const AddNewContactView: React.FC<AddNewContactViewProps> = () => {
  const { handleChangeType, state, formModule, handleSaveContact } =
    AddContactViewModel();

  const isSingle = state.type === "single";
  return (
    <Container>
      <div className="w-full h-full flex flex-row gap-[1px]">
        <div className="w-full h-full overflow-hidden">
          <NewContactHeader type={state.type} onChangeType={handleChangeType} />
          <div className="p-6 h-full overflow-auto">
            <FormProvider {...formModule}>
              <form onSubmit={formModule.handleSubmit(handleSaveContact)}>
                <div className="flex flex-col gap-12">
                  {isSingle ? (
                    <AddSingleContactForm />
                  ) : (
                    <AddMultipleContactForm />
                  )}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
        {!isSingle && <HowToAddMultipleContact />}
      </div>
    </Container>
  );
};

export default AddNewContactView;
