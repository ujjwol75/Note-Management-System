import React from 'react';
import Image from 'next/image';

export default function Built() {
    return (
        <div className='my-20 p-28 w-full h-[640px] bg-[#00000005] grid grid-cols-2'>
            <div className='space-y-5 py-24'>
                <h2 className='text-heading2 font-bold font-Jost text-[#37474F]'>Built on Passion and Ingenuity</h2>
                <p className='text-para  font-medium font-Inter leading-normal'>
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.
                </p>
                <div className='space-y-3'>
                    <div className='flex items-center justify-start'>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-[18px] leading-[22px] font-medium font-Inter  '>All the Lorem Ipsum Internet tend to repeat.</p>
                    </div>
                    <div className='flex items-center justify-start '>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-[18px] leading-[22px] font-medium font-Inter  '>It uses a dictionary of Latin words.</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-[18px] leading-[22px] font-medium font-Inter  '>Grursus mal suada faci lisis Lorem ipsum.</p>
                    </div>
                    <div className='flex items-center justify-start '>
                        <div className='relative h-[11.17px] w-[14.66px] mr-3'><Image src='/check.png' alt='check' layout='fill' /></div>
                        <p className='text-[18px] leading-[22px] font-medium font-Inter  '>Lorem ipsum dolarorit more ametion consectetur elit.</p>
                    </div>

                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <div className='relative h-[500px] w-[446px] '>

                    <Image src='/man.png' alt="man" layout='fill' />
                </div>
            </div>
        </div>
    )
}
