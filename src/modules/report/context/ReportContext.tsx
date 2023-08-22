"use client";

import { IDateRange } from "@/src/types/common-types";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";
import React, { PropsWithChildren } from "react";
import { ITimezone } from "react-timezone-select";

import { useImmer } from "use-immer";

const ReportContext = React.createContext<ReportContextProps>({} as any);

interface IState {
  filterTimezone: ITimezone | null;
  filterDate: IDateRange | null;
}

const dateFilterDefaultValue: IDateRange = {
  start: startOfMonth(startOfDay(new Date())),
  end: endOfMonth(endOfDay(new Date())),
};

export const ReportContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [{ filterDate, filterTimezone }, update] = useImmer<IState>({
    filterDate: dateFilterDefaultValue,
    filterTimezone: {
      value: "Asia/Bangkok",
      label: "(GMT+7:00) Bangkok, Hanoi, Jakarta",
      offset: 7,
      abbrev: "ICT",
      altName: "Indochina Standard Time",
    },
  });

  const handleFilterTimezone = (v: ITimezone) => {
    update((t) => {
      t.filterTimezone = v;
    });
  };

  const handleFilterDate = (v: IDateRange) => {
    update((t) => {
      t.filterDate = v;
    });
  };

  return (
    <ReportContext.Provider
      value={{
        filterDate,
        filterTimezone,
        handleFilterDate,
        handleFilterTimezone,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = () => React.useContext(ReportContext);

export interface ReportContextProps extends IState {
  handleFilterTimezone: (v: ITimezone) => void;
  handleFilterDate: (v: IDateRange) => void;
}
