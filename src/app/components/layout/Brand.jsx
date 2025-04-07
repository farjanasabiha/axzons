import React from "react";
import Image from "next/image";

export default function Brand() {
  return (
    <div className="w-full text-5xl py-8 my-10  border-y inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
      <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <Image src="/logos/logos.png" height={120} width={120} alt="brand" />
        </li>
        <li>
          <Image src="/logos/logo.webp" height={120} width={120} alt="brand" />
        </li>
        <li>
          <Image
            src="/logos/logo-color.png"
            height={120}
            width={120}
            alt="brand"
          />
        </li>
        <li>
          <Image
            src="/logos/Logo_Img.png"
            height={120}
            width={120}
            alt="brand"
          />
        </li>
        <li>
          <Image
            src="/logos/icon-512x512.png"
            height={120}
            width={120}
            alt="brand"
          />
        </li>
      </ul>
    </div>
  );
}
