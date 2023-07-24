import { ISelectOpt } from "@/src/types";

export interface IContact {
  name: string;
  email?: string;
  address?: string;
  phone_number: string;
  industry_id?: number;
  //   TODO APIN: some stuff below doesn't exist in BE response
  channel: string;
  last_activity: string; // this type maybe a Date
}

export interface IContactCreate {
  name: string;
  channel: ISelectOpt;
  account: ISelectOpt;
  phoneNumber: string;
}
