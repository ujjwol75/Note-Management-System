import React from 'react'
import Image from 'next/image'
export default function Goal() {
    return (
        <div className='mx-10 flex  items-center justify-center my-20 gap-10'>
            <div className='w-[30vw] h-[29vw] border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[7vw] w-[7vw] '>
                    <Image src='/insight.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg  lg:text-xl xl:text-[22px] xl:leading-[32px] text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-sm xl:text-base font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            <div className='w-[30vw] h-[29vw] border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[7vw] w-[7vw] '>
                    <Image src='/golf.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg  lg:text-xl xl:text-[22px] xl:leading-[32px] text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-sm xl:text-base font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            <div className='w-[30vw] h-[29vw] border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[7vw] w-[7vw] '>
                    <Image src='/memory.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg  lg:text-xl xl:text-[22px] xl:leading-[32px] text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-sm xl:text-base font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            {/* <div className='w-[30vw] h-[29vw] border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-6 flex flex-col items-center  justify-center space-y-3'>
                <div className='relative h-[83px] w-[83px] '>
                    <Image src='/golf.png' alt='' layout='fill' />
                </div>
                <h2 className='text-[22px] leading-[32px] text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-para font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            <div className='w-[30vw] h-[29vw] border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-6 flex flex-col items-center  justify-center space-y-3'>
                <div className='relative h-[83px] w-[83px] '>
                    <Image src='/memory.png' alt='' layout='fill' />
                </div>
                <h2 className='text-[22px] leading-[32px] text-center font-medium font-Jost  text-black'>Improves your prioritizing skills</h2>
                <p className='text-para font-Inter font-normal  leading-normal text-themetext text-center'>It is a long established fact that a reade will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div> */}

        </div>
    )
}
