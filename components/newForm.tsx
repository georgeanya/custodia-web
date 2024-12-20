import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import circle from "../public/assets/circle.png";
import icon from "../public/assets/icon.svg";
import { Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import {
  DateValue,
  parseDate,
  getLocalTimeZone,
} from "@internationalized/date";
import { Select, SelectItem } from "@nextui-org/select";
import CenterButton from "./centerButton";
import LoadingButton from "./loadingButton";

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
    referrer: string;
    dob: DateValue | null;
    gender: string;
    discount_code: string;
  };
  plan: {
    _id: string;
    plan_name: string;
    price: number;
    duration: string;
  };
}

const Form = () => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      dob: parseDate("1995-02-06"),
      gender: "",
      referrer: "",
      discount_code: "",
    },
    plan: {
      _id: "",
      plan_name: "",
      price: 0,
      duration: "",
    },
  });

  const [discountPrice, setDiscountPrice] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    setState({
      ...state,
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  const nextPage = () => setPageNumber((prevPage) => prevPage + 1);
  const prevPage = () =>
    setPageNumber((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  const handleError = () => {
    setIsLoading(true);
    setPageNumber(1);
  };

  const signUp = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    axios
      .post(
        "https://custodia-health-api-b53b05e2c965.herokuapp.com/v1/patient/auth/sign-up",
        {
          email: state.user.email,
        }
      )
      .then((res) => {
        if (res.data.data.status === "profile incomplete") {
          setPageNumber(2);
        } else if (res.data.data.status === "profile completed") {
          fetchPlanData();
          setPageNumber(7);
        } else {
        }
      })
      .catch((error) => {
        setPageNumber(9);
      })
      .finally(() => setIsLoading(true));
  };

  const completeProfile = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    const isoDob = getISODateString(state.user.dob);
    console.log("Submitting DOB as ISO string:", isoDob);
    console.log(state);

    axios
      .post(
        "https://custodia-health-api-b53b05e2c965.herokuapp.com/v1/patient/auth/complete-profile",
        {
          first_name: state.user.first_name,
          last_name: state.user.last_name,
          email: state.user.email,
          phone_number: `234${state.user.phone_number?.slice(1)}`,
          dob: isoDob,
          gender: state.user.gender,
          referrer: state.user.referrer,
        }
      )
      .then((res) => {
        if (res.data.message === "proceed to payment") {
          console.log(state);

          setPageNumber(7);
        } else {
        }
      })
      .catch((error) => {
        setPageNumber(9);
      })
      .finally(() => setIsLoading(true));
  };

  const fetchPlanData = async () => {
    try {
      const response = await axios.get(
        "https://custodia-health-api-b53b05e2c965.herokuapp.com/v1/patient/payment/plans"
      );

      const plan = response.data.data.plans[0];

      setState({
        ...state,
        plan: {
          ...state.plan,
          price: plan.price,
          _id: plan._id,
        },
      });
    } catch (error) {
      setPageNumber(9);
    }
  };

  const discountCode = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    // setIsLoading(true);
    axios
      .post(
        "https://custodia-health-api-b53b05e2c965.herokuapp.com/v1/patient/payment/discount",
        {
          discount_code: state.user.discount_code,
        }
      )
      .then((res) => {
        if (res.data.message === "discount code validated successfully") {
          setDiscountPrice(res.data.data.amount);
        } else {
        }
      })
      .catch((error) => {});
  };

  const initializePayment = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setIsLoading(false);
    axios
      .post(
        "https://custodia-health-api-b53b05e2c965.herokuapp.com/v1/patient/payment/initialize",
        {
          discount_code: state.user.discount_code,
          email: state.user.email,
          membership_plan_id: state.plan._id,
        }
      )
      .then((res) => {
        if (res.data.message === "payment initialized successfully") {
          // Note the nested data.data structure
          // const link = document.createElement("a");
          // link.href = res.data.data.data.authorization_url;
          // link.target = "_blank";
          // link.rel = "noopener noreferrer";
          // document.body.appendChild(link);
          // link.click();
          // document.body.removeChild(link);
          window.location.href = res.data.data.data.authorization_url;
        } else {
          throw new Error(res.data.message || "Payment initialization failed");
        }
      })
      .catch((error) => {
        setPageNumber(9);
      })
      .finally(() => setIsLoading(false));
  };

  const handleDateChange = (date: DateValue | null) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        dob: date,
      },
    }));
  };

  const getISODateString = (date: DateValue | null): string => {
    if (!date) return "";
    return date.toDate(getLocalTimeZone()).toISOString();
  };
  const progress = (pageNumber / 6) * 100;

  return (
    <div className="max-w-m mx-5 md:mx-auto mt-[32px] md:mt-[40px]">
      {pageNumber === 1 && (
        <div id="page1">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#4F9EEA] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg font-bold text-[#002A47]">
            What is your email?
          </h1>

          <form onSubmit={signUp}>
            <div className="">
              <Input
                type="email"
                name="email"
                label="Email"
                value={state.user.email}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                  input: "text-[#002A47]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                }}
                placeholder=""
                variant="bordered"
                required
              />
            </div>

            <div className="bg-[#EEF3F6] p-4 mt-8 md:mt-10 mb-6 rounded-lg">
              <p className="text-[#476D85] text-[13px] leading-[19px] md:text-sm">
                By filling out this form, you agree to Custodia Health’s{" "}
                <a
                  className="text-[#4F9EEA] underline font-medium"
                  href="https://lifebox-labs.notion.site/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1" title="Terms of use"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  className="text-[#4F9EEA] underline font-medium"
                  href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35" title="Privacy policy"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="mb-16">
              {isLoading ? (
                <CenterButton title="Next" type="submit" />
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      )}

      {pageNumber === 2 && (
        <div id="page2">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#4F9EEA] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-3 text-1lg font-bold text-[#002A47]">
            Whats is your name?
          </h1>
          <p className="md:text-[18px] md:leading-[24px] text-[#476D85] text-[16px] leading-[22px] mb-8">
            Your information will never be shared with anyone
          </p>

          <form>
            <div className="mb-[15px]">
              <Input
                type="text"
                name="first_name"
                label="First name"
                variant="bordered"
                value={state.user.first_name}
                onChange={handleChange}
                size="md"
                classNames={{
                  label:
                    "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                  input: "text-[#002A47]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                }}
                placeholder=""
                required
              />
            </div>

            <div className="mb-10">
              <Input
                type="text"
                name="last_name"
                label="Last name"
                variant="bordered"
                value={state.user.last_name}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                  input: "text-[#002A47]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                }}
                placeholder=""
                required
              />
            </div>

            <div className="mb-16">
              <CenterButton title="Continue" onClick={nextPage} type="submit" />
            </div>
          </form>
        </div>
      )}

      {pageNumber === 3 && (
        <div id="page2">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#4F9EEA] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-3 text-1lg font-bold text-[#002A47]">
            What is your phone number?
          </h1>
          <p className="md:text-[18px] md:leading-[24px] text-[#476D85] text-[16px] leading-[22px] mb-8">
            This is so we can contact you if we have any questions
          </p>

          <form>
            <div className="mb-[40px]">
              <Input
                type="tel"
                name="phone_number"
                label="Phone number"
                variant="bordered"
                value={state.user.phone_number}
                onChange={handleChange}
                classNames={{
                  label:
                    "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                  input: "text-[#002A47]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                }}
                placeholder=""
                required
              />
              <p className="text-[#476D85] text-[12px] md:text-[13px] leading-4 mt-[12px]">
                Enter your Nigerian WhatsApp phone number eg. 08012345678
              </p>
            </div>

            <div className="mb-16">
              <CenterButton title="Continue" onClick={nextPage} type="submit" />
            </div>
          </form>
        </div>
      )}

      {pageNumber === 4 && (
        <div id="page2">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#4F9EEA] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg font-bold text-[#002A47]">
            What is your gender?
          </h1>

          <form>
            <div className="mb-[40px]">
              <Select
                label="Select your gender"
                classNames={{
                  label:
                    "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                  trigger:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                }}
              >
                <SelectItem key="male">Male</SelectItem>
                <SelectItem key="female">Female</SelectItem>
              </Select>
            </div>

            <div className="mb-16">
              <CenterButton title="Continue" onClick={nextPage} type="submit" />
            </div>
          </form>
        </div>
      )}
      {pageNumber === 5 && (
        <div id="page2">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#4F9EEA] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg font-bold text-[#002A47]">
            What is your date of birth?
          </h1>

          <form>
            <div className="mb-[40px]">
              <DatePicker
                label="Birth date"
                value={state.user.dob}
                onChange={handleDateChange}
                classNames={{
                  label:
                    "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                  input: "text-[#002A47]",
                  inputWrapper:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                }}
              />
            </div>

            <div className="mb-16">
              <CenterButton title="Continue" onClick={nextPage} />
            </div>
          </form>
        </div>
      )}
      {pageNumber === 6 && (
        <div id="page2">
          <div className="w-full bg-[#E6E6E6] h-[6px] rounded-[5px]">
            <div
              className="bg-[#4F9EEA] h-[6px] rounded-[5px] transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg font-bold text-[#002A47]">
            How did you hear about us?
          </h1>

          <form onSubmit={completeProfile}>
            <div className="mb-[40px]">
              <Select
                label="Select"
                classNames={{
                  label:
                    "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                  trigger:
                    "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                }}
              >
                <SelectItem key="friend">Friend</SelectItem>
                <SelectItem key="advert">Advert</SelectItem>
                <SelectItem key="social_media">Social Media</SelectItem>
                <SelectItem key="doctor">Doctor</SelectItem>
              </Select>
            </div>

            <div className="mb-16">
              {isLoading ? (
                <CenterButton
                  title="Continue"
                  onClick={fetchPlanData}
                  type="submit"
                />
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      )}
      {pageNumber === 7 && (
        <div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg text-center font-bold text-[#002A47]">
            Choose your membership plan
          </h1>
          <div className="border rounded-2xl py-9 md:py-10">
            <div className="px-5 md:px-[30px] ">
              <p className="text-xs font-medium  leading-4 text-[#4F9EEA]">
                BASIC
              </p>
              <p className="mt-2 text-1xxl md:text-[30px] leading-[38px] font-medium text-[#002A47] ">
                ₦{state.plan.price.toLocaleString()}
                <span className=" text-base">/quarterly</span>
              </p>
              <p className="mt-3  mb-5 md:text-[16px] text-[16px] leading-[22px] text-[#002A47]">
                Get the tools and support you need to reverse your condition
                with a{" "}
                <a
                  href="https://lifebox-labs.notion.site/Custodia-6-month-money-back-guarantee-9109266d94834c57b47a869a6bed308d"
                  className="text-[#4F9EEA] font-bold"
                >
                  3-month money-back guarantee
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
                Continuous medical supervision
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="self-center w-2.5 md:w-3"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Unlimited consultations
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="md:self-center self-start w-2.5 md:w-3 mt-1 md:mt-0"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Personalized nutrition plan
                </span>
              </div>
              <div className="flex mt-[18px] md:mt-5">
                <img
                  src={icon.src}
                  className="self-center w-2.5 md:w-3"
                  alt="Icon"
                />
                <span className="ml-3 md:ml-4 flex self-center text-base leading-5  text-[#002A47]">
                  Practical educational resources
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
          <div className="mb-16">
            <CenterButton
              title="Choose this plan"
              onClick={nextPage}
              type="submit"
            />
          </div>
        </div>
      )}

      {pageNumber === 8 && (
        <div>
          <h1 className="mt-[32px] md:mt-[40px] leading-7  md:text-[24px] md:leading-[30px] mb-8 text-1lg text-center font-bold text-[#002A47]">
            Order summary
          </h1>
          <div className="border rounded-2xl py-[24px] ">
            <div className="px-5 md:px-[30px] ">
              <p className="text-[16px] font-medium  leading-5 text-[#002A47]">
                Custodia Basic Plan
              </p>
              <div className="flex justify-between mt-[5px]">
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  1 quarter
                </p>
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  ₦{state.plan.price.toLocaleString()}
                </p>
              </div>
              <hr className="mt-[22px] mb-[22px] " />
              <form className="flex " onSubmit={discountCode}>
                {/* <input
                  type="text"
                  name="discount_code"
                  value={state.user.discount_code}
                  onChange={handleChange}
                  className="border h-[44px] md:h-[50px] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Promo code"
                /> */}
                <Input
                  label="Promo code"
                  type="text"
                  name="discount_code"
                  value={state.user.discount_code}
                  onChange={handleChange}
                  size="sm"
                  classNames={{
                    label:
                      "text-[#476D85] group-data-[filled=true]:text-[#476D85]",
                    input: "text-[#002A47]",
                    inputWrapper:
                      "border-1 border-[#C4CED4] group-data-[focus=true]:border-[#002A47]",
                  }}
                  placeholder=""
                  variant="bordered"
                  required
                />
                <div className="w-[120px] ml-4">
                  <SustainWhiteButton type="submit">Apply</SustainWhiteButton>
                </div>
              </form>
              <hr className="mt-[24px] mb-[24px]" />
              <div className="flex justify-between">
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  Subtotal
                </p>
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  ₦{state.plan.price.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between mt-[16px]">
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  Promo discount
                </p>
                <p className="text-[16px]  leading-5 text-[#002A47]">
                  -₦{discountPrice.toLocaleString()}
                </p>
              </div>
              <hr className="mt-[22px] mb-[22px] " />
              <div className="flex justify-between mt-1.5">
                <p className="text-[18px] font-medium leading-5 text-[#002A47]">
                  Total
                </p>
                <p className="text-[18px] font-medium leading-5 text-[#002A47]">
                  ₦{(state.plan.price - discountPrice).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={initializePayment}>
            <div className="mb-16 mt-10">
              {isLoading ? (
                <CenterButton title="Pay now" type="submit" />
              ) : (
                <LoadingButton />
              )}
            </div>
          </form>
        </div>
      )}
      {pageNumber === 9 && (
        <div id="page8">
          <div className="flex justify-center mt-24">
            <img src={circle.src} alt="" className="w-20" />
          </div>
          <p className="text-[22px] leading-[28px] md:text-[28px] md:leading-[35px] font-medium mt-4 mb-3 md:mt-[24px] md:mb-4 text-center">
            An error occurred
          </p>
          <p className="text-[#476D85] text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] text-center mb-7 md:mb-8">
            Please make sure you entered a valid details and try again
          </p>
          <CenterButton title="Try Again" onClick={handleError} />
        </div>
      )}
    </div>
  );
};

export default Form;
