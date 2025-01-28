import React from "react";
import Image from "next/image";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai"; // React Icons
import { brandDetails } from "@/brandDetails";

const OurOffice = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container px-5 mx-auto">
        <div className="text-center text-black space-y-4">
          <h3 className="text-2xl font-semibold text-[#737373]">
            VISIT OUR OFFICE
          </h3>
          <h1 className="text-3xl font-bold text-myHeading">
            We help small businesses with big ideas
          </h1>
        </div>

        {/* Cards */}
        <div className="flex justify-center items-center flex-col md:flex-row mt-20 gap-5">
          {/* Card 1 - Email */}
          <div className="flex justify-center items-center flex-col font-semibold gap-6 bg-white p-8 shadow-lg rounded-lg w-full md:w-1/3 transition-transform hover:scale-105 duration-300">
            <div className="flex justify-center items-center flex-col gap-3">
              <AiOutlineMail size={72} className="text-myBlk" />
              <a
                href={`mailto:${brandDetails.email}`}
                className="text-xl text-myBlk hover:underline"
              >
                {brandDetails.email}
              </a>
            </div>
            <div>Get Support</div>
            <button className="px-6 py-3 rounded-full border-2 border-myHeading text-myHeading hover:bg-myHeading hover:text-white transition-all">
              Submit Request
            </button>
          </div>

          {/* Card 2 - Location */}
          <div className="flex justify-center items-center flex-col font-semibold gap-6 bg-myHeading text-white p-8 shadow-lg rounded-lg w-full md:w-1/3 transition-transform hover:scale-105 duration-300">
            <div className="flex justify-center items-center flex-col gap-3">
              <AiOutlineEnvironment size={72} />
              <p>New Karachi, Karachi </p>
            </div>
            <div>Visit Us</div>
            <button className="px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-myHeading transition-all">
              Submit Request
            </button>
          </div>

          {/* Card 3 - Phone */}
          <div className="flex justify-center items-center flex-col font-semibold gap-6 bg-white p-8 shadow-lg rounded-lg w-full md:w-1/3 transition-transform hover:scale-105 duration-300">
            <div className="flex justify-center items-center flex-col gap-3">
              <AiOutlinePhone size={72} className="text-myBlk" />
              <a
                href="tel:+92 311 1091 341"
                className="text-xl text-myBlk hover:underline"
              >
                +92 311 1091 341
              </a>
            </div>
            <div>Call Us</div>
            <button className="px-6 py-3 rounded-full border-2 border-myHeading text-myHeading hover:bg-myHeading hover:text-myWht transition-all">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
