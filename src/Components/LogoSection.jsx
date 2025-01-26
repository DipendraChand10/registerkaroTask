import React from "react";

const LogoSection = () => {
  return (
    <section className="w-full h-[236px] max-w-[1440px] mx-auto bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-inter text-[22px] font-[700] leading-[26.63px] text-center underline-from-font text-decoration-skip-ink-none mb-8 mt-[70px]">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h1>
        <img
          src="./images/Logos.webp"
          alt="Logo"
          className="h-[28px] w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default LogoSection;
