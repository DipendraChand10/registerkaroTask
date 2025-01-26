import React from "react";

const Services = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto min-h-[1011px] p-4">
      {/* First Section */}
      <div className="w-full max-w-[1300px] h-[860px]  mx-auto mb-6 p-4 mt-[40px] relative">
        <p className="text-xl font-semibold text-center text-[14px] leading-[21px] tracking-[1.5px] text-[#EB8D15]">
          WELCOME TO REGISTERKARO.IN
        </p>
        <h1 className="text-center text-[32px] font-extrabold leading-[38.4px] tracking-[0.16px] text-gray-600">
          Explore Our Services
        </h1>
      </div>

      {/* Second Section */}
      <div className="w-full max-w-[1300px] h-[100px] mx-auto flex items-start justify-center">
        <button className="w-[162px] h-[52px] rounded-[4px] bg-[#1C4670] text-white">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
