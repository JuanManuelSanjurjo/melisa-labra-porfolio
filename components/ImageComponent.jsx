"use client"
import Image from "next/image"
import { useRef, useState, Suspense } from "react";
import ImageSkeleton from "./imageSkeleton";

function ImageComponent({img, style}) {
  const ref = useRef(null);

  function handleImageOpen(e,img) {
    e.preventDefault()
    const dialog = ref.current;
    if (dialog){
      dialog.showModal()
    }
}
function handleClose(e){
  const dialog = ref.current
  if(e.target === dialog && dialog.open){
    dialog.close()
  }
}

  return (
    <>
    <Suspense fallback={<ImageSkeleton />}>

        <Image 
            src={img.src} 
            alt={img.alt} 
            title={img.src}
            width={400}
            height={400}
            className={`w-full h-full rounded-sm hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-800 transition ${style}`}
            placeholder="blur"
            blurDataURL="LEHLk~WB2yk8pyo0adR*.7kCMdnj"
            onClick={(e)=> handleImageOpen(e,img.src)}
        />
    </Suspense>
     <dialog ref={ref} className='scaleIn  bg-transparent backdrop:opacity-50 backdrop:bg-black outline-none'
          onClick={handleClose}>
        <Image 
              src={img.src} 
              alt={img.alt} 
              width={400}
              height={400}
              className='w-auto h-auto max-h-[90vh] max-w-[90vw] '
            />
      </dialog>
    </>
  )
}

export default ImageComponent