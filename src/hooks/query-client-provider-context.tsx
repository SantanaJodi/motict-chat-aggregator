import { AxiosError } from "axios";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthContext } from "./auth-context";
import { toast } from "react-hot-toast";
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

              toast.error("Unauthorized, please login again.");

              return;
            }

            if (err.response.status >= 500) {
              toast.error("Please contact your administrator.");

              return;
            }

            toast.error(err.response.data?.message as string);
          }
          // toast.error("Please contact your administrator.");
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
