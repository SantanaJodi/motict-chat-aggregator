import { AxiosResponse } from "axios";

export interface IResponDataFetch<T> {
  isSuccess: boolean;
  message: string;
  data?: T;
}
export interface IResponGetDataFetch<T>
  extends AxiosResponse<IResponDataFetch<T>> {}
