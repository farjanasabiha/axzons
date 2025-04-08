import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { MenuIcon, X, ArrowRight } from "lucide-react";

export default function Eligible() {
  return (
    <section className=" py-14">
      <div className=" container mx-auto md:px-8">
        <div className=" space-y-10 md:space-y-0   flex items-center justify-center gap-16 flex-col lg:flex-row">
          <Image
            src={"/homecare-blob.webp"}
            alt="man"
            width={500}
            height={500}
          />

          <div>
            <p className="text-base font-normal text-primary">
              Eligibility Check
            </p>
            <h1 className=" text-2xl md:text-4xl my-5 font-semibold">
              Am i eligible for home care <br /> services?
            </h1>

            <div className="">
              <h3 className=" font-semibold text-xl">
                You are eligible if you:
              </h3>
              <p className=" flex  space-x-2 mt-2 items-center">
                <FaCheckCircle className=" text-primary" />
                <span className="text-gray-400">
                  Have or qualify for Medicaid
                </span>
              </p>
              <p className=" flex  space-x-2 mt-2 items-center">
                <FaCheckCircle className=" text-primary" />
                <span className="text-gray-400">Live in New York</span>
              </p>
              <p className=" flex  space-x-2 mt-2 items-center">
                <FaCheckCircle className=" text-primary" />
                <span className="text-gray-400">
                  Need help with day-to-day activities
                </span>
              </p>
            </div>
            <h3 className="   font-semibold  text-xl mt-4">
              We will walk you through every <br /> step of the process
            </h3>
            <a
              href="#contact"
              className="group text-sm border mt-4  w-fit  border-white cursor-pointer slide-anime px-5  py-2 md:py-3 rounded-full    bg-primary   shadow-2xs text-black space-x-2   flex justify-between items-center font-semibold "
            >
              <span className=" text-white">Apply Today</span>
              <div className="group-hover:translate-x-2 transition-all">
                <ArrowRight className=" text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
