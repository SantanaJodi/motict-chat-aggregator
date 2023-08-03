"use client";
import { FunctionComponent, PropsWithChildren } from "react";

import { QueryClientProviderContext } from "./query-client-provider-context";
import { AuthContextProvider } from "./auth-context";
import { Toaster } from "../components";

export const GlobalContext: FunctionComponent<GlobalContextProps> = ({
  children,
}) => {
  return (
    <AuthContextProvider>
      <QueryClientProviderContext>
        <Toaster />
        {children}
      </QueryClientProviderContext>
    </AuthContextProvider>
  );
};

export interface GlobalContextProps extends PropsWithChildren {}
