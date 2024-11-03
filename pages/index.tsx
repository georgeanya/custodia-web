import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";
import Section5 from "../components/section5";
import Faq from "../components/faq4";
import Section7 from "../components/section7";
import Navbar from "../components/navbar";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/home-metacard.jpg";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Custodia Health - Type 2 Diabetes, Prediabetes, and Obesity Reversal
        </title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="diabetes, custodia health, prediabetes, diabetes reversal, obesity, reverse diabetes, high cholesterol, lifebox labs, hypertension"
        />
        <meta
          name="description"
          content="Custodia Health is an online specialty clinic for safely reversing chronic metabolic disease like type 2 diabetes and prediabetes"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/" property="og:url" />
        <meta
          content="Custodia Health - Type 2 Diabetes, Prediabetes, and Obesity Reversal"
          property="og:title"
        />
        <meta
          content="Custodia Health is an online specialty clinic for safely reversing chronic metabolic disease like type 2 diabetes and prediabetes"
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
          content="https://www.instagram.com/custodiahealth/"
          property="og:see_also"
        />
        <meta
          content="https://www.youtube.com/channel/UCiGJtOjJyegn_5naUTUFMuQ"
          property="og:see_also"
        />
        <meta
          content="https://www.linkedin.com/company/custodia-health/"
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
          content="Custodia Health - Type 2 Diabetes, Prediabetes, and Obesity Reversal"
        />
        <meta
          name="twitter:description"
          content="Custodia Health is an online specialty clinic for safely reversing chronic metabolic disease like type 2 diabetes and prediabetes"
        />
        <meta
          name="twitter:image"
          content="https://custodiahealth.com/_next/static/media/home-metacard.5f12a1b8.jpg"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link href="https://custodiahealth.com/" rel="canonical" />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="nkzhwppp6o24gs2ndw0p0pjyfvijts"
        />
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "h4rdrt80ge");`}
        </script>
      </Head>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
      <Faq />
      <Footer />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://custodiahealth.com/#organization",
            "name": "Custodia Health",
            "image": "https://custodiahealth.com/custodia-logo.png",
            "logo": "https://custodiahealth.com/custodia-logo.png",
            "url": "https://custodiahealth.com",
            "sameAs": [
                "https://facebook.com/custodiahealth",
                "https://x.com/custodiahealth",
                "https://instagram.com/custodiahealth",
                "https://youtube.com/channel/UCiGJtOjJyegn_5naUTUFMuQ",
                "https://linkedin.com/company/custodia-health",
                "https://tiktok.com/@custodiahealth",
                "https://custodiahealth.com"
            ],
            "description": "Custodia is an online nutrition clinic that safely reverses type 2 diabetes, obesity, and prediabetes without the use of medication",
            "email": "hi@custodiahealth.com",
            "telephone": "+234-704-055-9724",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "telephone": "+234-704-055-9724",
                    "areaServed": "NG",
                    "email": "hi@custodiahealth.com",
                    "availableLanguage": "en-US"
                }
            ],
            "founder": {
                "@type": "Person",
                "name": "Joseph Anya",
                "sameAs": [
                    "https://x.com/josephanyaa",
                    "https://instagram.com/josephanyaa",
                    "https://linkedin.com/in/joseph-anya",
                    "https://f6s.com/josephanya",
                    "https://crunchbase.com/person/joseph-anya"
                ],
                "image": "Paris",
                "birthPlace": "Lagos, Nigeria",
                "birthDate": "1998-05-09T00:00:00+01:00",
                "gender": "Male",
                "nationality": "Nigeria",
                "jobTitle": "Founder and CEO",
                "alumniOf": "University of Lagos",
                "brand": [
                    "Lifebox Labs, Custodia Health, Priv Heath"
                ],
                "worksFor": {
                    "@type": "Organization",
                    "name": "Lifebox Labs"
                }
            },
            "foundingDate": "2022-08-01T00:00:00+01:00",
            "foundingLocation": "Lagos, Nigeria",
            "parentOrganization": "Lifebox Labs"
          }`,
        }}
      ></script>
    </div>
  );
};

export default Home;
