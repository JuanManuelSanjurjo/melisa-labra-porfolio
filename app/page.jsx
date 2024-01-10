"use client"
import Image from 'next/image'
import { useState, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Swiper, SwiperSlide } from 'swiper/react';


const images = [
  {index: "1" , url: "/img/covers/Africa's big five animals mockup.jpg" },
  {index: "2" , url: "/img/covers/color me beautiful mockup png.png" },
  {index: "3" , url: "/img/covers/color me beautiful mockup.jpg" },
  {index: "4" , url: "/img/covers/coloring hi hop mockup png.png" },
  {index: "5" , url: "/img/covers/coloring hi hop mockup.jpg" },
  {index: "6" , url: "/img/covers/36455.jpg" },
  {index: "7" , url: "/img/covers/coloring stories mockup.jpg" },
  {index: "8" , url: "/img/covers/Coloring to the rhythm of HIP HOP.png" },
  {index: "9" , url: "/img/covers/guyanese in trasition mockup.jpg" },
  {index: "10" , url: "/img/covers/honey lips mockup.jpg" },
  {index: "11" , url: "/img/covers/Coloring Stories Chilling Tales.png" },
]

export default function Home({imagesDb}) {
  const [image, setImage] = useState({});
  const ref = useRef(null);

  function handleImageOpen(e,img, index) {
    console.log(imagesDb)
    e.preventDefault()
    const dialog = ref.current;
    if (dialog){
      setImage({img,index})
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
    <div  className='container m-auto mt-10 sm:columns-1 md:columns-2 lg:columns-3  gap-2 h-full  justify-center items-center place-items-center'>
{/* grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
     
        {/* PARA HACERLO CON SWIPER JS */}
      {/* <dialog ref={ref} className='scaleIn  bg-transparent backdrop:opacity-50 backdrop:bg-black outline-none'
          onClick={handleClose}>
          <Swiper 
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            >

          {
            images.map(img => (
              <SwiperSlide key={img.index}>
                  <Image 
                  src={img.url} 
                  alt={img.index} 
                  width={400}
                  height={400}
                  className='w-full h-full rounded-sm bg-rose-100 hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-800 transition'
                  placeholder="blur"
                  blurDataURL="LEHLk~WB2yk8pyo0adR*.7kCMdnj"
                  onClick={(e)=> handleImageOpen(e,img.url, img.index)}
                />
              </SwiperSlide>
            ))
          }


          </Swiper>

      </dialog>
       */}

      <dialog ref={ref} className='scaleIn  bg-transparent backdrop:opacity-50 backdrop:bg-black outline-none'
          onClick={handleClose}>
        <Image 
              src={image.img} 
              alt={image.index} 
              width={400}
              height={400}
              className='w-auto h-auto max-h-[90vh] max-w-[90vw]'
            />
      </dialog>
       
      {
        images.map(img => (
          <div key={img.index} className={twMerge('h-full w-full grid justify-center items-center mb-2 ', 'imageFadeIn')}>
            {/* <img loading="lazy" src={img.url} alt={img.index} className='w-full h-full bg-rose-300 hover:scale-105 hover:cursor-pointer hover:shadow-xl shadow-black transition'  ></img> */}
            <Image 
              src={img.url} 
              alt={img.index} 
              title={img.url}
              width={400}
              height={400}
              className='w-full h-full rounded-sm bg-rose-100 hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-800 transition'
              placeholder="blur"
              blurDataURL="LEHLk~WB2yk8pyo0adR*.7kCMdnj"
              onClick={(e)=> handleImageOpen(e,img.url, img.index)}
            />
          </div>
        ))
      }

    </div>
  )
}
