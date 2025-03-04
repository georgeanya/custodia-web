import React from "react";
import labs from "../public/assets/labs.png";
import CustomButton from "./mainButton";

const Section7 = () => {
  return (
    <div className="px-5 md:px-32 bg-[#F0F7FF]">
      <div className=" md:pt-28 pt-20 md:pb-28 pb-20 container mx-auto md:flex justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-md font-bold text-[#002A47]">
            Our treatment approach is evidence-based
          </h2>
          <p className="mt-5 md:mt-6 text-base leading-6  md:text-start md:text-3lg md:max-w-lg text-[#002A47]">
            Our treatment plans are evidence-based and backed by extensive
            research. Rest assured that the care we provide is grounded in
            scientific evidence, ensuring the best outcomes for our patients.
          </p>
          <div className="mt-8 md:mt-14 ">
            <CustomButton
              href="/research"
              title="Research behind our treatment"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col max-w-lg mt-17 md:mt-0">
          <img src={labs.src} alt="Lab" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
