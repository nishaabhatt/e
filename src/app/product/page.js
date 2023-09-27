import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import React from 'react'
import {IoMdHeartEmpty} from "react-icons/io";
import {TbReplace, TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
   <div className='w-full md:py-20  max-w-[90%] px-5 py-10 md:px-10 mx-auto'>

   <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'> 
   
        {/* left col start */}
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
        </div>
        {/* left col end */}

        {/* right col start */}
        <div className='flex-[1] py-3 mt-10'>
            {/* title */}
            <div className='text-[34px] font-semibold mb-2 '>Runaway Kind Of Girl-Duffel Bag </div>
            {/* subtitle */}
            <div className='text-lg font-semibold mb-5 pt-5'>Stone</div>
            {/* price */}
            <div className='flex pt-3'>
                <p className='text-xl font-semibold line line-through'>$30.00</p>
                <p className='text-xl font-semibold pl-5'>$20.00</p>
                <p className='ml-auto text-lg font-medium text-green-500'>20% off</p>
            </div>
            <div className='text-md font-medium text-black/[0.5] '>incl. of taxes</div>
     
           {/* feature */}
            <div className=' product-data-warranty my-10'>
                <div className='product-warranty-data'>
                    <TbTruckDelivery className="warranty-icon hover:bg-green-400" />
                    <p className='hover:cursor-pointer'>Free Delivery</p>
                </div>
                <div className='product-warranty-data'>
                    <TbReplace className="warranty-icon hover:bg-green-400" />
                    <p className='hover:cursor-pointer'>30 days replacement</p>
                </div>
                <div className='product-warranty-data'>
                    <TbTruckDelivery className="warranty-icon hover:bg-green-400" />
                    <p className='hover:cursor-pointer'>Safe Delivery</p>
                </div>
                <div className='product-warranty-data'>
                    <MdSecurity className="warranty-icon hover:bg-green-400" />
                    <p className='hover:cursor-pointer'>Years warranty</p>
                </div>
            </div>

            {/* add to cart */}
            <button className='py-4 mt-10 border w-full font-medium transition-transform border-green-500
            text-black hover:bg-green-500 hover:text-white active:bg-green-950 hover:cursor-pointer'>ADD TO CART</button>
            {/* whishlist button */}
            <button className='py-4  border w-full font-medium mt-2  transition-transform
            active:scale-95 mb-3 border-green-500 text-black hover:bg-green-500 hover:text-white
             active:bg-green-950 hover:cursor-pointer flex items-center justify-center'>
                WHISHLIST <IoMdHeartEmpty size={20} className="pl-1"/></button>

             <div>
                <div className='text-lg font-bold mb-4 mt-4'>Product Details</div>
                <div className='lg:text-md mb-5 mx-20px px-20px lg:mx-10px  '>"Used as overnight travel bag, weekend bag, weekender travel duffels, hospital bag, great choice for overnight or weekend trip, two-days business travel, short journey.
Women duffle bag is made of 100% Genuine Leather, 100% Polyester lining, quality smooth heavy-duty dual brass zippers, comfortable and durable.
PERFECT SIZE & COLOR - One Main Zippered Compartment for Essentials and 2- Front Pockets. Multiple Zipper Pocket along with Phone Holder Inside the Bag. Front Large Capacity Zipper Pocket Helps You Easily Organize all Your Essential Items.
STYLISH - Hand made by professional artisans. It can be used as a travel bag, Boarding Bag Luggage Garment Bag, overnight bag, weekend cabin duffel bag, carry on duffel, etc .
HIGH QUALITY MATERIAL - The Cow hide leather travel bag is made of high quality thick leather, durable lining, with custom hardware, heavy-duty zipper. Dual Magnetic as well as Zipper closure for your security. FITS OVERHEAD & UNDERSEAT - 
This under seat, carry-on luggage bag is ideal for air travel, business trips or excursions. "</div>
             </div>

        </div>
        {/* right col end */}
   </div>   

   <RelatedProducts />

   </div>
  )
}

export default ProductDetails