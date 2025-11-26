import React from "react";
import { useState } from "react";
import FAQ3 from "./faq3";
import CustomButton from "./mainButton";


const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Custodia?",
      answer:
        "Custodia is a virtual care program that empowers people to reverse chronic metabolic diseases like type 2 diabetes through sustainable lifestyle change.",
      open: true,
    },
    {
      question: "How does Custodia work?",
      answer:
        "Custodia works by addresses the underlying causes of the condition and providing personalized treatment plans that include dietary changes, continuous monitoring, and support from health coaches and doctors. The approach focuses on reducing reliance on medications and promoting sustainable lifestyle changes to reverse chronic conditions.",
      open: false,
    },
    {
      question: "Does Custodia replace my doctor? ",
      answer:
        "Custodia offers one membership plans: a Basic plan at ₦60,000 per quarter. The plan includes personal health coaching, unlimited consultations, continuous medical supervision, a personalized nutrition plan, and educational resources.",
      open: false,
    },
    {
      question: "What results can I expect?",
      answer:
        "Upon joining Custodia, you get personal health coaching, unlimited consultations, continuous medical supervision, a personalized nutrition plan, and educational resources.",
      open: false,
    },
    {
      question: "Is Custodia right for me?",
      answer:
        "Yes, a lot of scientific studies have confirmed that through diet changes and weight loss, the process underlying type 2 diabetes can be put into remission without the help of medication.",
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
    <div className="px-5 md:px-32 bg-[#F0F7FF]">
      <div className="md:pt-28 pt-20 md:pb-36 pb-24 container mx-auto">
        <h2 className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47] mb-14 pr-8">
          Frequently asked questions
        </h2>
        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQ3 faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div className="mt-10 md:mt-15">
          <CustomButton title="See all FAQs" href="/faq" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
