"use client";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useState } from "react";
import { ILogin } from "../modules/login/types/login-type";

const AuthContext = React.createContext<AuthContextProps>({} as any);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const [{ token }, setState] = useState<{
    token: Partial<ILogin>;
  }>({
    token: {
      expire_at: "",
      token: "",
    },
  });

  return (
    <AuthContext.Provider value={{ token, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);

export interface AuthContextProps {
  token: Partial<ILogin>;
  setState: React.Dispatch<
    React.SetStateAction<{
      token: Partial<ILogin>;
    }>
  >;
}
