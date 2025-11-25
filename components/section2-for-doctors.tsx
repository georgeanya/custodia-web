import React from "react";
import consult from "../public/assets/consult.png";
import CustomButton from "./mainButton";

const Section2 = () => {
  return (
    <div className="px-5 md:px-32 bg-[#236DAD]">
      <div className="md:pt-28 pt-20 md:pb-36 pb-24 container mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="md:max-w-[550px]">
          <h2 className=" pb-[35px] md:pb-[50px] text-2xl leading-9 md:text-start md:text-4xl font-bold text-white pr-3 md:max-w-[535px]">
            We are your virtual care team, available 24/7
          </h2>
          <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
            15-minute visits aren&apos;t enough to address complex behavioral changes needed for chronic condition management.
          </p>
          <hr className="my-6 md:my-8 mb-6 md:mb-8" />
          <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
            What happens between visits remains a mystery.  Patients struggle to maintain lifestyle changes without ongoing support.
          </p>
          <hr className="my-6 md:my-8 mb-6 md:mb-8" />
          <p className="text-basex md:text-1lg md:leading-8 text-white font-normal md:pr-10">
            Custodia fills the gap between appointments. Think of us as an extension of your practice—providing the continuous support your patients need to make lasting changes.
          </p>
          <div className="mt-10 md:mt-15 ">
            <CustomButton
              href="/research"
              title="Research behind our treatment"
            />
          </div>
        </div>
        <div className="md:max-w-lg  ">
          <img
            src={consult.src}
            alt="Consultation"
            className="flex align-center md:pt-[146px] pt-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
