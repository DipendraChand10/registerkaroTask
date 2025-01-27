import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import LogoSection from "./LogoSection";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-auto md:h-[585px] w-full mx-auto bg-cover bg-center">
        <img
          src="./images/Section.webp"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute w-full md:w-[700px] h-auto md:h-[466px] top-[35px] md:left-[70px] left-4 rounded-md flex flex-col justify-between px-4 md:px-0"
          style={{ zIndex: 1 }}
        >
          <div className="h-[20px] w-[210px] md:left-[71px] absolute">
            <img
              src="./images/star.webp"
              alt="Section Image 1"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="relative w-full md:w-[700px] h-auto md:h-[251px] left-0 mt-10 flex flex-col justify-between"
            style={{ zIndex: 2 }}
          >
            <h1 className="font-inter text-2xl md:text-[36px] font-[500] leading-[40px] text-left">
              Your trusted partner <br /> for compliance business needs
            </h1>
            <p className="text-sm text-left mt-auto font-[500] text-gray-400">
              An online business compliance platform that helps entrepreneurs
              and <br />
              other individuals with various,
              <span className="text-gray-600">
                {" "}
                registrations, tax fillings,
              </span>
              and other
              <span className="text-gray-600">
                {" "}
                legal <br /> matters.
              </span>
            </p>
          </div>

          <div className="w-full md:w-[583px] h-[49px] md:ml-[70px] mt-4 md:mt-0">
            <img
              src="./images/rating.webp"
              alt="Section Image 2"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-auto md:h-1/5 w-full md:w-[474px] md:ml-[70px] mt-4 md:mt-0 flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">
            <button className="bg-[#1C4670] text-white h-[46px] w-full md:w-[157px] rounded-sm">
              Talk An Expert
            </button>
            <button className="flex items-center justify-start md:justify-center w-full md:w-auto">
              <IoPlayCircleSharp
                size={22}
                className="inline text-red-600 mr-1"
              />
              See how it works
            </button>
          </div>
        </div>
      </section>

      <LogoSection />
    </>
  );
};

export default HeroSection;
