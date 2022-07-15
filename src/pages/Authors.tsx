import React from 'react';
import Search from '../components/backend/admin/Search';
import Sidebar from '../components/backend/admin/Sidebar';
import Authorlist from '../components/backend/admin/author/Authorlist';


export default function Authors() {
    return (
        <div className='flex bg-[#EEF1F8] p-[30px] space-x-[20px]'>

            <Sidebar />
            <div className='space-y-[30px]'>
                <Search />
                <Authorlist />
            </div>

        </div>
    )
}
