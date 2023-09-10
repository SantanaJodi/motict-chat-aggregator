"use client";

import { PenIcon, SaveIcon, TagIcon } from "@/public/icons/outline";
import { Button, DropdownInput, IconButton } from "@/src/components/atoms";
import { ISelectOpt } from "@/src/types";
import React, { useState } from "react";
import { TagViewModel } from "./TagsViewModel";
import { useChatroomContext } from "@/src/modules/chatroom";
import { ITag, ITagDetail } from "./types/TagTypes";

interface TagsProps {
  tags: ITagDetail[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  const { tags: optTags } = TagViewModel();

  const { setTags } = useChatroomContext();

  const [value, setValue] = useState<ISelectOpt[]>(
    tags?.map((t) => ({ label: t.tag, value: t.id } || [])) as any
  );

  const [isEdit, setIsEdit] = useState(false);

  const handleSetTags = async (val: ISelectOpt[]) => {
    await setTags(val.map((t) => Number(t.value))).catch((t) => {
      return setIsEdit(true);
    });
    setIsEdit(false);
    setValue([]);
  };

  let bodyContent;
  if (!tags?.length && !isEdit) {
    bodyContent = (
      <Button
        variant="link"
        label="Add tag"
        color="#8B9EB7"
        onClick={() => setIsEdit(true)}
      />
    );
  }

  if (tags?.length) {
    bodyContent = (
      <div className="w-full flex flex-row items-center gap-1">
        <TagIcon width={16} height={16} fill="#8B9EB7" />
        <p className="text-[#8B9EB7] text-[12px]">
          {tags.map((t) => t.tag).join(", ")}
        </p>
      </div>
    );
  }

  if (isEdit) {
    bodyContent = (
      <div className="flex flex-col items-start gap-4 w-full">
        <DropdownInput
          isMulti
          placeholder="Search Tag"
          value={value}
          onChange={(value) => setValue(value)}
          options={optTags?.map((t) => ({ label: t.name, value: t.id })) || []}
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
            variant="primary"
            label="Save"
            Icon={SaveIcon}
            size="small"
            color="#323944"
            onClick={async () => {
              handleSetTags(value);
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
        <p className="font-bold">Tag(s)</p>
        {tags?.length ? (
          <IconButton
            Icon={PenIcon}
            onClick={() => setIsEdit(true)}
            size="small"
          />
        ) : null}
      </div>
      {bodyContent}
    </div>
  );
};

export default Tags;
