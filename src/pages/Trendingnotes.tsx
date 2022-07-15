import React from 'react'
import Navbar from '../components/main/Navbar'
import Notecover from '../components/notes/Notecover'
import Footer from '../components/main/Footer'
import Courses from '../components/main/Courses'

export default function Trendingnotes() {
    return (
        <div>
            <Notecover detail="Trending Notes" />
            <Courses />
        </div>
    )
}
