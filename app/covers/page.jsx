import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { getColoringBookImages } from '@/utils/getColoringBookImages';


export const metadata = {
  title: 'Book Covers',
  description: 'Book Covers - Melisa Labra',
}


function CoversPage() {
  const images = getColoringBookImages("covers", "" )

  return (
    <div className='flex min-h-[80vh] mt-4 items-center justify-center '>
        <div className='flex w-full justify-center text-center flex-wrap'>
        {
          images.map((book, i) => (
              
                    <Image key={i}
                        src={book.src}
                        width={350}
                        height={350}
                        alt={book.alt}
                        className=' w-auto h-auto'
                    />
       
            ))
        }
        </div>
    </div>
  )

}

export default CoversPage