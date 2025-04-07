import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,
  FaTools,
  FaDollarSign,
} from "react-icons/fa";

const cardsData = [
  {
    icon: <FaUsers className=" text-secondary text-4xl" />,
    title: "Expert Team",
    description:
      "Our team consists of industry experts with years of experience in AI, FinTech, Healthcare, and E-Commerce solutions.",
  },
  {
    icon: <FaLightbulb className=" text-secondary text-4xl" />,
    title: "Innovative Solutions",
    description:
      "We leverage cutting-edge technologies to deliver innovative and efficient solutions tailored to your business needs.",
  },
  {
    icon: <FaHandshake className=" text-secondary text-4xl" />,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' success by providing personalized services and ongoing support to ensure satisfaction.",
  },
  {
    icon: <FaCheckCircle className=" text-secondary text-4xl" />,
    title: "Proven Track Record",
    description:
      "Our portfolio showcases successful projects that demonstrate our ability to deliver high-quality results.",
  },
  {
    icon: <FaTools className=" text-secondary text-4xl" />,
    title: "Comprehensive Services",
    description:
      "We offer a wide range of services from custom software development to marketing automation and beyond.",
  },
  {
    icon: <FaDollarSign className=" text-secondary text-4xl" />,
    title: "Competitive Pricing",
    description:
      "Our pricing models are designed to offer the best value without compromising on quality.",
  },
];

const featuresData = [
  {
    number: "01",
    title: "Full-spectrum co-employment",
    description:
      "We manage recruitment, and office logistics, including cultural elements like quality standards. We align closely with your operational culture and goals by integrating into your daily workflows, attending standups, participating in Slack channels, and email communications.",
  },
  {
    number: "02",
    title: "Seamless Communication",
    description:
      "We ensure clear and effective communication by actively participating in your meetings, chats, and email threads.",
  },
  {
    number: "03",
    title: "End-to-End Support",
    description:
      "From hiring to project delivery, we take care of every aspect, allowing you to focus on business growth.",
  },
];

function WhyWeSpecial() {
  return (
    <section className="py-10 md:py-20 bg-white text-[#333333]">
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="text-center text-gray-400 text-sm font-normal">
          WHAT WE DO
        </h1>
        <h1 className="text-center text-black text-4xl font-normal mt-2 mb-20">
          What Makes Us Different
        </h1>

        <div>
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="border-b-2 md:flex-row pb-[4rem] mb-10 flex-col border-gray-200 space-y-6 md:space-y-0 flex justify-center md:justify-between md:items-center"
            >
              <div className="flex space-x-4 md:space-x-10 items-center">
                <div className="border-2 rounded-full px-2 py-4 md:px-5 md:py-8">
                  <span className="text-secondary font-bold text-xl">
                    {feature.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-semibold md:w-[18rem] text-black">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <div className="md:w-[55%]">
                <p className="text-sm text-gray-800 md:text-[1rem] leading-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWeSpecial;
