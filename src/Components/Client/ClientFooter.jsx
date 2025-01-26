import React from "react";

const ClientFooter = () => {
  return (
    <div className="w-full h-[154px] bg-[#FFA229] p-4 sm:h-[200px] md:h-[180px] lg:h-[154px] flex items-center">
      <div className="container mx-auto">
        {/* Centering the div */}
        <div className="h-[52px] w-full max-w-[1303px] mx-auto flex justify-between items-center space-x-0">
          <div className="w-[25%] h-full flex items-center justify-center">
            <div className="h-[52px] w-[52px] bg-[#EB5757] rounded-full flex items-center justify-center">
              <img
                className="h-[24px] w-[24px]"
                src="./images/group.png"
                alt="Logo"
              />
            </div>
            <span className="ml-2 font-bold whitespace-nowrap text-sm">
              Fill up Application Form
            </span>
          </div>

          <div className="w-[25%] h-full flex items-center justify-center">
            <div className="h-[52px] w-[52px] bg-[#27AE60] rounded-full flex items-center justify-center">
              <img
                className="h-[24px] w-[24px]"
                src="./images/em.png"
                alt="Logo"
              />
            </div>
            <span className="ml-2 font-bold whitespace-nowrap text-sm">
              Make Online Payment
            </span>
          </div>

          <div className="w-[25%] h-full flex items-center justify-center">
            <div className="h-[52px] w-[52px] bg-[#F2994A] rounded-full flex items-center justify-center">
              <img
                className="h-[24px] w-[24px]"
                src="./images/av.png"
                alt="Logo"
              />
            </div>
            <span className="ml-2 font-bold whitespace-nowrap text-sm">
              Executive will Process Application
            </span>
          </div>

          <div className="w-[25%] h-full flex items-center justify-center">
            <div className="h-[52px] w-[52px] bg-[#828282] rounded-full flex items-center justify-center">
              <img
                className="h-[24px] w-[24px]"
                src="./images/Vector.png"
                alt="Logo"
              />
            </div>
            <span className="ml-2 font-bold whitespace-nowrap text-sm">
              Get Confirm Mail
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFooter;
