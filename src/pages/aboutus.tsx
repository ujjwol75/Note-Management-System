import React from 'react'
import Notecover from '../components/frontend/notes/Notecover'
import Goal from '../components/frontend/aboutus/Goal'
import Built from '../components/frontend/aboutus/Built'
import Testimonial from '../components/frontend/main/Testimonial'
export default function Aboutus() {
    return (
        <>
            <Notecover detail="About Us" />
            <Goal />
            <Built />
            <Testimonial />

        </>
    )
}
