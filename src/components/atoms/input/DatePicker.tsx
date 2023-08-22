/* eslint-disable react/display-name */
"use client";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleChevronLeftIcon,
  DoubleChevronRightIcon,
} from "@/public/icons/outline";
import { IDateRange } from "@/src/types/common-types";
import { endOfDay, format, startOfDay } from "date-fns";
import React, { createRef, forwardRef, useCallback, useState } from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, IconButton } from "../buttons";

interface DatePickerProps
  extends Omit<ReactDatePickerProps, "onChange" | "defaultValue"> {
  label?: string;
  onChange: (dates: IDateRange) => void;
  defaultValue?: IDateRange | null;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  onChange,
  defaultValue,
}) => {
  const pickerRef = createRef<any>();
  const [range, setRange] = useState<IDateRange>({
    end: defaultValue?.end,
    start: defaultValue?.start,
  });

  const onSelect = (dates: any) => {
    const [start, end] = dates;
    setRange({ start, end });
  };

  const handleChange = useCallback(() => {
    const { end, start } = range;

    if (start) {
      if (!end) {
        const singleDate = {
          start: startOfDay(start),
          end: endOfDay(start),
        };
        setRange(singleDate);
        onChange(singleDate);
      } else {
        onChange({
          start: startOfDay(start),
          end: endOfDay(end),
        });
      }
    }

    if (pickerRef.current) {
      pickerRef.current.setOpen(false);
    }
  }, [range, onChange, pickerRef]);

  const handleReset = () => {
    const dv: IDateRange = {
      end: defaultValue?.end,
      start: defaultValue?.start,
    };

    setRange(dv);
    onChange(dv);
  };

  const CustomInput = forwardRef(({ value, onClick }: any, ref) => {
    return (
      <div
        className="bg-[#EEF5FF] p-2 flex flex-row items-center gap-2 rounded-lg"
        onClick={onClick}
        ref={ref as any}
      >
        {value}
        <ChevronDownIcon />
      </div>
    );
  });

  return (
    <div className="flex flex-col">
      {label && <p className="font-bold text-[#0D0F12] mb-2">{label}</p>}
      <ReactDatePicker
        selectsRange
        selectsStart
        ref={pickerRef}
        selected={new Date()}
        shouldCloseOnSelect={false}
        disabledKeyboardNavigation={!!range.end}
        startDate={range.start}
        endDate={range.end}
        showPopperArrow={false}
        formatWeekDay={(day) => day.slice(0, 3)}
        customInput={<CustomInput />}
        onChange={(dates, e) => onSelect(dates)}
        renderCustomHeader={({
          date,
          decreaseYear,
          increaseYear,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="bg-white flex flex-row items-center justify-between gap-1 w-full">
            <div className="flex flex-row items-center gap-1">
              <IconButton
                Icon={DoubleChevronLeftIcon}
                onClick={decreaseYear}
                color="#C02716"
              />
              <IconButton Icon={ChevronLeftIcon} onClick={decreaseMonth} />
            </div>
            <p className="font-bold text-[#0D0F12]">
              {format(date, "MMMM yyyy")}
            </p>
            <div className="flex flex-row items-center gap-1">
              <IconButton Icon={ChevronRightIcon} onClick={increaseMonth} />
              <IconButton
                Icon={DoubleChevronRightIcon}
                onClick={increaseYear}
                color="#C02716"
              />
            </div>
          </div>
        )}
        calendarContainer={({ children }) => (
          <div className="bg-white p-4 flex flex-col gap-4 rounded-lg w-[375px]">
            {children}
            <div className="flex flex-row items-center gap-4">
              <Button
                variant="subtle"
                label="Reset"
                className="!flex-grow"
                onClick={handleReset}
              />
              <Button
                variant="primary"
                label="Confirm"
                className="!flex-grow"
                onClick={handleChange}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default DatePicker;
