import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import axios from "axios";
import StartError from "./startError";
import StartSuccess from "./startSuccess";
import blue from "../public/assets/blue.png";
import white from "../public/assets/white.png";
import icon from "../public/assets/icon.svg";

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
    padding: "17px 20px",
  },
});

const SustainWhiteButton = styled(Button)({
  background: "white !important",
  fontFamily: "Circular Std",
  color: "#4F9EEA",
  cursor: "pointer",
  padding: "12px 37px",
  margin: "0px 0px",
  width: "100%",
  border: "1px solid #C4CED4",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "9px 20px",
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

const Form = () => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      country_code: "234",
    },
  });

  const [pageNumber, setPageNumber] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const nextPage = () => setPageNumber((prevPage) => prevPage + 1);
  const prevPage = () =>
    setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  const setIsSuccessFunc = () => {
    setIsSuccess(!isSuccess);
  };

  const setIsErrorFunc = () => {
    setIsError(!isError);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(true);
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
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
      {pageNumber === 1 && (
        <div id="page1">
          <div className="flex">
            <img src={white.src} alt="" />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg font-bold text-[#002A47]">
            What is your email?
          </h1>

          <form>
            <div className="">
              <input
                type="text"
                name="email_address"
                value={state.user.email}
                onChange={handleChange}
                className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Email address"
              />
            </div>

            <div className="bg-[#EEF3F6] p-4 mt-8 md:mt-10 mb-6 rounded-lg">
              <p className="text-[#476D85] text-[13px] leading-[19px] md:text-sm">
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
            <div className="mb-16 md:mb-36">
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
                onClick={nextPage}
              >
                <p>Next</p>
              </SustainButton>
            </div>
          </form>
        </div>
      )}

      {pageNumber === 2 && (
        <div id="page2">
          <div className="flex">
            <img src={white.src} alt="" />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-3 text-1lg font-bold text-[#002A47]">
            Whats is your name?
          </h1>
          <p className="md:text-[18px] md:leading-[24px] text-[#476D85] text-[16px] leading-[22px] mb-8">
            Your information will never be shared with anyone
          </p>

          <form>
            <div className="mb-[15px]">
              <input
                type="text"
                name="email_address"
                value={state.user.email}
                onChange={handleChange}
                className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="First name"
              />
            </div>

            <div className="mb-10">
              <input
                type="text"
                name="email_address"
                value={state.user.email}
                onChange={handleChange}
                className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Last name (Surname)"
              />
            </div>

            <div className="mb-16 md:mb-36">
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
                onClick={nextPage}
              >
                <p>Continue</p>
              </SustainButton>
            </div>
          </form>
        </div>
      )}

      {pageNumber === 3 && (
        <div id="page2">
          <div className="flex">
            <img src={white.src} alt="" />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-3 text-1lg font-bold text-[#002A47]">
            What is your phone number?
          </h1>
          <p className="md:text-[18px] md:leading-[24px] text-[#476D85] text-[16px] leading-[22px] mb-8">
            This is so we can contact you if we have any questions
          </p>

          <form>
            <div className="mb-[40px]">
              <input
                type="tel"
                name="phone_number"
                value={state.user.phone_number}
                onChange={handleChange}
                className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Phone number"
              />
              <p className="text-[#476D85] text-[12px] md:text-[13px] leading-4 mt-[12px]">
                Enter your Nigerian WhatsApp phone number eg. 08012345678
              </p>
            </div>

            <div className="mb-16 md:mb-36">
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
                onClick={nextPage}
              >
                <p>Continue</p>
              </SustainButton>
            </div>
          </form>
        </div>
      )}

      {pageNumber === 4 && (
        <div id="page2">
          <div className="flex">
            <img src={white.src} alt="" />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg font-bold text-[#002A47]">
            What is your gender?
          </h1>

          <form>
            <div className="mb-[40px]">
              <input
                type="tel"
                name="phone_number"
                value={state.user.phone_number}
                onChange={handleChange}
                className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Select your gender"
              />
            </div>

            <div className="mb-16 md:mb-36">
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
                onClick={nextPage}
              >
                <p>Continue</p>
              </SustainButton>
            </div>
          </form>
        </div>
      )}

      {pageNumber === 5 && (
        <div id="page2">
          <div className="flex">
            <img src={white.src} alt="" />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg font-bold text-[#002A47]">
            How did you hear about us?
          </h1>

          <form>
            <div className="mb-[40px]">
              <input
                type="tel"
                name="phone_number"
                value={state.user.phone_number}
                onChange={handleChange}
                className="border h-[60px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Select"
              />
            </div>

            <div className="mb-16 md:mb-36">
              <SustainButton
                className="self-center text-sm md:text-base font-medium"
                type="submit"
                onClick={nextPage}
              >
                <p>Continue</p>
              </SustainButton>
            </div>
          </form>
        </div>
      )}
      {pageNumber === 6 && (
        <div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg text-center font-bold text-[#002A47]">
            Choose your membership plan
          </h1>
          <div className="border rounded-2xl py-9 md:py-10 ">
            <div className="px-5 md:px-[30px] ">
              <p className="text-xs font-medium  leading-4 text-[#4F9EEA]">
                BASIC
              </p>
              <p className="mt-2 text-1xxl md:text-[30px] leading-[38px] font-medium text-[#002A47] ">
                ₦40,000
                <span className=" text-base">/quarterly</span>
              </p>
              <p className="mt-3  mb-5 md:text-[16px] text-[16px] leading-[22px] text-[#002A47]">
                Get the tools and support you need to reverse your condition
                with a{" "}
                <a
                  href="https://lifebox-labs.notion.site/Custodia-6-month-money-back-guarantee-9109266d94834c57b47a869a6bed308d"
                  className="text-[#4F9EEA] font-bold"
                >
                  6-month money-back guarantee
                </a>
              </p>
            </div>
            <hr className="mt-[24px] mb-[30px] md:mb-8 mx-5 md:mx-[30px]" />
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
          <p className="text-[#002A47] text-sm leading-[18px] text-center mt-6 mb-8 md:mb-10 px-[23px] md:px-0">
            Got a discount code? You can use it in the payment page
          </p>
          <div className="mb-16 md:mb-36">
            <SustainButton
              className="self-center text-sm md:text-base font-medium"
              type="submit"
              onClick={nextPage}
            >
              <p>Choose this plan</p>
            </SustainButton>
          </div>
        </div>
      )}

      {pageNumber === 7 && (
        <div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg text-center font-bold text-[#002A47]">
            Order summary
          </h1>
          <div className="border rounded-2xl py-[24px] ">
            <div className="px-5 md:px-[30px] ">
              <p className="text-[16px] font-medium  leading-5 text-[#002A47]">
                Custodia Basic Plan
              </p>
              <div className="flex justify-between mt-1.5">
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  1 quarter
                </p>
                <p className="text-[16px]  leading-5 text-[#002A47]">₦40,000</p>
              </div>
              <hr className="mt-[22px] mb-[22px] " />
              <div className="flex ">
                <input
                  type="tel"
                  name="phone_number"
                  value={state.user.phone_number}
                  onChange={handleChange}
                  className="border h-[44px] md:h-[50px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Promo code"
                />
                <div className="w-[120px] ml-4">
                  <SustainWhiteButton>Apply</SustainWhiteButton>
                </div>
              </div>
              <hr className="mt-[24px] mb-[24px]" />
              <div className="flex justify-between mt-1.5">
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  Subtotal
                </p>
                <p className="text-[16px]  leading-5 text-[#002A47]">₦40,000</p>
              </div>
              <div className="flex justify-between mt-1.5">
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  Promo discount
                </p>
                <p className="text-[16px]  leading-5 text-[#002A47]">-₦4,000</p>
              </div>
              <hr className="mt-[22px] mb-[22px] " />
              <div className="flex justify-between mt-1.5">
                <p className="text-[18px] font-medium leading-5 text-[#002A47]">
                Total
                </p>
                <p className="text-[18px] font-medium leading-5 text-[#002A47]">₦36,000</p>
              </div>
            </div>
          </div>
          <div className="mb-16 md:mb-36 mt-10">
            <SustainButton
              className="self-center text-sm md:text-base font-medium"
              type="submit"
              onClick={nextPage}
            >
              <p>Pay now</p>
            </SustainButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
