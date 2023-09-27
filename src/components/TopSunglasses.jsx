"use client"
import React,{useState} from 'react'
import Link from 'next/link'

const product = {
  
  heading: {
    title:"Women's Collections",
  },

 items:[
  {
    id:1,
    img: '/jwellery1.jpeg',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top rating",
  href:"/",
  },
  {
    id:2,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "highest rated",
    href:"/",
  },
  {
    id:3,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "top trending",
    href:"/",
  },
  {
    id:4,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "bestseller",
    href:"/",
  },
  {
    id:5,
    img: '/eyeWear1.webp',
    heading: "Product name",
    p1: "$20.00",
    p2: "$25.00",
    p3: "20% off",
    category: "highest rated",
    href:"/",
  },
 
 
]
}



const TopSunglasses = () => {


  return (
    <div className='w-full max-w-[90%] px-5 py-10 md:px-10 mx-auto'>
        <h2 className='max-w-xl mx-auto text-center text-3xl lg:text-4xl font-bold py-10'>
            Top  Trending Sunglasses </h2>

        

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-14
         px-5 md:px-0'>
   
          {product.items.map((item,id) => (
            <Link key={item?.id} href={item.href} className='transform overflow-hidden bg-white duration-300 hover:scale-105 
            cursor-pointer'>
              <img src={item?.img} className='w-full h-[280px] rounded-full' alt="" />
               <div className='p-4 text-black/[0.9]'>
                 <h2 className='text-lg font-medium'>{item?.heading}</h2>
                 <div className='flex items-center text-black/[0.5]'>
                   <p className='mr-2 text-lg font-semibold'>{item?.p1}</p>
                   <p className='text-base font-medium line-through'>{item?.p2}</p>
                   <p className='ml-auto text-base font-medium text-green-500'>{item?.p3}</p>
                 </div>
               </div>
            </Link>
          ))}
        
        </div>
    </div>
  )
}

export default TopSunglasses