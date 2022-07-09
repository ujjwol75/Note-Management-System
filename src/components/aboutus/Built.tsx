import React from 'react';
import Image from 'next/image';

export default function Built() {
    return (
        <div className=' lg:my-20 lg:p-28 w-full full-[640px] bg-[#00000005] grid lg:grid-cols-2'>
            <div className='m-4 xs:m-6 sm:m-8 lg:m-0    space-y-5 lg:py-24'>
                <h2 className='text-2xl sm:text-3xl lg:text-heading2 font-bold text-[#37474F]'>Built on Passion and Ingenuity</h2>
                <p className=' text-sm sm:text-base   font-medium font-Inter leading-[19px]'>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.
                </p>
                <div className='space-y-3'>
                    <div className='flex items-center justify-start'>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-base sm:text-[18px] leading-[22px] font-medium font-Inter  '>All the Lorem Ipsum Internet tend to repeat.</p>
                    </div>
                    <div className='flex items-center justify-start '>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-base sm:text-[18px] leading-[22px] font-medium font-Inter  '>It uses a dictionary of Latin words.</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-base sm:text-[18px] leading-[22px] font-medium font-Inter  '>Grursus mal suada faci lisis Lorem ipsum.</p>
                    </div>
                    <div className='flex items-center justify-start '>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-base sm:text-[18px] leading-[22px] font-medium font-Inter  '>Lorem ipsum dolarorit more ametion consectetur elit.</p>
                    </div>

                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <Image src='/man.png' alt="man" width={446} height={500} layout='intrinsic' />
            </div>
        </div>
    )
}
