import React from 'react'
import Image from 'next/image'

const BannerPortion1 = () => {
  return (
    <div className='max-w-[100%] mx-10 px-10 '>
        <div className='container mx-auto px-4'>
            <div className='flex  gap-3  flex-col md:flex-row '>
                <div className='max-w-[100%] md:max-w-[50%]'>
                    <Image src="/banner-1.jpg " className='h-full w-full' alt='' height={550} width={740} />
                </div>
                <div className='max-w-[100%] md:max-w-[50%]'>
                <Image src="/banner-2.jpg" className='h-full w-full' height={550} width={740} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerPortion1
