import React from 'react';
import Navbar from '../components/frontend/main/Navbar';
import Courses from '../components/frontend/main/Courses';
import Footer from '../components/frontend/main/Footer';
import Notecover from '../components/frontend/notes/Notecover';
export default function Notes() {
    return (
        <div>
            <Notecover detail="Notes" />
            <Courses />
        </div>
    )
}
