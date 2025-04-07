import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiCpu } from "react-icons/fi";
import { MdHomeRepairService } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";

import logo from '../../../public/Logo_Green_White.svg'

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary shadow-md h-screen p-5 hidden md:block fixed top-0 left-0">
      <div className="text-4xl font-bold text-center mx-auto mb-6">
        <Image
          src={logo}
          width={180}
          height={150}
          alt="Picture of the logo"
        />
      </div>

      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="text-white font-semibold hover:bg-white p-2 hover:text-primary transition duration-200 flex items-center justify-start gap-4"
          >
            <FaHome className="text-2xl" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white font-semibold hover:bg-white p-2 hover:text-primary transition duration-200 flex items-center justify-start gap-4"
          >
            <FiCpu className="text-2xl" />
            About
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            className="text-white font-semibold hover:bg-white p-2 hover:text-primary transition duration-200 flex items-center justify-start gap-4"
          >
            <MdHomeRepairService className="text-2xl" />
            Service
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="text-white font-semibold hover:bg-white p-2 hover:text-primary transition duration-200 flex items-center justify-start gap-4"
          >
            <TbWorld className="text-2xl" />
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-white font-semibold hover:bg-white p-2 hover:text-primary transition duration-200 flex items-center justify-start gap-4"
          >
            <MdOutlineDashboardCustomize className="text-2xl" />
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
