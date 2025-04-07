import React from "react";
import { ArrowRight, MessageSquareMore } from "lucide-react";
import StripeCard from "../core/StipeCard";
import { RiHomeHeartLine } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";
import { FaBedPulse } from "react-icons/fa6";
import { TbHealthRecognition } from "react-icons/tb";

export default function Hero() {
  return (
    <section className="py-[4rem]  bg-white  ">
      <div className="container mx-auto">
        <div className=" mb-10 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-5">
          <StripeCard
            icons={<RiHomeHeartLine className="   text-white text-4xl" />}
            imageSrc={"/images/1.png"}
            title={"Home Care"}
          />
          <StripeCard
            icons={<FaUserNurse className="   text-white text-4xl" />}
            imageSrc={"/images/2.png"}
            title={"Private Duty Nursing"}
          />

          <StripeCard
            icons={<FaBedPulse className="  text-white  text-4xl" />}
            imageSrc={"/images/3.png"}
            title={"Bedside Care"}
          />

          <StripeCard
            icons={<TbHealthRecognition className="  text-white  text-4xl" />}
            imageSrc={"/images/4.png"}
            title={"Care Managment"}
          />
        </div>
      </div>
    </section>
  );
}
