"use client";

import { PenIcon, SaveIcon } from "@/public/icons/outline";
import { Button, IconButton, TextInput } from "@/src/components/atoms";
import React, { useState } from "react";

interface NoteProps {
  notes?: string;
  onSave: (value: string) => void;
}

const Note: React.FC<NoteProps> = ({ notes, onSave }) => {
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  let bodyContent;
  if (!notes && !isEdit) {
    bodyContent = (
      <Button
        type="link"
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
            type="ghost"
            label="Cancel"
            size="small"
            onClick={() => setIsEdit(false)}
            className="flex-1"
          />
          <Button
            type="primary"
            label="Save"
            Icon={SaveIcon}
            size="small"
            color="#323944"
            onClick={() => {
              onSave(value);
              setIsEdit(false);
            }}
            className="flex-1"
            disabled={!value}
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
