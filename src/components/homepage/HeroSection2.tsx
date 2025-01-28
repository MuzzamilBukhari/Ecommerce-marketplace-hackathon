import React from "react";
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <section className=" bg-myHeading text-white body-font ">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 mt-20 lg:mt-28 md:pl-16 flex flex-col md:items-start md:text-left mb-16 sm:mb-0 items-center text-center gap-6">
          <h3 className="font-semibold">SUMMER 2020</h3>
          <h1 className="title-font text-4xl sm:text-6xl font-bold ">
            Vita Classic <br className="hidden lg:inline-block" />
            Product
          </h1>
          <p className="  font-medium leading-relaxed ">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex justify-center items-center gap-6 flex-col sm:flex-row">
            <h3 className="font-semibold text-xl">$16.48</h3>
            <button
              type="button"
              className="bg-myWht font-semibold text-myHeading px-6 py-3 rounded-md hover:scale-105 duration-200"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div>
          <Image
            className="object-cover object-center  "
            alt="product"
            src={"/home/hero2.png"}
            width={400}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
