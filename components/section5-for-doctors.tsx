import React from "react";
import image from "../public/assets/image.svg";
import image1 from "../public/assets/image1.svg";
import left from "../public/assets/left.png";
import right from "../public/assets/right.png";
import video from "../public/assets/video.svg";
import playicon from "../public/assets/playicon.png";

const Section5 = () => {
  return (
    <div className="px-5 md:px-32">
      <div
        className="container mx-auto md:pt-28 pt-20 md:pb-36 pb-24"
        id="patient_stories"
      >
      <h2 className="pr-8 text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47]">
        Don’t just take our word for it
      </h2>
      <p className="mt-5 md:mt-6 text-base md:text-start mb-7 md:mb-14 md:text-xl leading-6 md:max-w-xl text-[#002A47]">
        See what some of our patients say about us.
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-7">
        <div className="mt-8 md:mt-0 px-5 py-10 md:px-12 md:py-14 rounded-2xl bg-[#F0F3F4] flex flex-col justify-between">
          <p className="text-xl md:text-1xl md:leading-9 text-[#002A47] ">
            “Custodia has changed my life. I feel better, weigh less, and have
            control my blood sugar well. I am excited about continuing to make
            better choices about my health so I can be there for my family.”
          </p>
          <div className="pt-10 flex ">
            <img
              src={image.src}
              alt="Avatar"
              width="60px"
              className="w-12 md:w-15"
            />
            <div className="self-center pl-3">
              <p className="font-medium text-base leading-5 md:leading-6 md:text-lg text-[#002A47]">
                Ezeogo Mang
              </p>
              <p className="text-xs md:text-sm leading-4 text-[#476D85]">
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="mt-8 md:mt-0 px-5 py-10 md:px-12 md:py-14 rounded-2xl bg-[#F0F3F4] flex flex-col justify-between">
            <p className="text-xl md:text-1xl md:leading-9 text-[#002A47] ">
              “I’ve found a new side to me that I didn’t realize was buried
              under all the weight and the bad health. Before Custodia, I didn’t
              think my diabetes was reversible. Custodia has given me my life
              back.”
            </p>
            <div className="pt-10 flex ">
              <img
                src={image1.src}
                alt="Avatar"
                width="60px"
                className="w-12 md:w-15"
              />
              <div className="self-center pl-3">
                <p className="font-medium text-base leading-5 md:leading-6 md:text-lg text-[#002A47]">
                  Uwa Uye
                </p>
                <p className="text-xs md:text-sm leading-4 text-[#476D85]">
                  Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-16">
        <div className="md:w-60 w-40 mb-10 md:mb-0">
          <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
            95%
          </p>
          <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
            of patients reduced or eliminated their medications
          </p>
        </div>
        <div className="md:w-60 w-40 mb-10 md:mb-0">
          <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
            1.5%
          </p>
          <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
            Average HbA1c reduction among 90% patients
          </p>
        </div>
        <div className="md:w-60 w-40">
          <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
            ₦200,000
          </p>
          <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
            Average yearly cost savings on medications
          </p>
        </div>
        <div className="md:w-60 w-40">
          <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
            15%
          </p>
          <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
            Average weight loss after 6 months
          </p>
        </div>
      </div>
      </div></div>
  );
};

export default Section5;
