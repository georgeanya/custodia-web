import React from "react";
import hypert from "../public/assets/hypert.svg";
import blood from "../public/assets/blood.svg";
import lipids from "../public/assets/lipids.svg";
import weight from "../public/assets/weight.svg";
import hda1d from "../public/assets/hba1c.svg";
import pill from "../public/assets/pill.svg";

const Section3 = () => {
  return (
    <div className="px-5 md:px-32">
      <div className=" md:pt-28 pt-20 md:pb-36 pb-24 container mx-auto" id="benefits">
        <h2 className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47] md:pr-6">
          What you could achieve with Custodia
        </h2>
        <div className="md:mt-6 flex flex-wrap justify-normal md:gap-x-20 ">
          <div className="mt-17 sm:max-w-s">
            <img src={blood.src} alt="Icon" />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
              HbA1c reduction
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
              Reduce your HbA1c level, a measure of how well controlled your blood sugar has been over a period of  3 months
            </p>
          </div>
          <div className="mt-17 sm:max-w-s">
            <img src={pill.src} alt="Icon" />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
              Medication reduction
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
              Reduce medications as sustainable habits improve your health—always coordinated with your doctor.
            </p>
          </div>
          <div className="mt-17 sm:max-w-s">
            <img src={hypert.src} alt="Icon" />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
              Blood pressure reduction
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
             Reduce your blood pressure and prevent associated complications like stroke and heart disease
            </p>
          </div>
          <div className="mt-17 sm:max-w-s">
            <img src={weight.src} alt="Icon" />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
              Weight loss
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
              Lose weight without fad-diets or counting calories, keep it off, and get back to doing the things you love
            </p>
          </div>
          <div className="mt-17 sm:max-w-s">
            <img src={lipids.src} alt="Icon" />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
              Improved CVD profile
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
              Reduce your triglyceride levels, improve your cholesterol profile and other CVD risk factors
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Section3;
