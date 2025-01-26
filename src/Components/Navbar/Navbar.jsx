import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="h-[72px] w-full mx-auto">
      <div className="flex justify-between items-center h-full px-4">
        <div className="h-[36.8px] w-[200px] ml-20">
          <img src="./images/logo.webp" alt="logo" className="w-full h-full" />
        </div>
        <div className="flex items-center space-x-6 mr-12">
          <a href="#" className="hidden sm:block">
            Home
          </a>
          <a href="#" className="flex items-center space-x-1 hidden sm:block">
            <span>Our Services</span>
            <IoIosArrowDown className="inline" />
          </a>
          <a href="#" className="hidden sm:block">
            Blog
          </a>
          <a href="#" className="hidden sm:block">
            Contact Us
          </a>
          <a href="#" className="hidden sm:block">
            About Us
          </a>
          <a href="#" className="flex items-center sm:hidden">
            <IoSearchOutline size={18} />
          </a>
          <button className="bg-[#FFA229] text-white h-[46px] w-[157px] rounded-[4px]">
            Talk As Expert
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
