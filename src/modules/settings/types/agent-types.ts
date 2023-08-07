import { ISelectOpt } from "@/src/types";

export interface IAgent {
  id?: string;
  name: string;
  email: string;
  password: string;
  division: ISelectOpt;
  channel: ISelectOpt[];
}
