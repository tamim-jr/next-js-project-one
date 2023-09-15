
import Image from 'next/image'
import Link from "next/link";
import Navbar from './Components/Navbar/page'

export default function Home() {
  return (
    <main className="">
      <div className="flex min-h-screen flex-col md:flex-row md:gap-10 items-center justify-between p-5 lg:px-[15vw]">
      <div className='md:w-3/5 mb-6 md:mb-0'>
        <h1 className='text-[2rem] leading-[2.5rem] md:text-[3rem] font-bold md:leading-[3.4rem] mb-5 '>
         Create your Website 
        <br /> That's <span className='text-[#5379F6]'>Easy</span>  to <br /> <span className='text-[#5379F6]'>Understand</span>.</h1>
        <p>Making it easy to get ideas about your service will help increase customer interest in your product. That can increase <br /> your sales by 30%.</p>
        <Link href=""><button className='text-md my-5 bg-[#5379F6] text-white rounded-sm px-3 py-3 active:bg-[#1f316b] duration-200'>See Our works</button></Link>
      </div>
      <div className='md:w-2/5'>
        <img className='w-[100%] animate-bounce' src="/hero.png" alt="hero image"/>
      </div>
    </div>

    </main>

  )
}
