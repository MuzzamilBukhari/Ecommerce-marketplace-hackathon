import { ContactHeroSection, LetsTalk, OurOffice } from "@/components";
import React from "react";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <div className="bg-white text-myHeading">
      <ContactHeroSection />

      <OurOffice />
      <LetsTalk />
    </div>
  );
};

export default page;
