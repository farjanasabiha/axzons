"use client";
import { useState } from "react";
import { MenuIcon, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "../../hooks/use-media-query";
import Image from "next/image";

import Button from "../Button";

import { DrawerContent, HeaderDrawer } from "../core/drawer/vaul-header";

const items = [
  {
    id: 1,
    classname: "bg-gradient-to-l from-red-400 to-orange-500",
  },
  {
    classname: "bg-gradient-to-r from-blue-300 to-blue-800",
    id: 2,
  },
  {
    classname: "bg-gradient-to-tl from-amber-500 to-yellow-400",
    id: 3,
  },
];

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <div className="  sticky bg-white border-b border-gray-200">
        <header className="flex   mx-auto container     shadow-sm  justify-between   items-center p-2 md:p-2  ">
          <Image
            src="/logo.svg"
            alt="logo"
            className="cursor-pointer w-24 h-auto lg:w-28 xl:w-32 2xl:w-36"
            width={100}
            height={100}
            priority
          />

          {/* {isDesktop && (
              <ul className="  flex   font-medium space-x-10">
                <li className=" cursor-pointer text-lg ">Service</li>
                <li className=" cursor-pointer text-lg">Portfolio</li>
                <li className=" cursor-pointer text-lg">Products</li>
                <li className=" cursor-pointer text-lg">Contact</li>
              </ul>
            )} */}

          <a
            href="#contact"
            className="group text-sm border   border-white cursor-pointer slide-anime px-5  py-2 md:py-3 rounded-full    bg-primary   shadow-2xs text-black space-x-2   flex justify-between items-center font-semibold "
          >
            <span className=" text-white">Get Care Now</span>
            <div className="group-hover:translate-x-2 transition-all">
              <ArrowRight className=" text-white" />
            </div>
          </a>

          {/* {!isDesktop && (
              <HeaderDrawer
                open={headerOpen}
                setOpen={setHeaderOpen}
                drawerBtn={() => {
                  return (
                    <button className=" cursor-pointer">
                      <MenuIcon />
                    </button>
                  );
                }}
              >
                <DrawerContent>
                  {!isDesktop && (
                    <div className="flex justify-center w-full absolute bottom-1 left-0 ">
                      <div className=" w-16 h-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4" />
                    </div>
                  )}
                  <div className="container mx-auto  gap-4">
                    <div className="flex justify-between items-center border-b">
                      {isDesktop && (
                        <button
                          className="flex cursor-pointer justify-start p-2 mb-2 rounded-md dark:bg-white dark:text-black bg-black text-white"
                          onClick={() => setHeaderOpen(false)}
                        >
                          <X />
                        </button>
                      )}
                      <h1 className="mx-auto text-2xl">UI-LAYOUT</h1>
                    </div>
                    <div className="flex justify-between  py-2">
                      <nav className="flex gap-8">
                        <ul className="xl:text-2xl text-lg space-y-2 xl:space-y-4 font-semibold uppercase  pr-8">
                          <li>
                            <Link
                              href="/"
                              className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/components"
                              className="relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                            >
                              Components
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/layouts"
                              className="relative flex gap-2 items-center after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                            >
                              Layouts
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/templates"
                              className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                            >
                              Templates
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/open-source"
                              className="relative flex items-center gap-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                            >
                              Open Source
                            </Link>
                          </li>
                        </ul>
                      </nav>

                      <div className="grid grid-cols-3 gap-4 py-4 pr-20 w-full">
                        <>
                          {items.map((item) => (
                            <figure
                              key={item.id}
                              className={`${item.classname} inline-block group w-full xl:h-52 h-full relative rounded-md `}
                            ></figure>
                          ))}
                        </>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </HeaderDrawer>
            )} */}
        </header>
      </div>
    </>
  );
}
