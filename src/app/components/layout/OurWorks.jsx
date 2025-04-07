import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
function PortfolioItem({ img, title, text, color, link, includeImage }) {
  return (
    <Link href={link} passHref>
      <div className="w-[90%]] h-[480px] group mx-auto  p-2 bg-white  border overflow-hidden rounded-md  text-black ">
        <figure className="w-full h-80 group-hover:h-72 transition-all duration-300  bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
          <div
            style={{
              background:
                "linear-gradient(123.9deg, #00597f 1.52%, rgba(0, 0, 0, 0) 68.91%)",
            }}
            className="absolute top-0 left-0 w-full h-full  group-hover:opacity-100 opacity-0  transition-all duration-300"
          ></div>
          <Image
            src={img}
            alt="shoes"
            width={600}
            height={600}
            className="absolute -bottom-1     group-hover:-bottom-5 right-0   group-hover:border-4 w-full border-4 group-hover:border-[#76aaf82d] rounded-lg  object-contain transition-all duration-300"
          />
        </figure>
        <article className="  p-4 space-y-2">
          <h1 className="text-xl font-semibold capitalize">{title}</h1>
          <p className="text-base leading-[120%]">
            Form a legal entity, issue stock, and start accepting payments.
          </p>
          <a
            href="#"
            className=" text-base   text-secondary font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  "
          >
            View Live Project
            <span>
              <ChevronRight />
            </span>
          </a>
        </article>
      </div>
    </Link>
  );
}

function OurWorks() {
  return (
    <section className="py-16 md:py-30 bg-white text-zinc-900">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
          <div className="w-2/3">
            <h1 className="  text-2xl md:text-4xl font-normal text-left  text-black">
              Our Recent Work
            </h1>
          </div>
          <div className="w-1/3 text-end">
            <Link href="/projects" className="">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  bg-gradient-to-r  from-[#f6f7ff] to-[#f5f6ff] ] border-2  border-secondary  bg-transparent px-6 font-medium  text-black transition-all duration-100 [box-shadow:5px_5px_rgb(38_51_129)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(38_51_129)] ">
                See All
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4">
          <div className="lg:col-span-2">
            <PortfolioItem
              img="/images/hariExpress.jpg"
              title="Haircut Express LLC Website"
              text="Haircut Express LLC – Fast, Stylish, and Affordable Haircuts for Everyone!"
              link="https://haircutexpressllc.com/"
              includeImage={true}
            />
          </div>
          <div className="lg:col-span-1">
            <PortfolioItem
              img="/images/easymart.png"
              title="Easy Mart Online Store"
              text="Easy Mart is an e-commerce platform offering a wide variety of products, from electronics to household items."
              link="https://easymart.online/"
              includeImage={false}
            />
          </div>

          <div className="lg:col-span-1">
            <PortfolioItem
              img="/images/nprint.jpg"
              title="Print and Graph"
              text="Print & Graph – High-Quality Printing and Stunning Designs, Delivered Fast!"
              link="https://nprintandgraph.com/"
              includeImage={false}
            />
          </div>

        
          {/* <div className="lg:col-span-2">
            <PortfolioItem
              img="/images/axzon.png"
              title="Axzon Homecare"
              text="Axzons Home Care – Compassionate, Reliable, and Personalized Care at Home."
              link="https://axzonshomecare.com/"
              includeImage={true}
            />
          </div> */}

          {/* <div className="lg:col-span-3">
            <PortfolioItem
              img="/images/corsult.png"
              title="Corsult Business Consultancy"
              text="Corsult offers expert business consultancy services, and their website reflects professionalism and trust."
              link="https://corsult.com/"
              includeImage={true}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default OurWorks;
