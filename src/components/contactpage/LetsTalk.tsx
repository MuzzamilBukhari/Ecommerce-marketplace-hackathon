import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { brandDetails } from "@/brandDetails";
import { InputField } from "../ui/Input";
import TextArea from "../ui/TextArea";
import { Button } from "../ui/Button";

const LetsTalk = () => {
  return (
    <div className="max-w-[1280px] m-auto min-h-[70vh] md:py-20 sm:py-10 py-6 p-3 px-4 sm:px-0">
      <div className="w-full md:flex justify-center items-center gap-3">
        <div className="md:w-[35%] w-full sm:p-4 space-y-4 md:py-0 py-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-myHeading p-2">
              <IoMdCall className="w-4 h-4 object-contain text-myWht" />
            </div>
            <span className="text-xl text-myBlk">Call To Us</span>
          </div>
          <p className="text-myBlk">We are available 24/7, 7 days a week.</p>
          <p className="text-myBlk pb-3">Phone: {brandDetails.phone}</p>

          <hr className="border border-zinc-300" />

          <div className="flex items-center gap-3 py-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-myHeading p-2">
              <AiOutlineMail className="w-4 h-4 object-contain text-white" />
            </div>
            <span className="text-xl text-myBlk">Write To Us</span>
          </div>
          <p className="text-[#272343]">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <a
            href={`mailto:${brandDetails.email}`}
            className=" text-[#272343] hover:underline"
          >
            {brandDetails.email}
          </a>
        </div>

        <div className="md:w-[65%] w-full sm:p-4">
          <form className="text-myGry">
            <div className="w-full grid md:grid-cols-3 grid-cols-2 md:grid-rows-1 grid-rows-2 sm:gap-5 gap-2 rounded-md">
              <InputField type="text" name="name" placeholder="Your Name" />
              <InputField type="email" name="email" placeholder="Your Email" />
              <InputField type="phone" name="phone" placeholder="Your Phone" />
            </div>
            <TextArea placeholder="Your Message"></TextArea>
            <div className="w-full flex justify-end mt-4">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
      <hr className="border-t-2 border-myGry my-4  mt-16" />
    </div>
  );
};

export default LetsTalk;
