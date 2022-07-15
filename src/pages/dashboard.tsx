import React from 'react';
import Sidebar from '../components/backend/admin/Sidebar'
import Search from '../components/backend/admin/Search';
import Notes from '../components/backend/admin/Notes'
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
