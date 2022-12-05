import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {


 
  return (
    <div className=' bg-slate-700 flex items-center place-content-around p-2'>
    <ul className='flex   w-2/4 place-content-between'>
       <Link href="/"  className='text-slate-300 font-bold text-2xl  hover:text-violet-500'><li>Home</li></Link> 
       <Link href="/projects" className='text-slate-300 font-bold text-2xl  hover:text-violet-500'><li>Projects</li></Link> 
       <Link href="/education" className='text-slate-300 font-bold text-2xl  hover:text-violet-500'><li>Eduction</li></Link> 
       <Link href="/skills" className='text-slate-300 font-bold text-2xl  hover:text-violet-500'><li>Skills</li></Link> 
    </ul>

   <Image width="100" height="100" className='w-10 bg-slate-400 rounded-full' src="https://avatars.githubusercontent.com/u/107991675?v=4" alt="img" />

    </div>
  )
}




export default Navbar
