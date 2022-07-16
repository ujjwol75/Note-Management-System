import React from 'react'
import Sidebar from '../components/backend/admin/Sidebar'
import Search from '../components/backend/admin/Search'
import Details from '../components/backend/admin/readers/Details'

export default function Authordetails() {
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
