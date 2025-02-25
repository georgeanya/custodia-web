import React from "react";
import { useState } from "react";
import support from "../public/assets/support.svg";
import FAQ2 from "./faq2";
import CustomButton from "./mainButton";

const Section4 = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Virtual doctor consultations",
      answer:
        "They get expert medical care from from the comfort of their homes. Our virtual consultations provide timely advice and support, ensuring they receive the care they need whenever they need it",
      open: true,
    },
    {
      question: "Personal health coaching",
      answer:
        "They get one-on-one guidance from expert health coaches who are with then every step of the way to keep them motivated, answer their questions, and provide support tailored to their unique lifestyle",
      open: false,
    },
    {
      question: "Continuous medical supervision",
      answer:
        "Health metrics like blood sugar can change quickly during intensive lifestyle change. Our medical team closely monitors their progress to ensure their safety and adjust their plan to keep them on track",
      open: false,
    },
    {
      question: "Personalized nutrition plan",
      answer:
        "Their plan is designed just for them—taking into account their goals, preferences, and health needs. Thet get to enjoy meals that support their journey while still being delicious and satisfying",
      open: false,
    },
    {
      question: "Educational resources",
      answer:
        "They learn everything they need to take control of their health with our easy-to-understand guides, tools, and tips.We help them turn small changes into lifelong success",
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
                <CustomButton
                  href="https://forms.gle/RZ3DwhQ4wpSX3GAw5"
                  title="Refer patients here"
                />
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
