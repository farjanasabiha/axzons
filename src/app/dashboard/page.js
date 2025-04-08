"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DataTable from "react-data-table-component";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/Logo_Green_Violet.svg";
import { Drawer } from "vaul";
import { motion } from "motion/react";
import { Edit, X } from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FiCpu } from "react-icons/fi";
import { MdHomeRepairService } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import {
  SidebarDrawer,
  DrawerContent,
} from "../components/core/drawer/vaul-sidebar";
import Link from "next/link";
const Page = () => {
  const [info, setInfo] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch data on load
  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
        setFilteredData(data.data);
      });
  }, []);

  useEffect(() => {
    filterData();
  }, [searchText, selectedTab, info]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filterData = () => {
    let updatedData = [...info];

    if (selectedTab !== "All") {
      updatedData = updatedData.filter(
        (item) => item.serviceType === selectedTab
      );
    }

    if (searchText !== "") {
      updatedData = updatedData.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }

    setFilteredData(updatedData);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (!confirmed) return;

    const updatedInfo = info.filter((item) => item._id !== id);
    setInfo(updatedInfo);

    try {
      await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const columns = [
    {
      name: <span className="font-bold text-xl text-gray-700">Id</span>,
      cell: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: (
        <span className="font-bold text-base text-gray-700">First Name</span>
      ),
      selector: (row) => row.firstName,
      sortable: true,
      width: "180px", // fixed width
    },
    {
      name: (
        <span className="font-bold text-base text-gray-700">Last Name</span>
      ),
      selector: (row) => row.lastName,
      sortable: true,
      width: "180px", // fixed width
    },
    {
      name: <span className="font-bold text-base text-gray-700">Email</span>,
      selector: (row) => row.email,
      width: "300px", // fixed width
    },
    {
      name: <span className="font-bold text-base text-gray-700">Phone</span>,
      selector: (row) => row.phone,
    },
    {
      name: (
        <span className="font-bold text-base text-gray-700">Service Type</span>
      ),
      selector: (row) => row.serviceType,
      sortable: true,
    },
    {
      name: <span className="font-bold text-base text-gray-700">Message</span>,
      selector: (row) => row.message,
    },
    {
      name: <span className="font-bold text-base text-gray-700">Actions</span>,
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleView(row)}
            className="px-3 py-1 text-xl  text-green-600 rounded"
          >
            <FaEye />
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            className="px-3 py-1 text-xl text-red-600 rounded"
          >
            <RiDeleteBinLine />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const serviceTabs = [
    "All",
    "Home Care",
    "Private Duty Nursing",
    "Care Management",
    "Bedside Care",
    "Seeking Employment (HHAs + RNs)",
  ];

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#fff", // background of each row
        borderBottom: "1px solid #e5e7eb", // soft border (Tailwind gray-200)
        minHeight: "60px", // optional
        fontSize: "14px",
        color: "#374151", // text-gray-700
      },
      highlightOnHoverStyle: {
        backgroundColor: "#f9fafb", // Tailwind gray-100
        borderBottomColor: "#e5e7eb",
        outline: "none",
        cursor: "pointer",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f9fafb", // Tailwind gray-50
        color: "#1f2937", // text-gray-800
        fontWeight: "600",
        fontSize: "14px",
        paddingTop: "16px",
        paddingBottom: "16px",
      },
    },
    cells: {
      style: {
        paddingTop: "12px",
        paddingBottom: "12px",
      },
    },
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block w-64">
        <Sidebar />
      </div>

      <main className="w-full lg:w-[calc(100%-16rem)] p-6 bg-white space-y-6">
        {/* Navbar Start */}
        <div className="lg:hidden bg-slate-100 p-2">
          <div>
            <div className="text-4xl font-bold text-center mx-auto ">
              <Image
                src={logo}
                width={80}
                height={80}
                alt="Picture of the logo"
              />
            </div>
          </div>
          <div>
            {/* Toggle Start */}

            <SidebarDrawer
              className="bg-white"
              open={sidebarOpen}
              setOpen={setSidebarOpen}
              direction={"left"}
              outsideClose={true}
            >
              <DrawerContent className="bg-white">
                <div className="p-3">
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
              </DrawerContent>
            </SidebarDrawer>
            <div className="flex justify-center">
              <figure className="h-full w-full relative">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSidebarOpen(true)}
                  className="absolute right-0 bottom-1  text-black text-2xl text-left"
                >
                  <GiHamburgerMenu />
                </motion.button>
              </figure>
            </div>
            {/* Toggle End */}
          </div>
        </div>
        {/* Navbar End */}

        <h1 className="text-3xl uppercase text-primary text-center mx-auto py-3 font-semibold">
          Users Information
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* Tabs */}
          <div className="flex gap-3 flex-wrap">
            {serviceTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-full text-xs lg:text-xl ${
                  selectedTab === tab
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search By Name And Phone"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* DataTable */}
        <div className="bg-white shadow border rounded-lg">
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            // striped
            responsive
            customStyles={customStyles}
          />
        </div>
      </main>

      {/* View Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-primary rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-4 w-10 h-10 flex items-center justify-center text-2xl bg-white text-black rounded-full shadow hover:text-primary "
            >
              ×
            </button>
            <h2 className="text-3xl font-semibold mb-10 text-white text-center ">
              User Details
            </h2>
            <div className="space-y-4 text-sm">
              <div className="text-white w-full flex items-center justify-start gap-5 ">
                <div className="w-1/3 font-bold text-base">First Name:</div>
                <div className="w-full bg-purple-400 py-2 px-4 rounded-md">
                  {selectedUser.firstName}
                </div>
              </div>
              <div className="text-white w-full flex items-center justify-start gap-5 ">
                <div className="w-1/3 font-bold text-base">Last Name:</div>
                <div className="w-full bg-purple-400 py-2 px-4 rounded-md">
                  {selectedUser.lastName}
                </div>
              </div>
              <div className="text-white w-full flex items-center justify-start gap-5 ">
                <div className="w-1/3 font-bold text-base">Email:</div>
                <div className="w-full bg-purple-400 py-2 px-4 rounded-md">
                  {selectedUser.email}
                </div>
              </div>
              <div className="text-white w-full flex items-center justify-start gap-5 ">
                <div className="w-1/3 font-bold text-base">Phone : </div>
                <div className="w-full bg-purple-400 py-2 px-4 rounded-md">
                  {selectedUser.phone}
                </div>
              </div>
              <div className="text-white w-full flex items-center justify-start gap-5 ">
                <div className="w-1/3 font-bold text-base">Service Type:</div>
                <div className="w-full bg-purple-400 py-2 px-4 rounded-md">
                  {selectedUser.serviceType}
                </div>
              </div>
              <div className="text-white w-full flex items-center justify-start gap-5 ">
                <div className="w-1/3 font-bold text-base">Message:</div>
                <div className="w-full bg-purple-400 py-2 px-4 rounded-md">
                  {selectedUser.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
