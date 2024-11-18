import React, { useState, useMemo, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import cancel from "../public/assets/cancel.svg";

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

interface NewsletterProps {
  isOpen: boolean;
  onClose: () => void;
}

const url =
  "https://custodia-health-api-b53b05e2c965.herokuapp.com/v1/crm/webinar/join";

const Newsletter: React.FC<NewsletterProps> = ({ isOpen, onClose }) => {
  const [state, setState] = useState<IState>({
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (isOpen) {
      // Lock body scroll when modal is open
      document.body.style.overflow = "hidden";
      // Focus the modal when it opens
      modalRef.current?.focus();
    } else {
      // Restore body scroll when modal closes
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <button
      className="fixed inset-0 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
      role="button"
      
    >
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full"
      >
        <div
          className="relative mx-auto flex justify-center items-center min-h-screen w-full max-w-md"
          id="form"
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow dark:bg-gray-700 px-8 py-[42px]"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <p className="text-[22px] leading-[28px] md:text-[24px] md:leading-[30px] font-medium text-[#002A47]">
                Subscribe
              </p>
              <button onClick={onClose}>
                <img src={cancel.src} alt="" />
              </button>
            </div>
            <p className="text-[14px] leading-[19px] md:text-[16px] mt-3 md:leading-[21px] text-startc text-[#002A47]">
              Enter your details to receive updates and announcements directly
              in your mailbox
            </p>
            <form className="">
              <div className="md:grid grid-cols-2 gap-5 mt-6 md:mt-[30px]">
                <div className="mb-5 md:mb-[20px]">
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
                        "border-1 group-data-[focus=true]:border-[#002A47]",
                    }}
                    placeholder=""
                    required
                  />
                </div>
                <div className="mb-[20px]">
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
                        "border-1 group-data-[focus=true]:border-[#002A47]",
                    }}
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
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
                      "border-1 group-data-[focus=true]:border-[#002A47]",
                  }}
                  placeholder=""
                  variant="bordered"
                  required
                />
              </div>
              <div className="mt-[30px]">
                <SustainButton type="submit">Submit</SustainButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Newsletter;
