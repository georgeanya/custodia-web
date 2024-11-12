import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import nuts from "../public/assets/meeting.png";
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

const Section2 = () => {
  return (
    <div className="px-5 md:px-32 bg-[#236DAD]">
      <div className="md:pt-28 pt-20 md:pb-36 pb-24 container mx-auto flex flex-col md:flex-row md:justify-between">
      <div className="md:max-w-[550px]">
        <h2 className=" pb-[35px] md:pb-[50px] text-2xl leading-9 md:text-start md:text-4xl font-bold text-white pr-3 md:max-w-[535px]">
          Your patients are in safe hands
        </h2>
        <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
          Our providers serve as dedicated metabolic disease specialists,
          complementing your role as the primary care doctor for your patients.
        </p>
        <hr className="my-6 md:my-8 mb-6 md:mb-8" />
        <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
          They monitor biomarkers, provide metabolic health counseling, and
          safely deprescribe medications when appropriate.
        </p>
        <hr className="my-6 md:my-8 mb-6 md:mb-8" />
        <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
          We understand the importance of collaboration and communication. We
          keep you informed of any changes to your patient&apos;s medication
          regimens, ensuring seamless coordination of care.
        </p>
        <div className="mt-10 md:mt-15 ">
          <Link href="/research">
            
              <SustainButton className="text-xs md:text-base font-medium">
                Research behind our treatment
              </SustainButton>
            
          </Link>
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
