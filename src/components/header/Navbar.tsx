"use client";

import Link from "next/link";
import Image from "next/image";
import React, { Suspense, use, useEffect, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import NavLink from "./NavLink";
import { useCart } from "@/context/cartContext";
import { IoMdCart } from "react-icons/io";
import { FaCheck, FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/wishlistContext";
import { IoPersonSharp } from "react-icons/io5";
import SearchBar from "./SearchBar";
import Logo from "../../../public/logo2.png";
import UserIcon from "./UserIcon";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const navLinks = [
    { id: 1, name: "Home", slug: "/" },
    { id: 2, name: "Shop", slug: "/shop" },
    { id: 3, name: "About", slug: "/about" },
    { id: 4, name: "Pricing", slug: "/pricing" },
    { id: 5, name: "Contact", slug: "/contact" },
    { id: 6, name: "Team", slug: "/team" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isOpen]);

  return (
    <div className="w-full bg-myGry text-myWht fixed top-0 left-0 z-100">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl lg:text-3xl font-bold flex items-center gap-2 text-white"
        >
          <Image src={Logo} alt={""} width={150} height={150} />
        </Link>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              name={link.name}
              slug={link.slug}
              isActive={link.slug === pathName}
            />
          ))}
          <SearchBar />
        </div>

        {/* Icons Section */}
        <div className="flex justify-center items-center gap-2 sm:gap-6">
          {/* Cart icon */}
          <Link href="/cart" className="relative flex items-center">
            <IoMdCart className="w-6 h-6 hover:text-myHeading" />
            <span className="absolute top-0 right-0 text-xs bg-myHeading text-white rounded-full px-1">
              {cartItems.length}
            </span>
          </Link>

          <Link
            href="/wishlist"
            className="flex items-center hover:text-myHeading"
          >
            <FaHeart className="w-6 h-6 " />
            <span className="text-white "> {wishlist.length} </span>
          </Link>

          <Suspense
            fallback={
              <div className="w-6 h-6 animate-pulse bg-gray-300 rounded-full" />
            }
          >
            <UserIcon />
          </Suspense>

          {/* Mobile Hamburger Menu */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <IoMdClose className="w-6 h-6 text-white" />
            ) : (
              <CgMenuLeftAlt className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-myGry text-white transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleNavbar}
          >
            ✕
          </button>
          <div className="flex items-center justify-center gap-2 sm:text-left text-center w-full sm:w-auto mt-4 sm:mt-0">
            <span className="text-myGry">
              <FaCheck className="w-6 h-6" />
            </span>
            <span className="text-lg font-semibold text-myHeading">
              Get 20% Off Your First Order!
            </span>
          </div>
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              name={link.name}
              slug={link.slug}
              onclick={toggleNavbar}
              isActive={link.slug === pathName}
            />
          ))}

          {/* Language Dropdown */}
          <div className="flex items-center gap-2 xl:gap-6 w-full sm:w-auto mt-4 sm:mt-0 justify-center sm:justify-start">
            <div className="relative flex items-center gap-2">
              <span>{selectedLanguage}</span>
              <IoIosArrowDown
                className="cursor-pointer text-base hover:text-gray-500"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute top-full mt-1 bg-white text-myHeading text-sm rounded shadow-md z-10">
                  <div
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleLanguageChange("English");
                      toggleNavbar(); // Close navbar after selection
                    }}
                  >
                    English
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleLanguageChange("Urdu");
                      toggleNavbar(); // Close navbar after selection
                    }}
                  >
                    Urdu
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleLanguageChange("Chinese");
                      toggleNavbar(); // Close navbar after selection
                    }}
                  >
                    Chinese
                  </div>
                </div>
              )}
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
      </div>
    </div>
  );
};

export default Navbar;
