import { brandDetails } from "@/brandDetails";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center h-screen relative min-h-screen text-white sm:pt-20 pt-36"
      style={{ backgroundImage: 'url("/about/about banner1.jpg")' }}
    >
      {/* Overlay for reducing opacity */}
      <div className="absolute inset-0 bg-myHeading bg-opacity-10"></div>

      <div className="container mx-auto flex px-4 sm:px-8 py-8 sm:py-28 lg:px-24 lg:py-32 flex-col-reverse md:flex-row items-center text-center relative z-[2]">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col mb-8 md:mb-0 items-center text-center gap-6 order-last sm:order-first md:order-first">
          <h3 className="font-semibold text-base sm:text-lg uppercase text-white">
            About Company
          </h3>
          <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
            About Us
          </h1>
          <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
            Welcome to <strong>{brandDetails.name}</strong>, your one-stop
            destination for the latest fashion trends! <br />
            At Bandage, we offer a wide range of stylish and affordable clothing
            and accessories for every occasion. Whether you&apos;re looking for
            casual wear, formal outfits, or trendy accessories, we&apos;ve got
            you covered. Our collection is curated to provide the perfect
            balance of comfort, quality, and style, all at great prices. Shop
            with us today and elevate your wardrobe with the best in fashion!
          </p>

          <a href="/contact">
            <button
              type="button"
              className="bg-myHeading text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:scale-105 duration-200"
            >
              Get Quote Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
