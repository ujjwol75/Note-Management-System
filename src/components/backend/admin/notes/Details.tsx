import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Eye from '../../svg icons/Eye'
import Save from '../../svg icons/Save'
import Dollar from '../../svg icons/Dollar'
import Authorprofile from '../Authorprofile'

const notedetails = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


export default function Details() {
    return (
        <div className='p-4 h-[662px] w-full bg-white rounded-lg font-Inter text-[15px] ' >

            {/* Heading  */}
            <div className='w-full h-[40px] bg-theme font-medium text-white rounded-xl flex items-center justify-between px-10 '>
                <div className='flex items-center'>
                    <Link href="Dashboard">
                        <h2 className='text-[#F0F0F0]'>Notes </h2>
                    </Link>
                    <div className=' mx-2 w-2 h-2  bg-white rounded-[50%]'></div>
                    <span>Note details</span>
                </div>
                <div className='flex space-x-10'>
                    <div className='flex items-center'>
                      <Dollar />
                        See transistions
                    </div>
                    <div className='flex items-center'>
                        <Save />
                        Save
                    </div>
                    <div className='flex items-center  '>
                            <Eye />
                        <Link href='ViewNotes' className='cursor-pointer'>
                        View Note
                        </Link>
                    </div>
                </div>
            </div>

            {/* input fields  */}
            <div className=' grid grid-cols-4 gap-5 font-normal my-5'>
                <div>
                    <p>Note title</p>
                    <input type="text" placeholder='Physics note' className='input-dashboard' disabled />
                </div>
                <div>
                    <p>Price  of Note</p>
                    <input type="text" placeholder='Rs 2000' className='input-dashboard' disabled />
                </div>
                <div>
                    <p>Duration of Note</p>
                    <input type="text" placeholder='lifetime' className='input-dashboard' disabled />
                </div>
                <div>
                    <p>Note comission</p>
                    <input type="text" placeholder='50% of Note price - Rs 1,000' className='input-dashboard' disabled />
                </div>
                <div>
                    <p>Category</p>
                    <input type="text" placeholder='Science' className='outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3' disabled />
                </div>
                <div>
                    <p>Status</p>
                    <input type="text" placeholder='Pending' className='outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3' disabled />
                </div>
                <div>
                    <p>Sales Count</p>
                    <input type="text" placeholder='04 sales    ' className='outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3' disabled />
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='font-normal'>Note Description</h2>
                    <textarea name="" id="" placeholder={notedetails} className=' p-5 w-[529px] h-[357px] border-[1px] border-[#E0E0E0] rounded-lg' disabled ></textarea>
                </div>
                <Authorprofile />
            </div>
        </div>

    )
}
