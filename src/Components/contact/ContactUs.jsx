import React from "react";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
const ContactUs = () => {
  return (
    <div className="w-full h-[491px] bg-[#1C4670] p-4 sm:h-[550px] md:h-[520px] lg:h-[491px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center items-start space-y-4 p-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Manage Your Services by your Mobile Phone
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-black  font-semibold rounded-lg">
              <IoLogoApple />
              Get in Touch
            </button>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg">
              <BiLogoPlayStore /> Download App
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-end mt-2">
          <img
            className="max-w-full h-auto"
            src="./images/phone.png"
            alt="Contact Us Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
