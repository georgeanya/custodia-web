import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import one from "../public/assets/1.svg";
import two from "../public/assets/2.svg";
import three from "../public/assets/3.svg";
import laptop from "../public/assets/laptop.png";
import phone from "../public/assets/phone.png";
import meal from "../public/assets/meal.png";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Section7 = () => {
  return (
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-28 pb-20 bg-[#F0F7FF]">
      <h2 className="text-2xl leading-9 md:text-start md:text-4xl font-bold text-[#002A47] md:mb-[50px] mb-10">
        Getting started is easy
      </h2>
      <div className="md:flex justify-between">
        <div className="max-w-[344px] ">
          <img src={phone.src} alt="Phone Image" className="" />
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
            Your doctor and coach will discuss your personalized treatment plan
            and goals with you.
          </p>
        </div>
        <div className="max-w-[344px] mt-[50px] md:mt-0">
          <img src={meal.src} alt="Menu Image" className="" />
          <img
            src={three.src}
            alt="Icon"
            className="md:mt-[30px] mt-6 w-7 md:w-[30px]"
          />
          <p className="text-xl md:text-1xxl text-[#002A47] font-medium md:mt-[13px] mt-[12px]">
            Start treatment plan
          </p>
          <p className="text-base leading-6 md:text-lg md:leading-[26px] text-[#002A47] mt-2">
            Through the Custodia Health app, your care team will provide support
            you as you advance toward your goals.
          </p>
        </div>
      </div>
      <div className="mt-10 md:mt-[60px] ">
        <Link href="/pricing">
          
            <SustainButton className="text-xs md:text-base font-medium">
              Get started now
            </SustainButton>
         
        </Link>
      </div>
    </div>
  );
};

export default Section7;
