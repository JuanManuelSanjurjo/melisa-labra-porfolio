import React from 'react'
import Link from 'next/link'



function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-rose-300 h-[5vh] px-10 font-semibold lowercase tracking-widest rounded-b-xl shadow-lg shadow-rose-400 w-screen'>
        <Link href={"/"} className='hover:text-white transition'
        ><h3 className='tracking-[0.3rem] uppercase whitespace-nowrap border-rose-500 border-r-4 pr-2'>Melisa Labra</h3></Link>
        <div className='flex w-full justify-center'>
            <ul className='flex gap-6 w-full justify-center '>
                <Link className='hover:text-white hover:bg-rose-500 p-2 rounded-md transition' href={"/coloring-books"}>Coloring Books</Link>
                <Link className='hover:text-white hover:bg-rose-500 p-2 rounded-md transition' href={"/about"}>About</Link>
                <Link className='hover:text-white hover:bg-rose-500 p-2 rounded-md transition' href={"/+18"}>+18</Link>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar