"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNavLinks } from '@/lib/nav-links'

function Navbar() {
  const pathname = usePathname()
  return (
    <nav className='flex justify-center items-center gap-8 bg-rose-100 h-[5vh] px-10 font-semibold lowercase tracking-widest w-full'>
        <Link href={"/"} className='hover:text-white transition'>
          <h3 className='uppercase tracking-[0.3rem] whitespace-nowrap border-rose-500 border-r-4 pr-8 '>Melisa Labra</h3>
        </Link>
        <div className='flex w-full justify-start'>
            <ul className='flex gap-6 w-full justify-start font-thin text-sm uppercase'>
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
  )
}

export default Navbar