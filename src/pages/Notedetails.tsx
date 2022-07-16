import React from 'react'
import Sidebar from '../components/backend/admin/Sidebar'
import Details from '../components/backend/admin/notes/Details'
import Search from '../components/backend/admin/Search'

export default function Notedetails() {
    return (
        <div className='flex bg-[#EEF1F8] p-[30px] space-x-[20px]'>


            <Sidebar />
            <div className='space-y-[30px]'>
                <Search />
                <Details />
            </div>

        </div>

    )
}
