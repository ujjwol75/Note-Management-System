import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/frontend/MainLayout'
import DashboardLayout from '../components/backend/DashboardLayout'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    // <MainLayout>
    // <DashboardLayout >
    <Component {...pageProps} />
    // </DashboardLayout >
    // </MainLayout>  
    ) 
}
export default MyApp
