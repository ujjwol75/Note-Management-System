import React, { Children } from 'react'
import Footer from '../components/main/Footer'
import Navbar from '../components/main/Navbar'
import Main from '../pages/Main'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div>
        <Navbar />
          <Main>{Children}</Main>
        <Footer />
    </div>
  )
}

export default Layout