import { ISelectOpt } from "@/src/types";

export interface IAccountManagementType {
  name: string;
  company: string;
  industry: ISelectOpt;
  address: string;
  phoneNumber: string;
  email: string;
  alternativeEmail1: string;
  alternativeEmail2: string;
  alternativeEmail3: string;
}
