"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <div className="bg-[#272343] text-[#ffffff]/70 text-[0.5rem] sm:text-xs xl:text-[13px] lg:px-20 sm:px-10 px-3 py-2 lg:py-[14px]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
          <div className="flex items-center gap-1 sm:items-center">
            <Image
              src={"/icons/mail.png"}
              alt={"mail"}
              width={16}
              height={12}
            />
            codewithhuzaifa@gmail.com
          </div>
        </div>

        {/* Promo Section */}
        <div className="flex items-center justify-center gap-2 sm:text-left text-center w-full sm:w-auto mt-4 sm:mt-0">
          <span className="text-myGry">
            <FaCheck className="w-6 h-6" />
          </span>
          <span className="text-lg font-semibold text-myGry">
            Get 20% Off Your First Order!
          </span>
        </div>

        {/* Language Dropdown and Contact Link */}
        <div className="flex items-center gap-2 xl:gap-6 w-full sm:w-auto mt-4 sm:mt-0 justify-center sm:justify-start">
          {/* Language Dropdown */}
          <div className="relative flex items-center gap-2">
            <span>{selectedLanguage}</span>
            <IoIosArrowDown
              className="cursor-pointer text-base hover:text-gray-500"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute top-full mt-1 bg-white text-[#272343] text-sm rounded shadow-md z-10">
                <div
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange("Urdu")}
                >
                  Urdu
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange("Chinese")}
                >
                  Chinese
                </div>
              </div>
            )}
          </div>

          {/* Need Help Link */}
          <Link href="/contact" className="flex items-center gap-1">
            <Image
              src={"/icons/call-icon.png"}
              alt="call"
              width={16}
              height={12}
            />
            <span>Need Help</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
