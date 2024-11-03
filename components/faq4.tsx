import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import FAQ3 from "./faq3";
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
      question: "How much does Custodia cost?",
      answer:
        "Custodia offers two membership plans: a Comprehensive plan at ₦180,000 biannually and a Basic plan at ₦40,000 per quarter. Both plans include health coaching, doctor supervision, meal plans, and other resources, but the Comprehensive plan also covers routine lab tests and unlimited health supplies.",
      open: false,
    },
    {
      question: "What do I get when I join Custodia?",
      answer:
        "Upon joining Custodia, you receive access to a personal health coach, medical supervision, unlimited consultations, meal plans, resources, and, depending on your plan, routine lab tests and health supplies.",
      open: false,
    },
    {
      question: "Can type 2 diabetes be reversed?",
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
        <div>
          <Link href="/faq">
            
              <SustainButton>See all FAQs</SustainButton>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
