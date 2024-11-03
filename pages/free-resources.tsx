import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import StartSuccess from "../components/startResourceSuccess";
import StartError from "../components/startResourceError";
import Navbar3 from "../components/navbar3";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import Head from "next/head";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
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

const url = "https://getsustainapp.herokuapp.com/v1/subscribe";

const TestForm = ({ start }: any) => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
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

  // useEffect(() => {
  //   if (isSuccess) {
  //     {
  //       `gtag('event', 'conversion', {'send_to': 'AW-11147200607/WS42CIf-tJgYEN-Qs8Mp'});`;
  //     }
  //   }
  // }, [isSuccess]);

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
        console.log(state);
      });
  };

  const setIsLoadingFunc = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Free Resources - Custodia Health</title>
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
          content="Get free resources and tips to help you improve your metabolic health"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta
          content="https://custodiahealth.com/free-resources"
          property="og:url"
        />
        <meta content="Free Resources - Custodia Health" property="og:title" />
        <meta
          content="Get free resources and tips to help you improve your metabolic health"
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
        <meta name="twitter:title" content="Free Resources - Custodia Health" />
        <meta
          name="twitter:description"
          content="Get free resources and tips to help you improve your metabolic health"
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
          href="https://custodiahealth.com/free-resources"
          rel="canonical"
        />
        <link href="https://custodiahealth.com/free-resources" rel="home" />
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
      <div className="max-w-m mx-5 sm:mx-auto mt-17">
        <div className={isSuccess || isError ? "hidden" : "block"}>
          <h1 className=" leading-tight  md:text-3xl text-2xl md:text-start font-bold text-[#002A47] ">
            Download our FREE ebook
          </h1>
          <p className="mt-4 text-base md:text-lg md:leading-6 font-normal md:text-start text-[#476D85] mb-9">
            Download our free ebook to help you get started on your diabetes
            reversal journey
          </p>
          <form onSubmit={handleSubmit}>
            <div className="md:grid md:grid-cols-2 md:gap-5">
              <div className="mb-7">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-[#002A47]"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={state.user.first_name}
                  onChange={handleChange}
                  className="border h-11 md:h-12 border-gray-300 text-[#002A47] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-7">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-[#002A47]"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={state.user.last_name}
                  onChange={handleChange}
                  className="border h-11 md:h-12 border-gray-300 text-[#002A47] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="mb-7">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#002A47]"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={state.user.email}
                onChange={handleChange}
                className="border h-11 md:h-12 border-gray-300 text-[#002A47] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
            <div className="mb-[50px]">
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-[#002A47]"
              >
                Nigerian WhatsApp phone number
              </label>
              <input
                type="text"
                name="phone_number"
                value={state.user.phone_number}
                onChange={handleChange}
                className="border h-11 md:h-12 border-gray-300 text-[#002A47] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              />
              <p className="text-[#476D85] text-[12px] md:text-[13px] leading-4 mt-[10px]">
                Enter your Nigerian WhatsApp phone number eg. 08012345678
              </p>
            </div>
            <div className="bg-[#EEF3F6] p-4 mt-10 md:mt-11 mb-5 md:mb-6 rounded-lg">
              <p className="text-[#476D85] text-xs md:text-sm">
                By filling out this form, you agree to Custodia Health’s{" "}
                <a
                  className="text-[#4F9EEA] underline font-medium"
                  href="https://priv-health.notion.site/Terms-of-use-254e525466a3493687d94fd671d93ad8"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  className="text-[#4F9EEA] underline font-medium"
                  href="https://priv-health.notion.site/Privacy-policy-2f70cbb81ab843ca920e87d2b32caa37"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="mb-15 md:mb-28">
              {isLoading ? (
                <SustainButton
                  className="self-center text-sm md:text-base font-medium"
                  type="submit"
                >
                  Get your FREE ebook
                </SustainButton>
              ) : (
                <SustainButton
                  className="self-center text-sm md:text-base font-medium disabled:opacity-65"
                  type="submit"
                >
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#4F9EEA]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="white"
                      />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </SustainButton>
              )}
            </div>
          </form>
        </div>
        <div className={isSuccess ? "block" : "hidden"}>
          <StartSuccess />
        </div>
        <div className={isError ? "block" : "hidden"}>
          <StartError toggle={setIsErrorFunc} toggleFav={setIsLoadingFunc} />
        </div>
      </div>
    </div>
  );
};

export default TestForm;
