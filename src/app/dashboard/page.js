"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const Page = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setInfo(data.data));
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-6 bg-gray-100">
        <h1 className="text-primary py-4 font-semibold text-4xl text-center mx-auto">
          User Info
        </h1>
        <div className="space-y-8">
          {info.map((singleInfo, index) => (
            <Dashboard key={index} singleInfo={singleInfo} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;

// <div className="p-4">
//   <h2 className="text-xl font-bold mb-4">Contact Submissions</h2>
//   {
//     info.map((item, index) => (
//       <div key={item._id || index} className="mb-4 p-4 border rounded">
//         <p>
//           <strong>Name:</strong> {item.firstName} {item.lastName}
//         </p>
//         <p>
//           <strong>Email:</strong> {item.email}
//         </p>
//         <p>
//           <strong>Phone:</strong> {item.phone}
//         </p>
//         <p>
//           <strong>Service Type:</strong> {item.serviceType}
//         </p>
//         <p>
//           <strong>Message:</strong> {item.message}
//         </p>
//       </div>
//     ))
//   }
// </div>
