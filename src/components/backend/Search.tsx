import React from 'react'
import Profile from './Profile'

export default function search() {
    return (
        <div className='w-[1136px] h-[60px] p-4 rounded-lg flex item-center justify-between bg-white'>
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder='Search Notes' className='outline-none ' />
            </div>
            <div>

                <Profile />
            </div>


        </div>
    )
}
