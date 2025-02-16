import React from "react";
import { useState } from "react";
import FAQ from "../components/faq1";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";


const Faq = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Custodia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custodia is an online specialty clinic that helps people reverse chronic metabolic diseases like type 2 diabetes and obesity, through sustainable lifestyle changes. We offers virtual care, personalized coaching, and medical supervision to address the root causes of these conditions."
            }
        },
        {
            "@type": "Question",
            "name": "How does Custodia work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custodia works by addresses the underlying causes of the condition and providing personalized treatment plans that include dietary changes, continuous monitoring, and support from health coaches and doctors. The approach focuses on reducing reliance on medications and promoting sustainable lifestyle changes to reverse chronic conditions."
            }
        },
        {
            "@type": "Question",
            "name": "How much does Custodia cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Custodia offers one membership plans: a Basic plan at ₦60,000 per quarter. The plan includes personal health coaching, unlimited consultations, continuous medical supervision, a personalized nutrition plan, and educational resources."
            }
        },
        {
            "@type": "Question",
            "name": "What do I get when I join Custodia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Upon joining Custodia, you receive access to a personal health coach, medical supervision, unlimited consultations, meal plans, resources, and, depending on your plan, routine lab tests and health supplies."
            }
        },
        {
            "@type": "Question",
            "name": "Can type 2 diabetes be reversed?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a lot of scientific studies have confirmed that through diet changes and weight loss, the process underlying type 2 diabetes can be put into remission without the help of medication."
            }
        },
        {
            "@type": "Question",
            "name": "Are medications included in the program?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, there are no medications included in the treatment. Our goal is to reduce or eliminate your reliance on medication."
            }
        },
        {
            "@type": "Question",
            "name": "How is diabetes reversal measured?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Type 2 diabetes reversal is officially in remission when HbA1c levels drop to below 6.5% (48mmol/mol) and stay there for 3 months without the help of medication."
            }
        },
        {
            "@type": "Question",
            "name": "How long does the Custodia program last?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The duration of the Custodia program can vary based on individual needs and goals, but it is generally designed for ongoing, long-term support until the desired health outcomes are achieved."
            }
        },
        {
            "@type": "Question",
            "name": "How do I join Custodia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Upon joining Custodia, you get personal health coaching, unlimited consultations, continuous medical supervision, a personalized nutrition plan, and educational resources."
            }
        },
        {
            "@type": "Question",
            "name": "I don’t have a smartphone. Can I still join Custodia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The program primarily operates through a mobile app, so a smartphone is essential for participating in the Custodia program effectively."
            }
        },
        {
            "@type": "Question",
            "name": "Do I have to visit a physical facility for the program?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, Custodia is a fully virtual program. All consultations, coaching, and monitoring are done remotely through the app."
            }
        },
        {
            "@type": "Question",
            "name": "Can I join Custodia from outside Nigeria?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can. As long as you have a smartphone with internet access you can be a part of the program. If you are having difficulties joining the program, please send us an email at hi@custodiahealth.com"
            }
        },
        {
            "@type": "Question",
            "name": "Are there any additional costs for lab tests or medical devices?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For those on the Comprehensive plan, routine lab tests and health supplies are included. However, the Basic plan does not cover these, so there may be additional costs depending on your needs"
            }
        },
        {
            "@type": "Question",
            "name": "What happens if I need to cancel my enrollment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We really think you'll like our program, however if you would like to cancel your enrollment for any reason, simply send us an email at hi@custodiahealth.com"
            }
        }
    ]
}

  const [faqs, setFaqs] = useState([
    {
      question: "What is Custodia?",
      answer:
        "Custodia is an online specialty clinic that helps people reverse chronic metabolic diseases like type 2 diabetes and obesity, through sustainable lifestyle changes. We offers virtual care, personalized coaching, and medical supervision to address the root causes of these conditions.",
      open: true,
    },
    {
      question: "How does Custodia work?",
      answer:
        "Custodia works by addresses the underlying causes of the condition and providing personalized treatment plans that include dietary changes, continuous monitoring, and support from health coaches and doctors. The approach focuses on reducing reliance on medications and promoting sustainable lifestyle changes to reverse chronic conditions.",
      open: false,
    },
    {
      question: "How much does Custodia cost?",
      answer:
        "Custodia offers one membership plans: a Basic plan at ₦60,000 per quarter. The plan includes personal health coaching, unlimited consultations, continuous medical supervision, a personalized nutrition plan, and educational resources.",
      open: false,
    },
    {
      question: "What do I get when I join Custodia?",
      answer:
        "Upon joining Custodia, you get personal health coaching, unlimited consultations, continuous medical supervision, a personalized nutrition plan, and educational resources.",
      open: false,
    },
    {
      question: "Can type 2 diabetes be reversed?",
      answer:
        "Yes, a lot of scientific studies have confirmed that through diet changes and weight loss, the process underlying type 2 diabetes can be put into remission without the help of medication.",
      open: false,
    },
    {
      question: "Are medications included in the program?",
      answer:
        "No, there are no medications included in the treatment. Our goal is to reduce or eliminate your reliance on medication.",
      open: false,
    },
    {
      question: "How is diabetes reversal measured?",
      answer:
        "Type 2 diabetes reversal is officially in remission when HbA1c levels drop to below 6.5% (48mmol/mol) and stay there for 3 months without the help of medication.",
      open: false,
    },
    {
      question: "How long does the Custodia program last?",
      answer:
        "The duration of the Custodia program can vary based on individual needs and goals, but it is generally designed for ongoing, long-term support until the desired health outcomes are achieved.",
      open: false,
    },
    {
      question: "How do I join Custodia?",
      answer:
        "To join Custodia, you need to fill out an enrollment form, share your medical history, and make the payment. The program is managed through the Custodia Health app, where you will interact with your care team and track your progress.",
      open: false,
    },
    {
      question: "I don’t have a smartphone, Can I still join Custodia?",
      answer:
        "The program primarily operates through a mobile app, so a smartphone is essential for participating in the Custodia program effectively.",
      open: false,
    },
    {
      question: "Do I have to visit a physical facility for the program?",
      answer:
        "No, Custodia is a fully virtual program. All consultations, coaching, and monitoring are done remotely through the app.",
      open: false,
    },
    {
      question: "Can I join Custodia from outside Nigeria?",
      answer:
        "Yes, you can. As long as you have a smartphone with internet access you can be a part of the program. If you are having difficulties joining the program, please send us an email at hi@custodiahealth.com",
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
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>FAQs - Custodia Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="diabetes, custodia health, prediabetes, diabetes reversal, reverse diabetes, high cholesterol, lifebox labs, hypertension"
        />
        <meta
          name="description"
          content="Explore Custodia Health's FAQs on reversing type 2 diabetes, enrollment, pricing, and program details. Get clear answers to your wellness journey"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/faq" property="og:url" />
        <meta content="FAQs - Custodia Health" property="og:title" />
        <meta
          content="Explore Custodia Health's FAQs on reversing type 2 diabetes, enrollment, pricing, and program details. Get clear answers to your wellness journey"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="1024" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta
          content="An image of the Custodia Health logo"
          property="og:image:alt"
        />
        <meta
          content="https://www.instagram.com/custodiahealth"
          property="og:see_also"
        />
        <meta
          content="https://www.linkedin.com/company/custodia-health"
          property="og:see_also"
        />
        <meta
          content="https://www.facebook.com/custodiahealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/custodiahealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@custodiahealth" />
        <meta name="twitter:creator" content="@custodiahealth" />
        <meta name="twitter:title" content="FAQs - Custodia Health" />
        <meta
          name="twitter:description"
          content="Explore Custodia Health's FAQs on reversing type 2 diabetes, enrollment, pricing, and program details. Get clear answers to your wellness journey"
        />
        <meta
          name="twitter:image"
          content="https://custodiahealth.com/_next/static/media/custodia-metacard.9e18efee.png"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link href="https://custodiahealth.com/faq" rel="canonical" />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="facebook-domain-verification"
          content="nkzhwppp6o24gs2ndw0p0pjyfvijts"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>
      <Navbar1 />
      <div className="px-5 md:pl-[290px] md:pr-[380px]">
        <div className="container mx-auto md:mt-24 mt-16 md:pb-36 pb-24">
          <h1 className="text-4lg  md:text-5xl font-bold text-[#002A47]">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-start mb-7 md:mb-14 md:text-2lg leading-[22px] text-[#476D85]">
            Find answers to commonly asked questions about our treatment,
            enrollment process, and pricing
          </p>
          <div className="max-w-3xl mt-17 md:mt-18">
            {faqs.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
