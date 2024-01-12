"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { adultBooks } from '@/lib/nav-links'


function Adult() {
  const [isAdult, setIsAdult] = useState(false)
  const [images, setImages] = useState([])
  const router = useRouter()

  useEffect(()=> {
    dialog.showModal()
  },[]) 

  function handleForm(e){
    const value = e.target.getAttribute('data-value');
    if(value === 'true'){
      setIsAdult(true)
    }else{  
      router.push("/")
    }
  }


  return (
   <section className='container m-auto h-[95vh] '>
    {isAdult ?
        <div className='flex min-h-[80vh] items-center justify-center'>
          <div className='flex justify-center gap-4 text-center'>
          {
            adultBooks.map((book, i) => (
                  <Link key={i} href={book.href} className='flex flex-col justify-start border-slate-900 border-[1px] hover:bg-rose-100  hover:shadow-lg transition-all'>
                      <h1 className='font-bold tracking-wide m-4 '>{book.name}</h1>
                      <Image 
                          src={book.coverSrc}
                          width={400}
                          height={400}
                          alt={book.name}
                          className='object-fill'
                      />
                  </Link>
              ))
          }
          </div>
      </div>
      :
      <div className='h-full flex justify-center items-center '>
        <div className='text-xl bg-rose-400 p-8 rounded-md text-white lowercase cursor-pointer shadow-xl shadow-rose-500 hover:scale-105  transition' onClick={()=> router.push("/")}>
          You should not be here, let&apos;s go back!
        </div>
        <dialog id='dialog' className='scaleIn w-3/6 h-3/6 bg-rose-100 rounded-md  backdrop:opacity-50
            backdrop:bg-black 
          '>
          {/* backdrop:bg-gradient-to-r backdrop:from-rose-400 backdrop:to-orange-300  */}
            <div className='flex flex-col justify-center items-center gap-8 h-full '>
                <h3 className='text-xl'>Are you 18+?</h3>
                <div className='flex justify-around items-center gap-4'>
                  <button type='submit' onClick={handleForm} data-value='true' className='bg-rose-300 rounded-md px-8 py-2 hover:bg-rose-400   transition'>Yes</button>
                  <button type='submit' onClick={handleForm} data-value='false' className='bg-rose-300 rounded-md px-8 py-2 hover:bg-rose-400  transition '>No, let&apos;s go back</button>

                </div>
            </div>
        </dialog>
      </div>
    }
    </section>
  )
}

export default Adult

