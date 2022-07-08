import Router from "next/router";
import Image from "next/image";
const Work = () => {
    return (

        <div className='grid grid-cols-2 md:grid-cols-4 my-10'>
            <div className="flex items-center justify-center col-span-2">
                <div>
                    <Image src='/work.png' alt="image" width={400} height={400} layout='intrinsic'></Image>
                </div>
            </div>
            <div className='flex flex-col p-10 text-[#37474F] space-y-6 col-span-2' >
                <div>
                    <h1 className='text-xl xs:text-2xl sm:text-3xl md:text-heading  font-bold font-Jost'>How it Works</h1>
                </div>
                <div className='text-xs xs:text-sm sm:text-para font-medium  mt-3  font-Inter leading-normal'>
                    <p className="leading-normal">Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion consectetur elit. Vesti at bulum odio aea the dumm the ipsumm suada and consectetur elit.</p>


                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w1.png" alt="image" width={80} height={80} layout='fixed' />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost  '>Write your Notes or Upload It</h1>
                        <p className=" font-medium  mt-3  font-Inter leading-normal ">Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w2.png" alt="image" width={80} height={80} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost '>Categorized It In Related Subjects</h1>
                        <p className=" font-medium  mt-3  font-Inter leading-normal">Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem ipsum dolarorit.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/w3.png" alt="image" width={80} height={80} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost  '>Access Your Notes Anywhere</h1>
                        <p className=" font-medium  mt-3  font-Inter leading-normal">Grursus mal suada faci lisis Lorem ipsum dolarorit, is slorem ipsum dolarorit.</p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Work;