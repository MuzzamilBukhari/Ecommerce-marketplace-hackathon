import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";
import Line from "../ui/Line";

const ContainerFluid = () => {
  return (
    <section className="bg-white text-black body-font">
      <Line />
      <div className="flex justify-center items-center gap-12 flex-col px-6 mt-20 md:mt-0 md:flex-row">
        <div className="rounded-xl">
          {/* Image */}
          <Image
            src="/home/containerFluid.jpg"
            alt={"summer"}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center md:items-start flex-col gap-5 text-center md:text-left">
          <h3 className="font-semibold text-myGry text-base sm:text-lg">
            SUMMER 2020
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold title-font text-myHeading">
            Part of the Neutral <br /> Universe
          </h1>
          <p className="text-myBlk text-sm sm:text-base font-medium leading-relaxed max-w-[600px] mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-4 font-semibold">
            <Link href="/shop">
              <Button type="button" className="hover:scale-105 duration-200">
                BUY NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Line />
    </section>
  );
};

export default ContainerFluid;
