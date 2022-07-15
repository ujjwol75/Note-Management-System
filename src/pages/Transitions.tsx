import React from 'react'
import Search from '../components/backend/admin/Search'
import Sidebar from '../components/backend/admin/Sidebar'
import Transition from '../components/backend/admin/transition/Transition'



export default function Transitions() {
    return (
        <div className='flex bg-[#EEF1F8] p-[30px] space-x-[20px]'>

            <Sidebar />
            <div className='space-y-[30px]'>
                <Search />
                <Transition />
            </div>

        </div>
    )
}
