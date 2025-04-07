import React from "react";
import Image from "next/image";

function StripeCard({ imageSrc, title, link, icons }) {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-[300px] relative mt-4 h-[400px] group mx-auto dark:bg-black bg-white dark:border-0 border overflow-hidden rounded-xl dark:text-white text-black">
      <figure className="w-full h-full rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          alt="Card image"
          width={600}
          height={600}
          className="h-full w-full scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300"
        />
      </figure>

      <div className="absolute top-0 left-0 opacity-65 w-full h-full transition-all duration-300 bg-gradient-to-b from-[#d5b0f8] to-[#4a226c]"></div>

      <article className="p-4 space-y-2 w-full text-center absolute -bottom-0 group-hover:bottom-3 transition-all duration-300">
        <div className=" flex items-center justify-center">{icons}</div>
        <h1 className="text-3xl text-white font-semibold lead ing-tight text-center capitalize">
          {title}
        </h1>
      </article>
    </div>
  );
}

export default StripeCard;
