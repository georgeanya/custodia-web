import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";
import support from "../public/assets/support.svg";
import FAQ2 from "./faq2";
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

const Section4 = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Personal health coach",
      answer:
        "They will get paired with a highly trained and compassionate health coach to keep them on track on their best days and their worst.",
      open: true,
    },
    {
      question: "Continuous medical supervision",
      answer:
        "They will get paired with a doctor who will monitor their biomarkers and safely de-prescribe any medications they no longer need.",
      open: false,
    },
    {
      question: "Private member community",
      answer:
        "They will get added to a peer group that allows them to share their experiences, challenegs and keep them encouraged",
      open: false,
    },
    {
      question: "Exclusive resources",
      answer:
        "They will get engaging lessons on better eating, fitness, sleep, and stress management to educate them and inspire them to make better choices.",
      open: false,
    },
    {
      question: "Starter kit and supplies",
      answer:
        "They will get all the health devices and testing supplies they need shipped directly to them",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="px-5 md:px-32 bg-[#EFF2FA]">
      <div className=" md:pt-28 pt-20 md:pb-28 pb-20 container mx-auto grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 md:gap-16 gap-4">
        <div className="max-w-xl">
          <h2 className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47]">
            Your patients get all the support they need
          </h2>
          <p className="mt-5 md:mt-6 mb-16 md:mb-24 text-base leading-6  md:text-start md:text-2lg md:max-w-xl text-[#002A47]">
            We give your patients the tools and support they need to reverse
            their condition and take control of their health.
          </p>
          <div className="max-w-xl min-w-full">
            <div>
              {faqs.map((faq, index) => (
                <FAQ2
                  faq={faq}
                  index={index}
                  key={index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
              <div className="mt-10 md:mt-15 ">
                <Link href="https://forms.gle/RZ3DwhQ4wpSX3GAw5">
                  <SustainButton className="text-xs md:text-base font-medium">
                    Refer patients here
                  </SustainButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start md:mt-48 max-w-xl mt-18 ">
          <img src={support.src} alt="Support" className="w-11/12" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
