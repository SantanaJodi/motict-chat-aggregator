export interface IReqLogin {
  email: string;
  password: string;
}

export interface ILogin {
  token: string;
  expire_at: string;
}
