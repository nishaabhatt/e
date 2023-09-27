import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FiDivideCircle } from 'react-icons/fi';

import CartItem from "@/components/CartItem"

const Cart = () => {
  return (
    <div className='w-full md:py-20  py-20'>
        <div className='container mx-auto px-15 lg:px-10'>
            <h2 className='max-w-xl mx-auto text-center text-3xl lg:text-4xl font-bold py-10'>Shopping Cart</h2>
           
           <div className='flex flex-col lg:flex-row gap-12 py-10'>
            <div className='flex-[1]'>
                <div className='text-lg font-bold'>Cart Items</div>
                
                <CartItem />  
            </div>
     
            <div className='flex-[1]'>
                <div className='text-lg font-bold'>Summary</div>
                <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                    <div className='flex justify-between'>
                        <div className='uppercase text-md md:text-lg font-medium text-black'>Subtotal</div>
                        <div className='text-md md:text-lg font-medium text-black'>$60.00</div>
                    </div>
                    <div className='text-sm md:text-md py-5 border-t mt-5'>
                        abcdbandgsjebbxhabdhjhsnvvhafhbajs
                    </div>
                </div>
                <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium
                transition-transform active:scale-95 mb-3 hover:opacity-75'>Checkout</button>
            </div>

           </div>
        
        </div>
    </div>
  )
}

export default Cart