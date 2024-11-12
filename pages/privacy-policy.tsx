import React from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";

const Policy = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Privacy Policy - Custodia Health</title>
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
        <meta name="description" content="Custodia Health's privacy policy" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta
          content="https://custodiahealth.com/privacy-policy"
          property="og:url"
        />
        <meta content="Privacy policy - Custodia Health" property="og:title" />
        <meta
          content="Custodia Health's privacy policy"
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
        <meta name="twitter:title" content="Privacy policy - Custodia Health" />
        <meta
          name="twitter:description"
          content="Custodia Health's privacy policy"
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
        <link
          href="https://custodiahealth.com/privacy-policy"
          rel="canonical"
        />
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
      <div className="px-5 md:px-72">
      <div className=" md:mt-24 mt-16 pb-32 container mx-auto">
        <h1 className="text-4lg md:text-center md:text-start md:text-5xl font-bold text-[#002A47]">
          Privacy policy
        </h1>
        <p className="mt-5 md:mt-6 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          Your privacy is important to us. It is Custodia&apos;s policy to
          respect your privacy regarding any information we may collect from you
          across our website, https://custodiahealth.org, and other sites we own and
          operate.
        </p>

        <p className="mt-5 md:mt-7 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we&apos;re collecting
          it and how it will be used.
        </p>

        <p className="mt-5 md:mt-7 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store,
          we&apos;ll protect within commercially acceptable means to prevent
          loss and theft, as well as unauthorized access, disclosure, copying,
          use or modification.
        </p>

        <p className="mt-5 md:mt-7 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          We don&apos;t share any personally identifying information publicly or
          with third-parties, except when required to by law.
        </p>

        <p className="mt-5 md:mt-7 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </p>

        <p className="mt-5 md:mt-7 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>

        <p className="mt-5 md:mt-7 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </p>

        <p className="mt-5 md:mt-5 text-base md:text-center md:text-start md:text-xlg text-[#476D85]">
          This policy is effective as of 28 January 2021.
        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
