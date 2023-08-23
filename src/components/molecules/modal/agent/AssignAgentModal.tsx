"use client";

import { HeadsetIcon, SearchIcon } from "@/public/icons/outline";
import { ModalType } from "@/src/types";
import React from "react";
import { Button, Modal, Radio, TextInput } from "../../../atoms";
import StatesContainer from "../../../organism/StatesContainer";
import AssignAgentModel from "./model/AssignAgentModel";
import { IAgent } from "./types/agentType";

interface AssignAgentModalProps extends Omit<ModalType, "title"> {
  defaultValue?: IAgent;
}

const AssignAgentModal: React.FC<AssignAgentModalProps> = ({
  onClose,
  visible,
  defaultValue,
}) => {
  const {
    agent,
    agents,
    search,
    isError,
    isLoading,
    setAgent,
    setSearch,
    onAssignAgent,
  } = AssignAgentModel({
    defaultValue,
  });

  return (
    <Modal
      title="Agent Assignment"
      onClose={onClose}
      visible={visible}
      width={480}
      height={560}
      footer={
        <Button
          label="Assign"
          disabled={!agent}
          variant="primary"
          color="#323944"
          onClick={() => {
            onAssignAgent();
            onClose();
          }}
          className="!w-full"
        />
      }
    >
      <div className="h-full flex flex-col gap-6 ">
        <TextInput
          value={search}
          onChange={(val) => setSearch(val)}
          placeholder="Search contact"
          Icon={SearchIcon}
        />
        <div className="flex flex-col h-full relative">
          <div className="flex flex-col  overflow-y-auto mb-16">
            {agents?.map((item) => (
              <Radio
                label={item.name}
                key={item.agent_id}
                name={item.agent_id.toString()}
                value={item.agent_id.toString()}
                onChange={() => setAgent(item)}
              />
            ))}
          </div>

          <StatesContainer
            onReload={() => alert("reload")}
            isLoading={isLoading}
            isEmpty={!agents?.length}
            isError={isError}
            noResult={!!search && !agents?.length}
            emptyMsg="You don't have agent"
            noResultMsg={`No result for ”${search}”`}
            EmptyIcon={HeadsetIcon}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AssignAgentModal;
