import React from 'react'
import Image from 'next/image'
import Link from "next/link";
const Mystack = () => {
  return (
    <div className=' px-5 lg:px-[15vw]'>
      <div className='text-center'>
        <div className='text-2xl'>My Tech Stack</div>
        <div>Technologies I've been working with recently</div>
      </div>
      <div className='flex justify-center items-center md:flex-col'>
        <div className='flex md:flex-col justify-center items-center'>
          <div className='flex justify-evenly flex-wrap md:w-[77vw]'>
            <img className='p-[10px] h-[80px] w-[80px]' src="/html.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/css.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/bootstrap.png" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/tailwind.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/js-official.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/react.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/nextjs-icon.png" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/node.webp" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/express.png" alt="" srcset="" />
          </div>
        </div>
        <div className='flex md:flex-col justify-center items-center'>
          <div className='flex justify-evenly flex-wrap'>
            <img className='p-[10px] h-[80px] w-[80px]' src="/postman.png" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/mongodb.png" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/github.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/github-fill.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/nextjs-icon.png" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/js-official.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/nextjs-icon.png" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/js-official.svg" alt="" srcset="" />
            <img className='p-[10px] h-[80px] w-[80px]' src="/js-official.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mystack