import React from 'react';
import Search from '../components/backend/admin/Search';
import Sidebar from '../components/backend/admin/Sidebar';
import Readerlist from '../components/backend/admin/readers/Readerlist';


export default function Readers() {
    return (
        <div className='flex bg-[#EEF1F8] p-[30px] space-x-[20px]'>

            <Sidebar />
            <div className='space-y-[30px]'>
                <Search />
                <Readerlist />
            </div>

        </div>
    )
}
