import React from "react";
import { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import hero from "../public/assets/hero-for-doctors.png";
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

const Hero = () => {
  return (
    <div className="bg-[#F0F7FF] px-5 md:px-32">
      <div className="container mx-auto md:pt-18 pb-20 md:pb-36 flex flex-col md:flex-row md:justify-between ">
        <div className="md:max-w-lg pt-15 pb-17 md:pb-0 md:pt-18">
          <h1 className="md:pr-14  text-4lg md:text-start md:text-5xl font-bold text-[#002A47]">
            Effective{" "}
            <span className="text-[#4F9EEA]">metabolic disease care</span> for
            your patients
          </h1>
          <p className="mt-5 md:mt-6 text-base font-normal md:pr-8 md:text-start md:text-2lg text-[#476D85]">
            Custodia&apos;s virtual care program helps patients safely and
            sustainably reverse chronic metabolic using simple lifestyle changes
          </p>
          <div className="mt-8">
            <Link href="https://forms.gle/RZ3DwhQ4wpSX3GAw5">
              <SustainButton className="text-xs md:text-base font-medium">
                Refer patients here
              </SustainButton>
            </Link>
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
