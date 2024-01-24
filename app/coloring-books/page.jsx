import React from 'react'
import { coloringNavLinks } from '@/lib/nav-links'
import Image from 'next/image'
import Link from 'next/link'

function ColoringBooksMain() {
  return (
    <div className='pt-12 md:pt-0 flex min-h-[80vh] mt-4 items-center justify-center '>
        <div className='flex w-full justify-center text-center flex-wrap'>
        {
            coloringNavLinks.map((book, i) => (
                <Link key={i} href={book.href} className='flex flex-col justify-start'>
                    <h1 className='font-bold tracking-wide'>{book.name}</h1>
                    <Image 
                        src={book.coverSrc}
                        width={350}
                        height={350}
                        alt={book.name}
                        className=' w-auto h-auto'
                    />
                </Link>
            ))
        }
        </div>
    </div>
  )

}

export default ColoringBooksMain