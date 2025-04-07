import React from "react";
import Image from "next/image";

export default function Badge() {
  return (
    <section className=" py-8  bg-[#f3fff0]">
      <div className=" flex flex-col  space-y-4 xl:space-y-0 xl:flex-row items-center px-10 space-x-4 container mx-auto max-w-[60%] py-4 border-2  border-primary rounded-xl">
        <Image src={"/Badge.webp"} alt="badge" width={100} height={100} />
        <p className=" text-md ">
          Axzons Home Care is a licensed home care provider that has earned The
          Gold Seal of Approval® from The Joint Commission®. We offer customized
          care plans for each client’s needs so family and friends have greater
          peace of mind knowing their loved ones are receiving the best homecare
          nyc available.
        </p>
      </div>
    </section>
  );
}
