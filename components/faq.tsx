import React from "react";
import { useState } from "react";
import FAQ3 from "../components/faq3";
import CustomButton from "./mainButton";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Custodia?",
      answer:
        "Custodia is a digital health program designed to help people reverse chronic metabolic diseases, such as type 2 diabetes, through sustainable lifestyle changes. It offers virtual care, personalized coaching, and medical supervision to address the root causes of these conditions.",
      open: true,
    },
    {
      question: "How does Custodia work?",
      answer:
        "Custodia works by providing personalized health plans that include dietary changes, continuous monitoring, and support from health coaches and doctors. The program focuses on reducing reliance on medications and promoting sustainable lifestyle changes to reverse chronic conditions.",
      open: false,
    },
    {
      question: "Are medications included in the program?",
      answer:
        "No, there are no medications included in the treatment. The goal of the program is to reduce or eliminate your reliance on medication.",
      open: false,
    },
    {
      question:
        "Are there any additional costs for lab tests or medical devices?",
      answer:
        "For those on the Comprehensive plan, routine lab tests and health supplies are included. However, the Basic plan does not cover these, so there may be additional costs depending on your needs.",
      open: false,
    },
    {
      question: "What happens if I need to cancel my enrollment?",
      answer:
        "We really think you'll like our program, however if you would like to cancel your enrollment for any reason, simply send us an email at hi@custodiahealth.com",
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
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24">
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
  );
};

export default Faq;
