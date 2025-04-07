import Image from "next/image";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import { ReactLenis } from "lenis/react";
import MarqueeDemo from "./components/layout/Marquee";
import OurWorks from "./components/layout/OurWorks";
import Service from "./components/layout/Servies";
import Brand from "./components/layout/Brand";
import Contact from "./components/layout/Contact";
import WhyWeSpecial from "./components/layout/WhyWeSpecial";
import Footer from "./components/layout/Footer";
import Eligible from "./components/layout/Eligible";
import Badge from "./components/layout/Badge";
// import Gallery from "./components/layout/Gallery";
import { ChevronsDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Header />
        <Hero />
        <Badge />
        <Eligible />
        <Contact />
        <Footer />
      </ReactLenis>

      {/* <Brand /> */}
    </>
  );
}
