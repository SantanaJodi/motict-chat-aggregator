import { formatRelative } from "date-fns";
import { enGB } from "date-fns/locale";

export const getCustomDate = (date: Date) => {
  const formatRelativeLocale: any = {
    lastWeek: "'last' eeee',' kk:mm",
    yesterday: "'yesterday,' kk:mm",
    today: "'today,' kk:mm",
    tomorrow: "'tomorrow,' kk:mm",
    nextWeek: "eeee',' kk:mm",
    other: "PPP, kk:mm",
  };

  const locale = {
    ...enGB,
    formatRelative: (token: any) => formatRelativeLocale[token],
  };

  return formatRelative(new Date(date), new Date(), { locale });
};
