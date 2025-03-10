import React from "react";
import one from "../public/assets/1.svg";
import two from "../public/assets/2.svg";
import three from "../public/assets/3.svg";
import laptop from "../public/assets/laptop.png";
import phone from "../public/assets/phone.png";
import meal from "../public/assets/meal.png";
import CustomButton from "./mainButton";

const Section7 = () => {
  return (
    <div className="px-5 md:px-32 bg-[#F0F7FF]">
      <div className="md:pt-28 pt-20 md:pb-28 pb-20 container mx-auto">
        <h2 className="text-2xl leading-9 md:text-start md:text-4xl font-bold text-[#002A47] md:mb-[50px] mb-10">
          Getting started is easy
        </h2>
        <div className="md:flex justify-between">
          <div className="max-w-[344px] ">
            <img src={phone.src} alt="Phone" className="" />
            <img
              src={one.src}
              alt="Icon"
              className="md:mt-[30px] mt-6 w-7 md:w-[30px]"
            />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium md:mt-[13px] mt-[12px]">
              Complete your enrollment
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-[26px] text-[#002A47] mt-2">
              Fill out the enrollment form, share your medical history via
              WhatsApp, and make payment.
            </p>
          </div>
          <div className="max-w-[344px] mt-[50px] md:mt-0">
            <img src={laptop.src} alt="Laptop" className="" />
            <img
              src={two.src}
              alt="Icon"
              className="md:mt-[30px] mt-6 w-7 md:w-[30px]"
            />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium md:mt-[13px] mt-[12px]">
              Meet your care team
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-[26px] text-[#002A47] mt-2">
              Your doctor and coach will discuss your personalized treatment
              plan and goals with you.
            </p>
          </div>
          <div className="max-w-[344px] mt-[50px] md:mt-0">
            <img src={meal.src} alt="Menu" className="" />
            <img
              src={three.src}
              alt="Icon"
              className="md:mt-[30px] mt-6 w-7 md:w-[30px]"
            />
            <p className="text-xl md:text-1xxl text-[#002A47] font-medium md:mt-[13px] mt-[12px]">
              Start treatment plan
            </p>
            <p className="text-base leading-6 md:text-lg md:leading-[26px] text-[#002A47] mt-2">
              Through the Custodia Health app, your care team will provide
              support you as you advance toward your goals.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-[60px] ">
          <CustomButton href="/sign-up" title="Get started now" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
