import React from "react";
import hero from "../public/assets/doctor.png";
import CustomButton from "./mainButton";

const Hero = () => {
  return (
    <div className="bg-[#F0F7FF] px-5 md:px-32">
      <div className="container mx-auto md:pt-18 pb-20 md:pb-36 flex flex-col md:flex-row md:justify-between ">
        <div className="md:max-w-lg pt-15 pb-17 md:pb-0 md:pt-18">
          <h1 className="md:pr-14  text-4lg md:text-start md:text-5xl font-bold text-[#002A47]">
            Extend your care between visits
          </h1>
          <p className="mt-5 md:mt-6 text-base font-normal md:pr-8 md:text-start md:text-[22px] md:leading-8 text-[#476D85]">
           Empower your patients with continuous support for chronic conditions. Custodia delivers proven outcomes while you focus on what matters most
          </p>
          <div className="mt-8">
            <CustomButton
              href="https://forms.gle/RZ3DwhQ4wpSX3GAw5"
              title="Refer patients here"
            />
          </div>
        </div>
        <div className=" md:w-2/4 flex md:p-10 justify-center">
          <img src={hero.src} alt="Custodia Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
