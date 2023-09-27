import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BannerPortion2 = () => {
  return (
    <>
       <div className='py-20'>
        <div className='container mx-auto px-4'> 
          <div className='flex flex-col md:flex-row gap-2'>
            <div className='max-w-full md:max-w-[50%]'>
                <Link href="#">
                <Image src="/banner-5.webp " className='h-full w-full' alt='' height={550} width={740} />
                </Link>
            </div>
            <div className='max-w-full md:max-w-[50%]'>
                <Link href="#">
                <Image src="/banner-6.webp " className='h-full w-full' alt='' height={550} width={740} />
                </Link>
            </div>
          </div>
          <div className='max-w-[100%]  hover:drop-shadow-xl'>
          <Link href="#">
                <Image src="/banner-7.webp " className='h-[400px] w-full' alt='' height={100} width={740} />
            </Link>
          </div>
        </div>
       </div>
    </>
  )
}

export default BannerPortion2
