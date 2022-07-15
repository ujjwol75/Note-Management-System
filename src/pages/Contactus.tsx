import React from 'react'
import Navbar from '../components/frontend/main/Navbar'
import Notecover from '../components/frontend/notes/Notecover'
import Footer from '../components/frontend/main/Footer'
import Drop from '../components/frontend/contact/Drop'
export default function Contactus() {
    return (
        <div>
            <Navbar />
            <Notecover detail="Contact us" />

            <Drop />
            <Footer />
        </div>
    )
}

