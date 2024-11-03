import React from "react";
import { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import hero from "../public/assets/hero.svg";
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
  const names = [
    "hypertension",
    "dyslipidemia",
    "prediabetes",
    "type 2 diabetes",
  ];

  const [newName, setnewName] = useState("type 2 diabetes");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <div className="px-5 lg:px-32 lg:pt-18 pb-20 lg:pb-36 flex flex-col lg:flex-row lg:justify-between bg-[#F0F7FF]">
      <div className="md:max-w-lg  pt-15 pb-17 lg:pb-0 lg:pt-18">
        <h1 className="  text-4lg lg:text-start lg:text-5xl font-bold text-[#002A47] ">
          Reverse prediabetes, type 2 diabetes, and obesity 
        </h1>
        <p className="mt-5 md:mt-6 text-base font-normal lg:pr-8 lg:text-start lg:text-2lg text-[#476D85]">
          Custodia&apos;s virtual care program helps people safely and
          sustainably reverse chronic metabolic using simple lifestyle changes
        </p>
        <div className="mt-8 ">
          <Link href="/pricing">
            
              <SustainButton className="text-xs lg:text-base font-medium">
                Get started now
              </SustainButton>
            
          </Link>
        </div>
      </div>
      <div className="lg:w-2/4 flex lg:p-10 justify-center">
        <img src={hero.src} alt="Custodia Hero" />
      </div>
    </div>
  );
};

export default Hero;
