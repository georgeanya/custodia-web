import React from "react";
import Head from "next/head";
import circle from "../public/assets/circle.png";
import favicon from "../public/assets/favicon.png";
import Navbar3 from "../components/navbar3";
import CenterButton from "@/components/centerButton";

const PaymentSuccesful = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Payment Successful - Custodia Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
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
        <CenterButton
          title="Join our WhatsApp community"
          href="https://chat.whatsapp.com/FRbf5Bs3IgE77YDfbZUV1U"
        />
      </div>
    </>
  );
};

export default PaymentSuccesful;
