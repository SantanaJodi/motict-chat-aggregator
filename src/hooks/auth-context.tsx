"use client";
import { useRouter } from "next/navigation";

import React, { PropsWithChildren, useEffect } from "react";

import Cookies from "js-cookie";
import { useImmer } from "use-immer";

const AuthContext = React.createContext<AuthContextProps>({} as any);

interface IState {
  token: string | null;
  logoutModal: boolean;
}

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const [{ token, logoutModal }, update] = useImmer<IState>({
    token: null,
    logoutModal: false,
  });

  const handleToken = (val: string | null) => {
    update((s) => {
      s.token = val;
    });
  };

  const handleSetToken = (token: string) => {
    Cookies.set("token", token);
    handleToken(token);
  };

  const handleRevokeToken = () => {
    Cookies.remove("token");
    handleToken(null);
    router.replace("/login");
  };

  const handleLogoutModal = (val: boolean) => {
    update((s) => {
      s.logoutModal = val;
    });
  };

  const handleLogout = () => {
    handleRevokeToken();
    handleLogoutModal(false);
  };

  useEffect(() => {
    const cookieToken = Cookies.get("token");
    if (!cookieToken) {
      router.replace("/login");
    } else {
      handleToken(cookieToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        token,
        logoutModal,
        handleRevokeToken,
        handleSetToken,
        handleLogoutModal,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);

export interface AuthContextProps {
  token: string | null;
  logoutModal: boolean;
  handleSetToken: (token: string) => void;
  handleLogoutModal: (val: boolean) => void;
  handleRevokeToken: () => void;
  handleLogout: () => void;
}
