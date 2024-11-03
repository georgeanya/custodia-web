import React from "react";
import Navbar from "./navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%  ",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const StartTestSuccess = () => {
  return (
    <div>
      <h1 className=" leading-tight  md:text-3xl text-1xl md:text-start font-bold text-[#002A47] ">
        Your result has been sent
      </h1>
      <p className="mt-4 text-base leading-[23px] md:leading-[27px] md:text-lg font-normal md:text-start text-[#476D85] mb-7">
        Your result has been sent to your phone number. Please check your
        WhatsApp
      </p>
      <Link href="">
       
          <SustainButton
            className="self-center text-sm md:text-base font-medium"
            type="submit"
          >
            Take the test again
          </SustainButton>
        
      </Link>
    </div>
  );
};

export default StartTestSuccess;
