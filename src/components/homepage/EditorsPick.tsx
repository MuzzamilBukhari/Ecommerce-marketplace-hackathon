import React from "react";
import Image, { StaticImageData } from "next/image";
import Line from "../ui/Line";
import One from "../../../public/editors-pick/one.jpg";
import Two from "../../../public/editors-pick/two.webp";
import Three from "../../../public/editors-pick/three.jpg";
import Four from "../../../public/editors-pick/four.jpg";

const EditorsPick = () => {
  return (
    <div className="mt-20">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex justify-center items-center flex-col text-center text-myHeading mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">EDITOR&apos;S PICK</h1>
          <h6 className="text-myGry text-sm md:text-base mt-2">
            Problems trying to resolve the conflict between
          </h6>
        </div>
        {/* Grid container with new layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 text-[#FAFAFA]">
          {/* Large Jordan image - 6 columns on large screens */}
          <div className="lg:col-span-6 relative aspect-square">
            <ImageOverlay
              src={One || "/placeholder.svg"}
              alt="nike"
              title="Nike SB"
            />
          </div>

          {/* Middle Glasses image - 3 columns on large screens */}
          <div className="lg:col-span-3 relative aspect-[3/4]">
            <ImageOverlay
              src={Two || "/placeholder.svg"}
              alt="Glasses"
              title="GLASSES"
            />
          </div>

          {/* Right column with two images - 3 columns on large screens */}
          <div className="lg:col-span-3 grid grid-rows-2 gap-4">
            <div className="relative aspect-square">
              <ImageOverlay
                src={Three || "/placeholder.svg"}
                alt="newbalance"
                title="NEW BALANCE"
              />
            </div>
            <div className="relative aspect-square">
              <ImageOverlay
                src={Four || "/placeholder.svg"}
                alt="Jordan"
                title="JORDAN"
              />
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

const ImageOverlay = ({
  src,
  alt,
  title,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
}) => (
  <>
    <div className="absolute inset-0 z-10 flex items-end p-4 sm:p-6">
      <h1 className="text-lg sm:text-xl lg:text-2xl bg-myGry/80 backdrop-blur-sm px-4 py-2 font-semibold text-white">
        {title}
      </h1>
    </div>
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </>
);

export default EditorsPick;
