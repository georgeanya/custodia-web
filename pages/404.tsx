import React from "react";
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";
import CustomButton from "@/components/mainButton";

const ErrorPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>404 - Custodia Health</title>
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
          content="Page not found at Custodia Health? Don't worry! Navigate back to our homepage or start your enrollment journey with us today."
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/404" property="og:url" />
        <meta property="og:type" content="custodiahealth.com" />
        <meta content="404 - Custodia Health" property="og:title" />
        <meta
          content="Page not found at Custodia Health? Don't worry! Navigate back to our homepage or start your enrollment journey with us today."
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
        <meta name="twitter:title" content="404 - Custodia Health" />
        <meta
          name="twitter:description"
          content="Page not found at Custodia Health? Don't worry! Navigate back to our homepage or start your enrollment journey with us today."
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
        <link href="https://custodiahealth.com/404" rel="canonical" />
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
      <Navbar1 />
      <div className="px-5 md:px-32">
        <div className="container mx-auto  pt-12 md:pt-32 pb-24 md:pb-36">
          <h1 className="text-4lg md:text-start md:text-5xl font-bold text-[#002A47] md:max-w-3xl">
            Whoops... This page is not available
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-start md:text-2lg text-[#476D85] md:max-w-3xl">
            Unfortunaltely, we couldn&apos;t find the page you are looking for.
            We suggest you go back to our homepage
          </p>
          <div className="mt-8 md:mt-14 ">
            <CustomButton href="/" title="Go back home" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
