import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

function VideoTitle({title, overview}) {
  return (
    <div className='w-[vw]  absolute text-white pt[18%] p-12 hidden lg:block lg:text-lg'>
      <h1 className='text-3xl mt-9 font-bold hidden lg:block lg:text-lg'>{title} </h1>
      
      <div className='flex mt-8'>
      <button className=' flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
      <CiPlay1 size='24px' className='mr-2' />
       <span className='hidden lg:block lg:text-lg'> Play</span></button>
      <button  className='flex mx-2 item-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'>
      <CiCircleInfo size='24px' className='mr-2'  />
      
        <span className='hidden lg:block lg:text-lg'>Watch More </span></button>
      </div>
    </div>
  )
}

export default VideoTitle;
