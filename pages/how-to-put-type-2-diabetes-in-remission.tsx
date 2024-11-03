import Footer from "../components/footer2";
import Navbar1 from "../components/navbar";
import favicon from "../public/assets/favicon.png";
import webinar from "../public/assets/webinar.svg";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import axios from "axios";

import lock from "../public/assets/lock.svg";
import icon from "../public/assets/custodia-icon.svg";
import Section5 from "../components/section5";
import { Input } from "@nextui-org/input";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 20px",
  },
});

interface IState {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    country_code: string;
  };
}

const url = "https://getsustainapp.herokuapp.com/v1/consult";

const Webinar = () => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      country_code: "234",
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.growthanalyst.com.ng/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const setIsSuccessFunc = () => {
    setIsSuccess(!isSuccess);
  };

  const setIsErrorFunc = () => {
    setIsError(!isError);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoadingFunc();
    axios
      .post(url, {
        first_name: state.user.first_name,
        last_name: state.user.last_name,
        email: state.user.email,
        phone_number: state.user.phone_number?.slice(1),
        country_code: state.user.country_code,
      })
      .then((res) => {
        if (
          res.data.message === "user previously subscribed" ||
          "user subscribed successfully"
        ) {
          setIsSuccessFunc();
        } else {
          setIsErrorFunc();
        }
      })
      .catch((error) => {
        setIsErrorFunc();
        console.log(error);
      });
  };

  const setIsLoadingFunc = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>How to Put Type 2 Diabetes in Remission - Custodia Health</title>
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
          content=" Join our webinar, 'How to Put Type 2 Diabetes in Remission', to learn effective strategies for reversing type 2 diabetes through lifestyle changes. Discover actionable tips and expert insights!"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta
          content="https://custodiahealth.com/privacy-policy"
          property="og:url"
        />
        <meta
          content="How to Put Type 2 Diabetes in Remission - Custodia Health"
          property="og:title"
        />
        <meta
          content=" Join our webinar, 'How to Put Type 2 Diabetes in Remission', to learn effective strategies for reversing type 2 diabetes through lifestyle changes. Discover actionable tips and expert insights!"
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
          content="How to Put Type 2 Diabetes in Remission - Custodia Health"
        />
        <meta
          name="twitter:description"
          content=" Join our webinar, 'How to Put Type 2 Diabetes in Remission,' to learn effective strategies for reversing type 2 diabetes through lifestyle changes. Discover actionable tips and expert insights!"
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
      <div className="px-5 lg:px-32 lg:pt-18 pt-[50px] pb-20 lg:pb-36 flex flex-col lg:flex-row lg:justify-between bg-[#F0F7FF]">
        <div className="max-w-[511px] md:mt-5 mb-15 md:mb-0">
          <p className="text-[#002A47] text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] font-medium">
            FREE WEBINAR
          </p>
          <p className="text-[#002A47] text-[34px] leading-[43px] md:text-[48px] md:leading-[60px] font-bold mt-2 md:mt-3 mb-[24px]">
            How to put type 2 diabetes in remission
          </p>

          <div className="text-[#476D85] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px]">
            <p className="my-[24px]">
              Learn how using food as medicine can help you reduce medication
              use and even reverse type 2 diabetes.
            </p>
            <p>In this webinar, you will learn:</p>
            <ul className=" list-disc ml-5 md:ml-6 my-[24px]">
              <li>What the root cause of type 2 diabetes is</li>
              <li>How to treat the root cause of type 2 diabetes</li>
              <li>How food can address the root cause of type 2 diabetes</li>
            </ul>
            <p>
              You will also have the opportunity to ask questions during our
              live Q&A session!
            </p>
          </div>
        </div>
        <div className="md:w-[460px]">
          <Input type="email" label="Email" />
        </div>
      </div>
      <Section5 />
      <Footer />
    </div>
  );
};

export default Webinar;
