import React from "react";
import Head from "next/head";
import circle from "../public/assets/circle.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Navbar3 from "../components/navbar3";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  fontSize: "15px",
  fontWeight: "500",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "16px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "14px 20px",
  },
});

const PaymentSuccesful = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Payment Successful - Custodia Health</title>
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
          content="Fill this form to book a consultation at Custodia Health"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/sign-up" property="og:url" />
        <meta
          content="Book a consultation - Custodia Health"
          property="og:title"
        />
        <meta
          content="Fill this form to book a consultation at Custodia Health"
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
        <meta
          name="twitter:title"
          content="Book a consultation - Custodia Health"
        />
        <meta
          name="twitter:description"
          content="Fill this form to book a consultation at Custodia Health"
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
        <link href="https://custodiahealth.com/sign-up" rel="canonical" />
        <link href="https://custodiahealth.com/sign-up" rel="home" />
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
      </Head>
      <Navbar3 />
      <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
        <div className="flex justify-center mt-24">
          <img src={circle.src} alt="" className="w-20" />
        </div>
        <p className="text-[22px] leading-[28px] md:text-[28px] md:leading-[35px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
          Payment successful
        </p>
        <p className="text-[#476D85] text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] text-center mb-7 md:mb-8">
          Thank you for joining Custodia. Our enrollment advisor will contact
          you in 24 hours to complete your enrollment
        </p>
        <Link href="https://chat.whatsapp.com/FRbf5Bs3IgE77YDfbZUV1U">
          <SustainButton className="self-center text-sm md:text-base font-medium">
            Join our WhatsApp community
          </SustainButton>
        </Link>
      </div>
    </>
  );
};

export default PaymentSuccesful;
