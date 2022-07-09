import React from 'react'
import Image from 'next/image'
import ButtonComponent from './ButtonComponent';
type Props = {
    height: any,
}

export default function Coverpage({ height }: Props) {
    return (
        <div className='relative h-[400px]  sm:h-[550px] md:h-[650px] lg:h-[715px] w-full' >
            <Image src='/cover.png' alt='cover image' className='brightness-50 object-cover object-bottom' height={height} width={1580} layout='fill' />

            <div className='absolute w-full h-full top-0 left-0 space-y-3 sm:space-4 md:space-y-5 lg:space-y-6 lg:-mt-14 flex flex-col items-center justify-center'>
                <div className='text-2xl xs:text-3xl sm:text-4xl md:5xl  lg:text-[50px]  font-bold text-white font-Jost not-italic text-center'>
                    <p className='leading-[45px] lg:leading-[70px]'>We Store Notes and Spread </p>
                    <p >All Over the World </p>
                </div>
                <div className=' px-5 xs:px-10 sm:px-16 md:px-24  text-center'>
                    <p className='text-xs sm:text-sm md:text-base font-medium   font-Inter  text-[#DDDDDD]  px-2  xs:px-7 sm:px-10 md:px-16 lg:px-56 xl:px-64 leading-relaxed' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                <div className='flex flex-col items-center text-[16px] leading-[23px] justify-center space-y-4 sm:flex-row sm:space-y-0 space-x-6'>
                    <div className='cursor-pointer'>
                        <button className='blue-btn w-[168px]  hidden md:block '> Become Publisher</button>
                        <button className='small-blue-btn rounded-lg text-sm md:hidden'> Become Publisher</button>
                    </div>
                    <div className='cursor-pointer'>
                        <button className='transparent-btn w-[168px] hidden md:block'>Read Notes</button>
                        <button className='small-transparent-btn rounded-lg text-sm md:hidden'>Read Notes</button>
                    </div>
                </div>


            </div>
            {/* <div className='absolute  top-96 left-1/2 flex lg:hidden'>
                <Image src='/frame1.png' height={120} width={120} />
                <Image src='/frame2.png' height={120} width={120} />
                <Image src='/frame3.png' height={120} width={120} />
                <Image src='/frame4.png' height={120} width={120} />

            </div> */}

        </div >
    )
}
