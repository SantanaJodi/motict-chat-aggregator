import { AxiosError } from "axios";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthContext } from "./auth-context";
export const QueryClientProviderContext: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { handleRevokeToken } = useAuthContext();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000,
        // @ts-ignore
        onError: (err: AxiosError<IResponDataFetch>) => {
          if (err.response?.data) {
            const res = err.response.status === 403;

            if (res) {
              handleRevokeToken();
            }
          }
          return;
        },
      },
      mutations: {
        // @ts-ignore
        onError(err: AxiosError<IResponDataFetch>) {
          if (err.response?.data) {
            const res = err.response.status === 403;

            if (res) {
              handleRevokeToken();
            }
          }
          return;
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
