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
import circle from "../public/assets/circle.png";
import lock from "../public/assets/lock.svg";
import icon from "../public/assets/custodia-icon.svg";
import Section5 from "../components/section5";
import { Input } from "@nextui-org/react";

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

interface IState {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
  };
}

const url =
  "https://custodia-health-api-b53b05e2c965.herokuapp.com/v1/crm/webinar/join";

const Webinar = () => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const [isError, setIsError] = useState(false);

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

    axios
      .post(url, {
        first_name: state.user.first_name,
        last_name: state.user.last_name,
        email: state.user.email,
        phone_number: `234${state.user.phone_number?.slice(1)}`,
      })
      .then((res) => {
        if (res.data.message === "webinar registration successful") {
          setIsSuccessFunc();
          console.log("registeration successful");
        } else {
          setIsErrorFunc();
          console.log("registeration failed");
        }
      })
      .catch((error) => {
        setIsErrorFunc();
        console.log(error);
      });
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
      <div className="px-5 lg:px-32 bg-[#F0F7FF]">
        <div className=" lg:pt-18 pt-[50px] pb-20 lg:pb-36 flex flex-col lg:flex-row lg:justify-between container mx-auto">
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
          <div className={isSuccess || isError ? "hidden" : "block"}>
            <div className="md:w-[460px] px-5 md:px-8 py-[40px] md:py-[52px] bg-[#FFFFFF] rounded-[20px]">
              <p className="text-[22px] leading-[28px] md:text-[24px] md:leading-[30px] font-medium text-[#002A47]">
                Book your seat now
              </p>
              <form onSubmit={handleSubmit}>
                <div className="md:grid grid-cols-2 gap-5 mt-6 md:mt-7">
                  <div className="mb-5 md:mb-[12px]">
                    <Input
                      type="text"
                      name="first_name"
                      label="First name"
                      variant="bordered"
                      value={state.user.first_name}
                      onChange={handleChange}
                      size="md"
                      classNames={{
                        label: "text-[#476D85]",
                        input: "text-[#002A47]",
                        inputWrapper:
                          "border-1 group-data-[focus=true]:border-[#002A47]",
                      }}
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="mb-[12px]">
                    <Input
                      type="text"
                      name="last_name"
                      label="Last name"
                      variant="bordered"
                      value={state.user.last_name}
                      onChange={handleChange}
                      classNames={{
                        label: "text-[#476D85]",
                        input: "text-[#002A47]",
                        inputWrapper:
                          "border-1 group-data-[focus=true]:border-[#002A47]",
                      }}
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="flex mb-5">
                  <img src={lock.src} alt="Icon" />
                  <p className="md:text-[13px] leading-4 text-xs text-[#476D85] ml-1">
                    Your information will never be shared with anyone
                  </p>
                </div>
                <div className="mb-5">
                  <Input
                    type="email"
                    name="email"
                    label="Email"
                    value={state.user.email}
                    onChange={handleChange}
                    classNames={{
                      label: "text-[#476D85]",
                      input: "text-[#002A47]",
                      inputWrapper:
                        "border-1 group-data-[focus=true]:border-[#002A47]",
                    }}
                    placeholder=""
                    variant="bordered"
                    required
                  />
                </div>

                <div className="mb-10">
                  <Input
                    type="tel"
                    name="phone_number"
                    label="Phone number"
                    variant="bordered"
                    value={state.user.phone_number}
                    onChange={handleChange}
                    classNames={{
                      label: "text-[#476D85]",
                      input: "text-[#002A47]",
                      inputWrapper:
                        "border-1 group-data-[focus=true]:border-[#002A47]",
                    }}
                    placeholder=""
                    required
                  />
                  <p className="text-[#476D85] text-[12px] md:text-[13px] leading-4 mt-[12px]">
                    Enter your Nigerian WhatsApp phone number eg. 08012345678
                  </p>
                </div>
                <div>
                  <SustainButton type="submit">Book a seat</SustainButton>
                </div>
              </form>
            </div>
          </div>
          <div className={isSuccess ? "block" : "hidden"}>
            <div className="md:w-[460px] px-8 py-[64px] md:py-[80px] bg-[#FFFFFF] rounded-[20px]">
              <div className="flex justify-center">
                <img src={circle.src} alt="" />
              </div>
              <p className="text-[22px] leading-[28px] md:text-[24px] md:leading-[30px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
                You&apos;re all set
              </p>
              <p className="text-[#476D85] text-[16px] leading-[24px] px-6 md:text-[18px] md:leading-[24px] text-center mb-7 md:mb-8">
                You&apos;ll receive a confirmation email shortly and a brief
                reminder before the webinar
              </p>
              <Link href="https://chat.whatsapp.com/FRbf5Bs3IgE77YDfbZUV1U">
                <SustainButton className="self-center text-sm md:text-base font-medium">
                  Join our WhatsApp community
                </SustainButton>
              </Link>
            </div>
          </div>
          <div className={isError ? "block" : "hidden"}>
            <div className="md:w-[460px] px-8 py-[64px] md:py-[80px] bg-[#FFFFFF] rounded-[20px]">
              <div className="flex justify-center">
                <img src={circle.src} alt="" />
              </div>
              <p className="text-[22px] leading-[28px] md:text-[24px] md:leading-[30px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
                An error occurred
              </p>
              <p className="text-[#476D85] text-[16px] leading-[24px] px-6 md:text-[18px] md:leading-[24px] text-center mb-7 md:mb-8">
                Please make sure you entered a valid email and phone number and
                try again
              </p>
              <SustainButton>Try again</SustainButton>
            </div>
          </div>
        </div>
      </div>
      <Section5 />
      <Footer />
    </div>
  );
};

export default Webinar;
