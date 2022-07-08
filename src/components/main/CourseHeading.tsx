import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function Courses1() {
    return (
        <div className='flex flex-col items-center lg-space-y-5 xl:space-y-6 my-10 text-[#37474F]'>
            <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-heading  font-bold font-Jost '>Choose Your Course Below</h2>
            <div className='mx-20 sm:mx-24 md:mx-32 lg:mx-40 xl:mx-52'>
                <p className='text-center text-sm sm:px-14 lg:px-36 xl:px-48 font-medium  mt-3  font-Inter leading-normal text text-[#37474F] md:text-base' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            </div>
            <div className='grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-6  md:grid-cols-3 xl:grid-cols-6 gap-5 '>
                <div>
                    <button className='small-blue-btn rounded-lg md:hidden text-xs'>All Exams</button>
                    <button className='blue-btn w-[145px] hidden md:block btn-text'>All Exams</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs '>Computer</button>
                    <button className='blue-outline-btn hidden md:block btn-text'>Computer</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>Mathematics</button>
                    <button className='blue-outline-btn hidden md:block btn-text'>Mathematics</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>Science</button>
                    <button className='blue-outline-btn hidden  md:block btn-text'>Science</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>Economics</button>
                    <button className='blue-outline-btn hidden md:block btn-text'>Economics</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>More Notes</button>
                    <button className='blue-outline-btn hidden md:block'>More Notes</button>
                </div>

            </div>
        </div>
    )
}
