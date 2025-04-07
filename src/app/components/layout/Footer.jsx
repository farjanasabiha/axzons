import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 z-50">
      <div className="container max-w-7xl px-4 mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image
                src="/logo-white.png"
                alt="logo"
                height={150}
                width={150}
              />
            </Link>

            <p className="mb-4 pt-4">
              Arhamai is your trusted partner in AI-powered business automation.
              We offer innovative solutions to help your business grow and
              succeed.
            </p>

            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/18FRspd72R/">
                <FaFacebook
                  className="text-primary hover:text-white transition-colors duration-300"
                  size={24}
                />
              </Link>
              <Link href="https://www.twitter.com">
                <FaTwitter
                  className="text-blue-400 hover:text-white transition-colors duration-300"
                  size={24}
                />
              </Link>
              <Link href="https://www.linkedin.com">
                <FaLinkedin
                  className="text-blue-700 hover:text-white transition-colors duration-300"
                  size={24}
                />
              </Link>
              <Link href="https://www.instagram.com">
                <FaInstagram
                  className="text-pink-600 hover:text-white transition-colors duration-300"
                  size={24}
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-h5 font-semibold mb-4">Services</h3>
            <ul>
              {[
                "fintech",
                "healthcare",
                "ecommerce",
                "ai-automation",
                "custom-software",
              ].map((service) => (
                <li key={service} className="mb-2">
                  <Link
                    href={`/services/${service}`}
                    className="hover:underline"
                  >
                    {service
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}{" "}
                    Solutions
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-h5 font-semibold mb-4">Resources</h3>
            <ul>
              {["blog", "case-studies", "faq", "support"].map((resource) => (
                <li key={resource} className="mb-2">
                  <Link href={`/${resource}`} className="hover:underline">
                    {resource
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-h5 font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter to stay updated on our latest news and
              services.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-4 text-black rounded"
              />
              <button type="submit" className="primaryButtonWhite w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div> */}

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-body-lg">
            &copy; 2025 Axzons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
