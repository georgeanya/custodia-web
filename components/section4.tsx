import React from "react";
import { useState } from "react";
import support from "../public/assets/support.jpeg";
import FAQ2 from "./faq2";
import CustomButton from "./mainButton";


const Section4 = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Virtual doctor consultations",
      answer:
        "Access expert medical care from from the comfort of your home. Our virtual consultations provide timely advice and support, ensuring you receive the care you need whenever you need it",
      open: true,
    },
    {
      question: "Personal health coaching",
      answer:
        "Get one-on-one guidance from expert health coaches who are with you every step of the way. They’ll keep you motivated, answer your questions, and provide support tailored to your unique lifestyle",
      open: false,
    },

    {
      question: "Continuous medical supervision",
      answer:
        "Health metrics like blood sugar can change quickly during diabetes reversal. Our medical team closely monitors your progress to ensure your safety and adjust your plan to keep you on track.",
      open: false,
    },
    {
      question: "Personalized nutrition plan",
      answer:
        "Your plan is designed just for you—taking into account your goals, preferences, and health needs. Enjoy meals that support your journey while still being delicious and satisfying",
      open: false,
    },
    {
      question: "Educational resources",
      answer:
        "Learn everything you need to take control of your health with our easy-to-understand guides, tools, and tips. We’ll help you turn small changes into lifelong success",
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
            Get all the support you need
          </h2>
          <p className="mt-5 md:mt-6 mb-16 md:mb-24 text-base leading-6  md:text-start md:text-2lg md:max-w-xl text-[#002A47]">
            We give you the tools and support you need to reverse your condition
            and take control of your health.
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
                <CustomButton href="/sign-up" title="Get started now" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start md:mt-48 max-w-xl mt-18 ">
          <img src={support.src} alt="Support" className="md:w-11/12" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
