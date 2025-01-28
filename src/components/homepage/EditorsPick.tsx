import React from "react";
import Image from "next/image";
import Link from "next/link";
import Line from "../ui/Line";

const EditorsPick = () => {
  return (
    <div className="mt-20">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex justify-center items-center flex-col text-center text-myHeading mb-4">
          <h1 className="text-2xl md:text-3xl font-bold">EDITOR&apos;S PICK</h1>
          <h6 className="text-myGry text-sm md:text-base">
            Problems trying to resolve the conflict between
          </h6>
        </div>
        <div className="grid grid-rows-4 sm:grid-rows-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 w-full gap-4 py-10 px-6 text-[#FAFAFA]">
          <div className=" sm:col-span-2 row-span-1 sm:row-span-2 relative w-full h-full ">
            <div>
              <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-3 sm:bottom-5 lg:bottom-10 left-3 sm:left-5 lg:left-10">
                <h1 className="text-lg md:text-2xl bg-myGry w-fit px-4 font-semibold text-white text-center py-2">
                  JORDAN
                </h1>
              </div>
              <Image
                src="/editors-pick/one.jpg"
                alt="Jordan"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="sm:col-span-1 row-span-1 sm:row-span-2 flex justify-between relative p-4 w-full h-full">
            <div>
              <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-3 sm:bottom-5 lg:bottom-10 left-3 sm:left-5 lg:left-10">
                <h1 className="text-lg md:text-2xl bg-myGry w-fit px-4 font-semibold text-white text-center py-2">
                  GLASSES
                </h1>
              </div>
              <Image
                src="/editors-pick/two.webp"
                alt="Women"
                width={600}
                height={600}
                className="w-full h-full object-cover absolute top-0 right-0"
              />
            </div>
          </div>
          <div className="sm:col-span-1 row-span-1 p-4 relative w-full h-full">
            <div>
              <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-8 sm:bottom-12 lg:bottom-12 left-8 sm:left-12 lg:left-10">
                <h1 className="text-lg md:text-2xl bg-myGry w-fit px-4 font-semibold text-white text-center py-2">
                  NIKE
                </h1>
              </div>
              <Image
                src="/editors-pick/three.jpg"
                alt="nike"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="sm:col-span-1 row-span-1 p-4 relative w-full h-full">
            <div>
              <div className="h-80 w-56 z-[1] flex flex-col gap-2 justify-end absolute bottom-8 sm:bottom-4 lg:bottom-12 left-8 sm:left-4 lg:left-12">
                <h1 className="text-lg md:text-2xl bg-myGry w-fit px-4 font-semibold text-white text-center py-2">
                  New Balance
                </h1>
              </div>
              <Image
                src="/editors-pick/four.jpg"
                alt="Kids"
                width={600}
                height={700}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default EditorsPick;
