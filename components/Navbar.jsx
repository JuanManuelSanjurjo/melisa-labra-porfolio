"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNavLinks } from '@/lib/nav-links'

function Navbar() {
  const pathname = usePathname()
  const [navOpen, setNavOpen]= useState(true)

  useEffect(()=> {
    setNavOpen(false)
  },[pathname])

  return (
    <>
    <nav className={`${navOpen ? "flex flex-col h-full top-0 fixed " : "hidden"} slideNav z-10 md:flex  md:pt-0 md:flex-row justify-center md:items-center gap-8 bg-rose-100 md:h-[5vh] px-10 font-semibold lowercase tracking-widest w-full`}>
    {/* <nav className={`flex justify-center items-center gap-8 bg-rose-100 h-[5vh] px-10 font-semibold lowercase tracking-widest w-full`}> */}

        <Link href={"/"} className='hover:text-white transition' >
          <h3 className='uppercase tracking-[0.3rem] whitespace-nowrap border-rose-500 border-r-4 pr-8 '>Melisa Labra</h3>
        </Link>
        <div className='flex w-full justify-start'>
            <ul className='flex flex-col md:flex-row  gap-6 w-full justify-start font-thin text-sm uppercase'>
              {
                mainNavLinks.map((tab,i) => (
                  <div key={i} className='relative group'>
                  <Link className='hover:text-rose-500 transition-all' href={tab.href}>
                    <span className={pathname == tab.href ? "text-rose-500": ""}>
                      {tab.name}
                    </span>
                  </Link>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transform scale-x-0 origin-left transition-all duration-300 ease-out group-hover:scale-x-100 "></div>
              </div>
                ))
              }
              
            </ul>
        </div>

    </nav>
    <button className='menuBtn md:hidden fixed right-4 top-7 bg-white rounded-lg border-2 shadow-lg border-rose-500 p-3 leading-3 z-10 text-rose-500 font-extrabold'
      onClick={(e) => setNavOpen(!navOpen)}
    >&#9776;</button>
    </>
  )
}

export default Navbar