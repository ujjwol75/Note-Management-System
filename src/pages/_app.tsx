import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardLayout from "../Layouts/DashboardLayout";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if (
    [`/Dashboard`, `/Authors`, `/Readers`, `/Transitions`].includes(
      appProps.router.pathname
    )
  ) {
    return (
      <QueryClientProvider client={queryClient}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
        <ToastContainer autoClose={1500} />
      </QueryClientProvider>
    );
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer autoClose={1500} />
      </QueryClientProvider>
    );
  }
}

export default MyApp;
