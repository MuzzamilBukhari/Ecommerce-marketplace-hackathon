import React from "react";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

const PageHeader = ({
  first,
  second,
  tagline,
  pageName,
}: {
  first: string;
  second: string;
  tagline: string;
  pageName: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 mt-12">
      {first}
      <h2 className="text-3xl sm:text-5xl font-bold text-myHeading text-center">
        {second}
      </h2>
      <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12">
        <h3>
          <Link href={"/"}>Home</Link>
        </h3>
        <MdChevronRight className="text-myHeading w-8 h-8" />
        <h3 className="text-myGry">
          <Link href={"/team"}>{pageName}</Link>
        </h3>
      </div>
    </div>
  );
};

export default PageHeader;
