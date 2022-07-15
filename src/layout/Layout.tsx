import React from 'react'
import Footer from '../components/main/Footer'
import Navbar from '../components/main/Navbar'

type Props = {
  children: any
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout