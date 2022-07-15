import React from 'react';
import Sidebar from '../components/backend/Sidebar'
import Search from '../components/backend/Search';
import Notes from '../components/backend/Notes'
export default function dashboard() {
    return (
        <div className='grid bg-[#EEF1F8] p-[30px] space-x-[20px] md:grid-cols-6 sm:grid-cols-1 lg:grid-cols-5'>
            <div className='md:col-span-1 lg:col-span-1 my-4'>
            <Sidebar />
            </div>
            <div className=' w-full md:col-span-5  lg:col-span-4 overflow-x-auto flex flex-col justify-center' >
          
                <Search />
                <Notes />

                
            </div>
        </div>
    )
}
