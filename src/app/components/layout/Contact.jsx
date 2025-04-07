'use client'
import React from "react";
import { useRouter } from "next/navigation";
const Contact = () => {
    const router = useRouter();
  const handleContact = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const serviceType = e.target.serviceType.value;
    const message = e.target.message.value;

    console.log(firstName, lastName, email, phone, serviceType, message);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          serviceType,
          message,
        }),
      });

      if (!res.ok) {
        const errorDetails = await res.json();
        console.error("Server Error:", errorDetails);
        return;
      }

      const data = await res.json();
      console.log("Success:", data);
      router.push("/dashboard");
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };
  return (
    <section id="contact" className="   bg-secondary  py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className=" gap-y-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-10">
          {/* Left Section */}
          <div className="col-span-2">
            <div className="flex items-center justify-center h-full">
              <div>
                <h1 className="text-[#d5b9ef] font-extrabold text-center text-8xl">
                  Get In Touch{" "}
                </h1>
                <p className="  my-4 text-gray-500 text-center">
                  We're hare to help you in any way we can. For more
                  information, fill out the form and we'll get back to you as
                  soon as possible.
                </p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <form
            onSubmit={handleContact}
            className="col-span-4 space-y-6 border-2 p-10 rounded-lg border-[#ebe2f3]"
          >
            {/* First & Last Name */}
            <div className="grid grid-cols-4 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-800">
                  First Name
                </label>
                <input
                  name="firstName"
                  placeholder="John"
                  type="text"
                  className="text-gray-700 bg-transparent border-b-2 mt-1 border-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary pl-0 p-[0.7rem]"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-800">Last Name</label>
                <input
                  placeholder="Smith"
                  name="lastName"
                  type="text"
                  className="text-gray-700 border-b-2 bg-transparent mt-1 border-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary pl-0 p-[0.7rem]"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-800">Email</label>
                <input
                  placeholder="jhonsmith@gmail.com"
                  name="email"
                  type="email"
                  className="text-gray-700 border-b-2 bg-transparent mt-1 border-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary pl-0 p-[0.7rem] "
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-gray-800">
                  Phone Number
                </label>
                <input
                  placeholder="+1 (328) 612-297"
                  name="phone"
                  type="tel"
                  className="text-gray-700 border-b-2 mt-1 bg-transparent border-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary pl-0 p-[0.7rem]"
                />
              </div>
            </div>

            {/* Query Topic */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-800">
                Type of Service
              </label>
              <select
                name="serviceType"
                className="text-gray-700 border-b-2 mt-1 bg-transparent border-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary pl-0 p-[0.7rem]"
              >
                <option>Home Care</option>
                <option>Private Duty Nursing</option>
                <option>Care Management</option>
                <option>Bedside Care</option>
                <option>Seeking Employment (HHAs + RNs)</option>
              </select>
            </div>

            {/* Message Box */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-800">
                Your Message
              </label>
              <textarea
                name="message"
                className="text-gray-700 border-b-2 mt-1 bg-transparent border-primary outline-none focus:border-secondary focus:ring-1 focus:ring-secondary pl-0 p-[0.7rem]"
                rows={6}
                placeholder="Enter you r message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className=" w-full hover:text-white bg-primary transition-all duration-300 rounded-lg text-white p-[0.7rem] border-2 border-secondary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
