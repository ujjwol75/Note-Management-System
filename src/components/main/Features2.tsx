import React from 'react'
import Image from 'next/image'

export default function Features2() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 my-5 xl:p-7'>
            <div className="flex items-center justify-center col-span-2 order-2 ">
                <div className='relative md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] md:translate-x-10 lg:translate-x-0'>
                    <Image src='/aboutsection.png' alt="image" layout='fill'></Image>
                </div>
            </div>
            <div className='flex flex-col md:pl-5 md:y-5  lg:py-10 lg:pl-10 xl:p-14  text-[#37474F] space-y-6 col-span-2 order-1' >
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-heading  font-bold font-Jost'>Manage Your Notes Access & Read Anywhere</h1>
                </div>
                <div className='text-xs xs:text-sm sm:text-para font-medium  mt-3  font-Inter'>
                    <p className='leading-normal' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                </div>
                <div className='flex mt-6 '>
                    <div className='mx-4'>
                        <Image src="/edit.png" alt="image" width={35} height={35} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost '>List Your Notes In Few Clicks</h1>
                        <p className=" font-medium  mt-3  font-Inter leading-normal ">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/book.png" alt="image" width={35} height={35} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost '>Access It All Over The World</h1>
                        <p className=" font-medium  mt-3  font-Inter leading-normal ">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
