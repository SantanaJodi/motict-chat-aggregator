import { AxiosError } from "axios";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
export const QueryClientProviderContext: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000,
        // @ts-ignore
        onError: (err: AxiosError<IResponDataFetch>) => {
          console.log(err, "<<< iki error coba");
          if (err.response?.data) {
            console.log(err, "<< error");
          }
          return;
        },
      },
      mutations: {
        // @ts-ignore
        onError(err: AxiosError<IResponDataFetch>) {
          if (err.response?.data) {
            console.log("iki error bruh");
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
