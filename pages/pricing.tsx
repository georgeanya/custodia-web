import React from "react";
import icon from "../public/assets/icon.svg";
import Faq from "../components/faq";
import Navbar from "../components/navbar4";
import Footer from "../components/footer";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";
import CustomButton from "@/components/mainButton";

const Pricing = (props: any) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Plans &amp; pricing - Custodia Health</title>
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
          content="Choose a membership plan that’s right for you"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/pricing" property="og:url" />
        <meta content="Plans & pricing - Custodia Health" property="og:title" />
        <meta
          content="Choose a membership plan that’s right for you"
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
          content="Plans & pricing - Custodia Health"
        />
        <meta
          name="twitter:description"
          content="Choose a membership plan that’s right for you"
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
        <link href="https://custodiahealth.com/pricing" rel="canonical" />
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
      </Head>
      <Navbar />
      <div className="px-5 md:px-66 md:pt-24 pt-16 pb-24 md:pb-36 bg-[#F0F7FF]">
        <div className="flex justify-center">
          <h1 className="text-4lg text-center md:text-5xl font-bold text-[#002A47] mb-12 max-w-1xl">
            Choose the perfect plan for you
          </h1>
        </div>
        <div>
          <div className="border rounded-2xl py-9 md:grid grid-cols-2 gap-0 md:py-10 bg-white">
            <div className="px-5 md:px-[30px] md:border-r md:max-w-md">
              <p className="text-xs font-medium  leading-4 text-[#4F9EEA]">
                BASIC
              </p>
              <p className="mt-2 text-1xxl md:text-[30px] leading-[38px] font-medium text-[#002A47] ">
                ₦50,000
                <span className=" text-base">/quarterly</span>
              </p>
              <p className="mt-3  mb-5 md:text-[16px] text-[16px] leading-[22px] text-[#002A47] md:max-w-[320px]">
                Get the tools and support you need to reverse your condition
                with a{" "}
                <a
                  href="https://lifebox-labs.notion.site/Custodia-6-month-money-back-guarantee-9109266d94834c57b47a869a6bed308d"
                  className="text-[#4F9EEA] font-bold"
                >
                  3-month money-back guarantee
                </a>
              </p>
              <div className="mb-[24xp] md:mb-0">
                <CustomButton href="/sign-up" title="Choose this plan" />
              </div>
            </div>
            <hr className="mt-[24px] mb-[30px] md:mb-8 mx-5 md:mx-[30px] md:hidden" />
            <div className="md:px-[30px] px-5">
              <div className="flex">
                <img
                  src={icon.src}
                  className="self-center w-2.5 md:w-3"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Personal lifestyle and diet coaching
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="self-center w-2.5 md:w-3"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Medical supervision
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="self-center w-2.5 md:w-3"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Meal plans, lessons, and resources
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="md:self-center self-start w-2.5 md:w-3 mt-1 md:mt-0"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Personalized care plan
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="md:self-center self-start w-2.5 md:w-3 mt-1 md:mt-0"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Private member community
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="self-center w-2.5 md:w-3"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Discounts on lab tests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Pricing;
