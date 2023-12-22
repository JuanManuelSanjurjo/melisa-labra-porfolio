"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

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
      <div className='grid grid-cols-3 h-full justify-center items-center'>
          
          <h1 className='text-3xl col-start-2 text-center'>Content</h1>
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

