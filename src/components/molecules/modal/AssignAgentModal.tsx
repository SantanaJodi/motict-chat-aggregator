"use client";

import { HeadsetIcon, SearchIcon } from "@/public/icons/outline";
import { ModalType } from "@/src/types";
import React, { useEffect, useState } from "react";
import { Button, Modal, Radio, TextInput } from "../../atoms";
import StatesContainer from "../../organism/StatesContainer";

interface AssignAgentModalProps extends Omit<ModalType, "title"> {
  defaultValue?: string;
  onAssign: (val: string) => void;
}
const dummy: string[] = [
  "Soo Lee hin",
  "Joo Min Ten",
  "Boo Di Man",
  "Soe Bag Gyoue",
  "Su Gie Yem",
  "Park Goo Nawan",
  "Soo Park Man",
  "Park Su Geng",
  "Kir man to",
  "Soo Man Too",
];

const AssignAgentModal: React.FC<AssignAgentModalProps> = ({
  onClose,
  visible,
  defaultValue,
  onAssign,
}) => {
  const [value, setvalue] = useState(defaultValue || "");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agents, setAgents] = useState<string[]>([]);

  useEffect(() => {
    if (!search) {
      setAgents(dummy);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const find = dummy.filter((item) =>
        item.trim().toLowerCase().includes(search.trim().toLowerCase())
      );

      if (!find.length) {
        setAgents([]);
      } else {
        setAgents(find);
      }
      setIsLoading(false);
    }, 3000);
  }, [search]);

  return (
    <Modal
      title="Agent Assignment"
      onClose={onClose}
      visible={visible}
      footer={
        <Button
          label="Assign"
          disabled={!value}
          variant="primary"
          color="#323944"
          onClick={() => {
            onAssign(value);
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
          <div className="flex flex-col  overflow-y-auto">
            {agents.map((item, id) => (
              <Radio
                key={id}
                name={item}
                label={item}
                value={item}
                onChange={(val) => setvalue(val)}
              />
            ))}
          </div>

          <StatesContainer
            onReload={() => alert("reload")}
            isLoading={isLoading}
            isEmpty={!agents.length}
            isError={error}
            noResult={!!search && !agents.length}
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
