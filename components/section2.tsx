import React from "react";
import nuts from "../public/assets/nuts.png";
import CustomButton from "./mainButton";

const Section2 = () => {
  return (
    <div className="px-5 md:px-32 bg-[#236DAD]">
      <div className="md:pt-28 pt-20 md:pb-36 pb-24 flex flex-col container mx-auto md:flex-row md:justify-between">
        <div className="md:max-w-[550px]">
          <h2 className=" pb-[35px] md:pb-[50px] text-2xl leading-9 md:text-start md:text-4xl font-bold text-white pr-3 md:max-w-[535px]">
          Traditional healthcare isn&apos;t built to support you daily
          </h2>
          <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
            Most people only see a doctor 2–4 times a year, but your blood sugar, blood pressure, weight, stress, and lifestyle change every single day.
          </p>
          <hr className="my-6 md:my-8 mb-6 md:mb-8" />
          <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
            That gap leads to rising blood sugar, blood pressure spikes, weight gain, and emergencies that could have been prevented
          </p>
          <hr className="my-6 md:my-8 mb-6 md:mb-8" />
          <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
            Custodia give you the support, monitoring, and guidance you need between doctor visits — when it matters most.
          </p>
          <div className="mt-10 md:mt-15 ">
            <CustomButton href="/sign-up" title="Get started now" />
          </div>
        </div>
        <div className="md:max-w-lg  ">
          <img
            src={nuts.src}
            alt="Food"
            className="flex align-center md:pt-[146px] pt-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
