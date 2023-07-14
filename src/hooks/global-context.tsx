"use client";
import { FunctionComponent, PropsWithChildren } from "react";

import { QueryClientProviderContext } from "./query-client-provider-context";
import { AuthContextProvider } from "./auth-context";

export const GlobalContext: FunctionComponent<GlobalContextProps> = ({
  children,
}) => {
  return (
    <QueryClientProviderContext>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProviderContext>
  );
};

export interface GlobalContextProps extends PropsWithChildren {}
