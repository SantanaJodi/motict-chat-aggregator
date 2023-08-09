"use client";
import { ClockIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React, { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button, Checkbox, FieldInputTime } from "../../atoms";

interface ListChatScheduleProps {
  name: string;
}

const ListChatSchedule: React.FC<ListChatScheduleProps> = ({ name }) => {
  const { control, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });
  const [checked, setChecked] = useState(!!fields.length);

  return (
    <div
      className={clsx(
        "w-full flex flex-row gap-4",
        fields.length > 1 ? "items-start" : "items-center"
      )}
    >
      <div className="flex flex-row items-center gap-2 h-10 w-40">
        <Checkbox
          checked={checked}
          onChange={() => {
            setChecked((val) => !val);
            setValue(name, [
              {
                openFrom: "00:00",
                openUntil: "00:00",
              },
            ]);
          }}
        />
        <p className="font-medium text-sm text-[#0D0F12]">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {!checked && (
          <Button variant="primary" disabled label="Closed" Icon={ClockIcon} />
        )}
        {checked &&
          fields.map((item, idx) => (
            <div key={item.id} className="flex flex-row items-center gap-4">
              <FieldInputTime
                name={`${name}.${idx}.openFrom`}
                containerClassName="!w-[140px]"
              />
              <p className="text-[#0D0F12]">to</p>
              <FieldInputTime
                name={`${name}.${idx}.openUntil`}
                containerClassName="!w-[140px]"
              />
              <Button
                variant="subtle"
                label="-"
                className="!w-10 !h-10"
                onClick={() => remove(idx)}
              />
              {(fields.length === 1 || idx === fields.length - 1) && (
                <Button
                  variant="subtle"
                  label="+"
                  className="!w-10 !h-10"
                  onClick={() =>
                    append({
                      openFrom: "00:00",
                      openUntil: "00:00",
                    })
                  }
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListChatSchedule;
