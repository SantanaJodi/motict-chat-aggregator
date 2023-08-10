"use client";
import { ChatIcon, SearchIcon } from "@/public/icons/outline";
import { Button, EmptyState, Table, TextInput } from "@/src/components";
import {
  ChatTemplatesModal,
  DeleteRecipientGroupModal,
} from "@/src/components/molecules/modal";
import StatesContainer from "@/src/components/organism/StatesContainer";
import React from "react";
import { FormProvider } from "react-hook-form";
import TemplateChatSettingsViewModel from "../../model/TemplateChatSettingsViewModel";

interface TemplatesChatSettingsViewProps {}

const TemplatesChatSettingsView: React.FC<
  TemplatesChatSettingsViewProps
> = () => {
  const {
    data,
    table,
    search,
    isError,
    formModal,
    isLoading,
    formModule,
    deleteModal,
    selectedTemplate,
    refetch,
    handleSave,
    handleSearch,
    handleFormModal,
    handleDeleteModal,
    handleAddNewTemplate,
    handleDeleteTemplate,
  } = TemplateChatSettingsViewModel();

  return (
    <div className="flex flex-col  w-full h-full">
      <div className="flex flex-row item gap-4 p-6">
        <TextInput
          value={search}
          onChange={handleSearch}
          Icon={SearchIcon}
          placeholder="Search chat’s command"
        />
        <Button
          variant="primary"
          color="#323944"
          label="+ Add New Template"
          className="!flex-shrink-0"
          onClick={handleAddNewTemplate}
        />
      </div>
      <div className="relative flex flex-col w-full flex-1">
        <Table
          table={table}
          data={data}
          className={{ key: "action", classes: "text-right" }}
        />
        {!isLoading && !data.length && !search ? (
          <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-4 absolute">
            <EmptyState Icon={ChatIcon} title="No Template" />
            <Button variant="primary" label="+ Add New Template" />
          </div>
        ) : (
          <StatesContainer
            isLoading={isLoading}
            isError={isError}
            noResult={!!search && !data.length}
            onReload={refetch}
          />
        )}
      </div>
      <FormProvider {...formModule}>
        <form onSubmit={formModule.handleSubmit(handleSave)}>
          <ChatTemplatesModal
            visible={formModal}
            onClose={() => handleFormModal(false)}
            disabled={!formModule.formState.isDirty}
          />
        </form>
      </FormProvider>
      <DeleteRecipientGroupModal
        visible={deleteModal}
        onClose={() => handleDeleteModal(false)}
        content="Are you sure want to delete this chat template?"
        onDelete={handleDeleteTemplate}
        title={`Delete “${selectedTemplate?.command}”`}
      />
    </div>
  );
};

export default TemplatesChatSettingsView;
