"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Adult() {
  const [isAdult, setIsAdult] = useState(false)
  const router = useRouter()

  function handleSubmit(e){  
    e.preventDefault();

    if(isAdult && e.target.close){
      e.target.close()
    }else{
      router.push("/")
    }
  }

  useEffect(()=> {
    dialog.showModal()
  },[])


  return (
   <section className='container m-auto h-[95vh] '>
    {isAdult ?
      <div className='grid grid-cols-3 h-full justify-center items-center'>
          PERMITIDO
      </div>
      :
      <div className='h-full flex justify-center items-center '>
        <dialog id='dialog' className='w-3/6 h-3/6 bg-rose-400 rounded-md shadow-xl shadow-rose-500 backdrop:bg-rose-500 backdrop:opacity-50'>
            <form onSubmit={handleSubmit}  className='flex flex-col justify-center items-center gap-4 h-full'>
                <h3>Are you 18+?</h3>
                <div className='flex justify-around items-center gap-4'>
                  <button type='button' onClick={()=> setIsAdult(true)} className='bg-rose-300 rounded-md px-8 py-2 hover:bg-rose-500 shadow-xl shadow-rose-500 transition'>Yes</button>
                  <button type='button' onClick={()=> setIsAdult(false)} className='bg-rose-300 rounded-md px-8 py-2 hover:bg-rose-500 shadow-xl shadow-rose-500 transition'>No</button>
                </div>
                  <button type='submit' className='bg-rose-300 rounded-md px-8 py-2 hover:bg-rose-500 shadow-xl shadow-rose-500 transition'>Submit</button>
            </form>
        </dialog>
      </div>
    }
    </section>
  )
}

export default Adult