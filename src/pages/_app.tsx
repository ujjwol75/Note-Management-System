import "../../styles/globals.css";
import type { AppProps } from "next/app";
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardLayout from "../Layouts/DashboardLayout";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if (
    [`/Dashboard`, `/Authors`, `/Authors/Authordetails/[authorID]`, `/Readers`, `/Transitions`].includes(
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
=======
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
>>>>>>> ujjwol
}

export default MyApp;
