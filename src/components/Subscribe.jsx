import React from 'react'

const Subscribe = () => {
  return (
    <div className='max-w-[90%] h-[15rem] bg-pink-200 pb-[20rem] ml-20 mr-20 '>
        <div className="bg-pink-100 bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-pink-300 min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl
             py-8 sm:px-8 px-2 grid place-items-center gap-3 mb-[10rem]">
              <h2 className="bg-pink-200 text-black p-2 rounded-md">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</h2>
               <input  type='text' name='email'placeholder='Email...' required className='p-3 my-2 border-gray-400' />
               <button className='p-3 border bg-blue-400 border-blue-700'>Submit</button>
            </div>
          </div>
    </div>
  )
}

export default Subscribe