import React from 'react'
import Link from 'next/link'
import {  Ephesis } from "next/font/google"


const ephesis = Ephesis({ subsets: ['latin'], weight: ["400"] })

function Navbar() {
  return (
    <nav className='flex justify-center items-center gap-8 bg-rose-100 h-[5vh] px-10 font-semibold lowercase tracking-widest w-full'>
        <Link href={"/"} className='hover:text-white transition'>
          <h3 className='uppercase tracking-[0.3rem]  whitespace-nowrap border-rose-500 border-r-4 pr-8'>Melisa Labra</h3>
        </Link>
        <div className='flex w-full justify-start'>
            <ul className='flex gap-6 w-full justify-start font-thin text-sm uppercase'>
              <div className='relative group'>
                  <Link className='hover:text-rose-500 transition-all' href={"/about"}>About</Link>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transform scale-x-0 origin-left transition-all duration-300 ease-out group-hover:scale-x-100 "></div>
              </div>
              <div className='relative group'>
                  <Link className='hover:text-rose-500 transition-all' href={"/coloring-books"}>Coloring Books</Link>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transform scale-x-0 origin-left transition-all duration-300 ease-out group-hover:scale-x-100 "></div>
              </div>
              <div className='relative group'>
                  <Link className='hover:text-rose-500 transition-all' href={"/+18"}>+18</Link>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transform scale-x-0 origin-left transition-all duration-300 ease-out group-hover:scale-x-100 "></div>
              </div>

                {/* <Link className='hover:text-rose-500 border-transparent hover:border-b-rose-500 border-b-2 transition-all' href={"/about"}>About</Link>
                <Link className='hover:text-rose-500 border-transparent hover:border-b-rose-500 border-b-2 transition-all' href={"/coloring-books"}>Coloring Books</Link>
                <Link className='hover:text-rose-500 border-transparent hover:border-b-rose-500 border-b-2 transition-all' href={"/+18"}>+18</Link> */}
            </ul>
        </div>

    </nav>
  )
}

export default Navbar