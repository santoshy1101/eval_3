import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {


 
  return (
    <div className='flex items-center p-2 bg-slate-700 place-content-around'>
    <ul className='flex w-2/4 place-content-between'>
       <Link href="/"  className='text-2xl font-bold text-slate-300 hover:text-violet-500'><li>Home</li></Link> 
       <Link href="/projects" className='text-2xl font-bold text-slate-300 hover:text-violet-500'><li>Projects</li></Link> 
       <Link href="/education" className='text-2xl font-bold text-slate-300 hover:text-violet-500'><li>Eduction</li></Link> 
       <Link href="/skills" className='text-2xl font-bold text-slate-300 hover:text-violet-500'><li>Skills</li></Link> 
    </ul>
    
    <Image src="https://avatars.githubusercontent.com/u/107991675?v=4" height="50" width="50" alt="img" priority className='rounded-full bg-slate-400'/>



    </div>
  )
}




export default Navbar
