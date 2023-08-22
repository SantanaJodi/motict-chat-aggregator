"use client";

import { PeoplesIcon } from "@/public/icons/outline";
import { ContactHeader, Container, Table } from "@/src/components";
import { DeleteRecipientGroupModal } from "@/src/components/molecules/modal";
import StatesContainer from "@/src/components/organism/StatesContainer";
import React from "react";
import { IContact } from "../types/contact-type";
import ContactViewModel from "../view-model/ContactViewModel";

interface ContactViewProps {
  contact: IContact[];
}

const ContactView: React.FC<ContactViewProps> = ({ contact }) => {
  const {
    state: {
      data,
      channel,
      error,
      isLoading,
      search,
      selectedRow,
      deleteModal,
    },
    table,
    handleSearch,
    handleChangeChannel,
    handleDeleteModal,
    handleDeleteContact,
  } = ContactViewModel({ contact });

  return (
    <Container>
      <div className="w-full h-screen flex flex-col overflow-hidden">
        <ContactHeader
          search={search}
          channel={channel}
          selectedRow={selectedRow}
          onSearch={handleSearch}
          onSelectChannel={handleChangeChannel}
          onDeleteContact={() => handleDeleteModal(true)}
        />
        <div className="w-full flex flex-grow relative">
          <div className="absolute w-full h-full">
            <Table table={table} data={data} />
          </div>

          <StatesContainer
            isLoading={isLoading}
            isEmpty={!data?.length}
            isError={error}
            EmptyIcon={PeoplesIcon}
            onReload={() => alert("reload")}
            emptyMsg="You don’t have any contact"
            noResult={!!search && !data?.length}
            disableErrorToast
          />
        </div>
      </div>
      <DeleteRecipientGroupModal
        visible={deleteModal}
        title={`Delete ${selectedRow.length} Contact(s)`}
        content={`Are you sure want to delete ${selectedRow.length} Contact(s)? You cannot undo this action.`}
        onDelete={handleDeleteContact}
        onClose={() => handleDeleteModal(false)}
      />
    </Container>
  );
};

export default ContactView;
