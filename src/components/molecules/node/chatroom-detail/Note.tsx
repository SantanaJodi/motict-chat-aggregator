"use client";

import { PenIcon, SaveIcon } from "@/public/icons/outline";
import { Button, IconButton, TextInput } from "@/src/components/atoms";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";
import React, { useEffect, useState } from "react";

interface NoteProps {
  notes?: string;
  onSave: (value: string) => Promise<IConversationDetail>;
  isLoading: boolean;
}

const Note: React.FC<NoteProps> = ({ notes, onSave, isLoading }) => {
  const [value, setValue] = useState(notes || "");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (notes !== undefined) {
      setValue(notes);
    }
  }, [notes]);

  let bodyContent;
  if (!notes && !isEdit) {
    bodyContent = (
      <Button
        variant="link"
        label="Add note"
        color="#8B9EB7"
        onClick={() => setIsEdit(true)}
      />
    );
  }

  if (notes) {
    bodyContent = <p className="text-[#67768B]">{notes}</p>;
  }

  if (isEdit) {
    bodyContent = (
      <div className="flex flex-col items-start gap-4 w-full">
        <TextInput
          value={value}
          onChange={(val) => setValue(val)}
          placeholder="Add note for this conversation"
        />
        <div className="flex flex-row items-center justify-between gap-2 w-full">
          <Button
            variant="ghost"
            label="Cancel"
            size="small"
            onClick={() => setIsEdit(false)}
            className="flex-1"
          />
          <Button
            disabled={isLoading}
            variant="primary"
            label="Save"
            Icon={SaveIcon}
            size="small"
            color="#323944"
            onClick={async () => {
              await onSave(value);
              setIsEdit(false);
            }}
            className="flex-1"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-row items-center w-full justify-between">
        <p className="font-bold">Notes</p>
        {notes && (
          <IconButton
            Icon={PenIcon}
            onClick={() => setIsEdit(true)}
            size="small"
          />
        )}
      </div>
      {bodyContent}
    </div>
  );
};

export default Note;
