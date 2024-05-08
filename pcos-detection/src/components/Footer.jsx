import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-500 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="" alt="" />
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WELLNESS JOURNEY
            </h1>
          </div>
          <ul class="flex flex-wrap items-center mb-6 text-xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400 px-40">
            <li>
              <a href="#Home" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#Explore" className="hover:underline me-4 md:me-6">
                Explore
              </a>
            </li>
            <li>
              <a href="#Lifestyle" className="hover:underline me-4 md:me-6">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#Doctor" className="hover:underline">
                Doctor
              </a>
            </li>

            <li>
              <a href="#Contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div>
            <h5 className="font-bold">Disclaimer</h5>
            <p className="">
              The information provided above regarding the PCOS is intended for
              general informational purposes only. It is not intended for
              clinical diagnosis, treatment, or medical advice. Any estimations
              or interpretations should be considered as educational insights
              rather than substitutes for professional medical guidance.
              Individuals seeking personalized advice or treatment for PCOS or
              related topics should consult with qualified healthcare
              professionals for proper evaluation and management. This content
              serves to provide an overview of PCOS and its potential impacts on
              sexual health and relationships for educational purposes and to
              encourage further reading and understanding of the topic.
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            sheAura
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
