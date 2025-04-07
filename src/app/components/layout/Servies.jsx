import React from "react";
import { FaWallet, FaHeartbeat, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    icon: <FaWallet className="text-4xl lg:text-6xl  text-secondary" />,
    title: "FinTech Solutions",
    description: [
      "Innovative financial technology solutions",
      "Secure and efficient transactions",
      "Cutting-edge analytics and insights",
    ],
  },
  {
    icon: <FaHeartbeat className="text-4xl lg:text-6xl  text-secondary" />,
    title: "Healthcare Solutions",
    description: [
      "Advanced healthcare technology",
      "Improve patient outcomes",
      "Streamline medical processes",
    ],
  },
  {
    icon: <FaShoppingCart className="text-4xl lg:text-6xl  text-secondary" />,
    title: "E-Commerce Solutions",
    description: [
      "Enhance your online store",
      "Seamless shopping experiences",
      "Boost sales and customer satisfaction",
    ],
  },
];

function Service() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="text-left mb-8 w-full xl:w-9/12">
                <h1 className=" text-2xl md:text-4xl  text-center xl:text-left leading-normal   font-normal pb-6 overflow-hidden  text-black">
                  <span className="block">
                    Your AI-powered Business Automation Platform
                  </span>
                </h1>
                <p className="text-body-md md:text-body-lg text-center lg:text-left text-gray-600">
                  Arham Ai offers a variety of services to help your business
                  grow and succeed. From AI automation to custom software
                  development, we provide innovative solutions tailored to your
                  needs. Let&apos;s work together to drive efficiency, boost
                  productivity, and achieve your business goals.
                </p>
              </div>
            </div>
            {services.slice(0, 1).map((service, index) => (
              <div
                key={index}
                className="p-12 rounded-2xl border transition-all duration-700 group hover:bg-gray-800"
              >
                <div className="flex items-center mb-4 gap-6">
                  {service.icon}
                  <h3 className="text-h5 lg:text-3xl leading-tight font-semibold group-hover:text-white transition-all duration-700">
                    {service.title}
                  </h3>
                </div>
                <ul className="text-gray-600 group-hover:text-white transition-all duration-700">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-center mb-4 text-lg">
                      <svg
                        className="h-4 w-4  text-secondary mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-7.293a1 1 0 111.414-1.414L10 11.586l2.879-2.879a1 1 111.414 1.414l-3.586 3.586a1 1 0 01-1.414 0l-1.586-1.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-body-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(1).map((service, index) => (
              <div
                key={index}
                className="p-12 rounded-2xl border transition-all duration-700 group hover:bg-gray-800"
              >
                <div className="flex items-center mb-4 gap-6">
                  {service.icon}
                  <h3 className="text-h5 lg:text-3xl font-semibold group-hover:text-white transition-all duration-700">
                    {service.title}
                  </h3>
                </div>
                <ul className="text-gray-600 group-hover:text-white transition-all duration-700">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-center mb-4 text-lg">
                      <svg
                        className="h-4 w-4  text-secondary mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-7.293a1 1 0 111.414-1.414L10 11.586l2.879-2.879a1 1 111.414 1.414l-3.586 3.586a1 1 0 01-1.414 0l-1.586-1.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-body-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
