import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import LogoSection from "./LogoSection";
const HeroSection = () => {
  return (
    <>
      <section className="relative h-[585px] w-full mx-auto bg-cover bg-center">
        <img
          src="./images/Section.webp"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute w-[700px] h-[466px] top-[35px] left-[70px] rounded-md flex flex-col justify-between"
          style={{ zIndex: 1 }}
        >
          <div className="h-[20px] w-[210px] absolute left-[71px]">
            <img
              src="./images/star.webp"
              alt="Section Image 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="relative w-[700px] h-[251px] left-[70px] mt-10 flex flex-col justify-between"
            style={{ zIndex: 2 }}
          >
            <h1 className="font-inter text-[36px] font-[500] leading-[40px] text-left">
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
          <div className="w-[583px] h-[49px] ml-[70px]">
            <img
              src="./images/rating.webp"
              alt="Section Image 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-1/5 w-[474px] ml-[70px] space-x-4">
            <button className="bg-[#1C4670] text-white h-[46px] w-[157px] rounded-sm">
              Talk An Expert
            </button>
            <button>
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
