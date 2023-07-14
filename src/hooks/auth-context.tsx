"use client";
import { useRouter } from "next/navigation";

import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";

import Cookies from "js-cookie";
import { Container } from "../components";

const AuthContext = React.createContext<AuthContextProps>({} as any);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const [{ token }, setState] = useState<{
    token: string | null;
  }>({
    token: null,
  });

  const handleSetToken = (token: string) => {
    Cookies.set("token", token);
    setState({ token });
  };

  const handleRevokeToken = () => {
    Cookies.remove("token");
    setState({ token: null });
    router.replace("/login");
  };

  useEffect(() => {
    const cookieToken = Cookies.get("token");
    if (!cookieToken) {
      router.replace("/login");
    } else {
      setState({ token: cookieToken });
    }
  }, [router, setState]);

  const renderChild = useMemo(() => {
    if (token) {
      return <Container>{children}</Container>;
    } else {
      return children;
    }
  }, [children, token]);

  return (
    <AuthContext.Provider value={{ token, handleRevokeToken, handleSetToken }}>
      {renderChild}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);

export interface AuthContextProps {
  token: string | null;
  handleSetToken: (token: string) => void;
  handleRevokeToken: () => void;
}
