import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#1C4670] text-white h-[44px] w-full max-w-[1440px] mx-auto flex items-center px-4 relative">
      <div className="w-[488px] h-[28px] absolute right-0 mr-12 flex justify-between items-center px-2">
        <div className="flex items-center space-x-1">
          <FaEnvelope />
          <span>www.registerkaro.in</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaPhone />
          <span>+918447746183</span>
        </div>
        <div className="flex items-center gap-2">
          <RxInstagramLogo />
          <IoLogoFacebook />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div>
    </header>
  );
};

export default Header;
