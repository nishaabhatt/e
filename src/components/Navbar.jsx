'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi';
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = ({toggleSidebar}) => {

  const list= {
   cat:[ 
    {
      "cat1": "abc",
    },
    {
      "cat2": "abfc",
    },
    {
      "cat3": "abdsac",
    },
    {
      "cat4": "ac",
    }
  ]
}

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='hidden lg:block pt-5'>
        <div className='container '>
            <div className='hidden md:flex w-fit gap-12 mx-auto font-medium py-4 text-blackish '>

               <Link className='navbar__link font-bold relative' href='#'>HOME</Link>

               <button onClick={() => setIsOpen((prev) => !prev)}>
               <Link className='navbar__link font-bold ' href='#'>CATEGORIES
               {!isOpen ? (<BiChevronDown className='text-lg  inline-block' />): (
                <BiChevronUp className='text-lg  inline-block' />
               )}
               </Link>
               {isOpen && (
                <div className='bg-white min-w-[200px] px-2 py-2 text-black
                shadow-xl absolute top-20'>
                  {list.cat.map((item,i) => (
                    <div key={i}>
                      <h2 className='hover:text-blue-900 hover:shadow-lg hover:underline'>{item.cat1}</h2>
                      <h2 className='hover:text-blue-900 hover:shadow-lg hover:underline' >{item.cat2}</h2>
                      <h2 className='hover:text-blue-900 hover:shadow-lg hover:underline'>{item.cat3}</h2>
                      <h2 className='hover:text-blue-900 hover:shadow-lg hover:underline'>{item.cat4}</h2>
                    </div>
                  ))}
                </div>
               )}
               </button>
               
               
               <Link className='navbar__link font-bold relative' href='mencat'>MEN'S</Link>
               <Link className='navbar__link font-bold relative' href='womens'>WOMEN'S</Link>
               <Link className='navbar__link font-bold relative' href='#'>JWELLERY</Link>
               <Link className='navbar__link font-bold relative' href='#'>PERFUME</Link>
               <Link className='navbar__link font-bold relative' href='#'>COLLECTIONS</Link>
               <Link className='navbar__link font-bold relative' href='#'>HOT OFFERS</Link>

            </div>
            <div className='md:hidden  text-[24px]' onClick={toggleSidebar} >
        <GiHamburgerMenu />
      </div>
        </div>
    </div>
  )
}

export default Navbar