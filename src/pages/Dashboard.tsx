import React from 'react';
import Sidebar from '../components/backend/Sidebar'
import Search from '../components/backend/Search';
import Notes from '../components/backend/Notes'
export default function dashboard() {
    return (
        <div className='flex bg-[#EEF1F8] p-[30px] space-x-[20px]'>
            <Sidebar />
            <div className='space-y-[30px]'>
                <Search />
                <Notes />
            </div>

        </div>

    )
}
