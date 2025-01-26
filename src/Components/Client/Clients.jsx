import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Clients = () => {
  return (
    <div className="w-full h-auto min-h-[703px] p-4">
      {/* First Section */}
      <div className="w-full h-[104px] mb-6">
        {/* First Part */}
        <div className="w-[800px] h-[48px]  mx-auto mb-2">
          <h1 className="text-center font-bold">Our Happy Clients</h1>
        </div>
        {/* Second Part */}
        <div className="w-[800px] h-[48px]  mx-auto">
          <p className="text-center text-[#666666]">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full h-[353px]  mb-6">
        <img src="./images/Pagination.png" alt="" />
      </div>

      {/* Third Section */}
      <div className="w-full h-[22px] ">
        <h2 className="text-center">
          See more <IoIosArrowRoundForward className="inline" />
        </h2>
      </div>
    </div>
  );
};

export default Clients;
