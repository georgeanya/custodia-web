import React from "react";
import type2 from "../public/assets/type2.svg";
import hyper from "../public/assets/hyper.svg";
import pret2 from "../public/assets/pret2.svg";
import dysli from "../public/assets/dysli.svg";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
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

const Section1 = () => {
  return (
    <div className="px-5 sm:px-8 md:px-32 ">
       <div className="md:pt-28 pt-20 md:pb-36 pb-24  flex justify-between flex-col md:flex-row container mx-auto">
      <div className="md:max-w-[535px]">
        <h2 className=" text-[28px] leading-[35px] md:text-start md:text-4xl font-bold text-[#002A47]">
          We treat multiple chronic metabolic diseases
        </h2>
        <p className="mt-5 md:mt-6 text-base leading-6 md:text-start md:text-1lg text-[#002A47] md:max-w-3xl">
          Whatever your condition is, we have a personalized program for you
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 md:gap-y-6 gap-x-5 grid-rows-4 grid-cols-1 gap-y-[15px] mt-[42px] md:mt-0">
        <div className="flex md:w-[275px] bg-[#4A4875] py-[16px] md:py-5 px-5 md:px-[30px] rounded-[20px]">
          <img src={type2.src} alt="Icon" className="md:w-[50px] w-11" />
          <p className="ml-5 text-base md:text-xl leading-8 font-medium text-white flex justify-center self-center">
            Type 2 diabetes
          </p>
        </div>
        <div className="flex md:w-[275px] bg-[#236DAD] py-[16px] md:py-5 px-5 md:px-[30px] rounded-[20px]">
          <img src={pret2.src} alt="Icon" className="md:w-[50px] w-11" />
          <p className="ml-5 text-base md:text-xl leading-8 font-medium text-white flex justify-center self-center">
            Prediabetes
          </p>
        </div>
        <div className="flex md:w-[275px] bg-[#112D50] py-[16px] md:py-5 px-5 md:px-[30px] rounded-[20px]">
          <img src={hyper.src} alt="Icon" className="md:w-[50px] w-11" />
          <p className="ml-5 text-base md:text-xl leading-8 font-medium text-white flex justify-center self-center">
            Obesity
          </p>
        </div>
        <div className="flex md:w-[275px] bg-[#005A61] py-[16px] md:py-5 px-5 md:px-[30px] rounded-[20px]">
          <img src={dysli.src} alt="Icon" className="md:w-[50px] w-11" />
          <p className="ml-5 text-base md:text-xl leading-8 font-medium text-white flex justify-center self-center">
          Gestational diabetes
          </p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Section1;
