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
        "You will get paired with a highly trained and compassionate health coach to keep you on track on your best days and your worst.",
      open: true,
    },
    {
      question: "Continuous medical supervision",
      answer:
        "You will get paired with a doctor who will monitor your biomarkers and safely de-prescribe any medications you no longer need",
      open: false,
    },

    {
      question: "Private member community",
      answer:
        "You will get added to a peer group that allows you to share your experiences, challenegs and keep you encouraged",
      open: false,
    },
    {
      question: "Exclusive resources",
      answer:
        "You will get engaging lessons on better eating, fitness, sleep, and stress management to educate you and inspire you to make better choices.",
      open: false,
    },
    {
      question: "Starter kit and supplies",
      answer:
        "You will get all the health devices and testing supplies you need shipped directly to you",
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
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-28 pb-20 bg-[#EFF2FA] grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 md:gap-16 gap-4">
      <div className="max-w-xl">
        <h2 className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47]">
          Get all the support you need
        </h2>
        <p className="mt-5 md:mt-6 mb-16 md:mb-24 text-base leading-6  md:text-start md:text-2lg md:max-w-xl text-[#002A47]">
          We give you the tools and support you need to reverse your condition
          and take control of your health.
        </p>
        <div className="max-w-xl min-w-full">
          <div>
            {faqs.map((faq, index) => (
              <FAQ2 faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
            <div className="mt-10 md:mt-15 ">
              <Link href="/pricing">
                
                  <SustainButton className="text-xs md:text-base font-medium">
                    Get started now
                  </SustainButton>
            
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start md:mt-48 max-w-xl mt-18 ">
        <img src={support.src} alt="Support Image" className="md:w-11/12" />
      </div>
    </div>
  );
};

export default Section4;
