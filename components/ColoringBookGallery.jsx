import React from 'react';
import ImageComponent from "@/components/ImageComponent";
import { getColoringBookImages } from "@/utils/getColoringBookImages";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function ColoringBooksGallery({subpath, bookName}) {

  const images = getColoringBookImages(subpath, bookName);

  return (
    <>
      <div>
        <h1 className="pt-12 md:pt-0 text-3xl col-start-2 text-center m-10  ">{bookName}</h1>
      </div>
      <section className="container m-auto h-[95vh]">
        <div className= "pb-12 md:pb-0  columns-1 md:columns-2 lg:columns-3 gap-2 justify-center items-center">
          {images.map((img) => (
            <div
              key={img.index}
              className={twMerge("h-full w-full grid justify-center items-center mb-2 gap ", "imageFadeIn")}
            >
              <ImageComponent img={img} style={"border-slate-900 border-[1px]"} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default React.memo(ColoringBooksGallery);

