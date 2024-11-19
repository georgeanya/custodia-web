import { useState } from "react";
import custodia from "../public/assets/custodia.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavbarMenu from "./navbarMenu";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

const ArrowIcon = styled(ArrowForwardIcon)({
  color: "#f8f8f8",
  padding: "1.5px",
  marginTop: "-2px",
  width: "21px",
  ["@media (max-width:780px)"]: {
    width: "16px",
    marginTop: "0px",
  },
});

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggleFunc = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <div className={isToggled ? "hidden" : "block md:hidden"}>
        <NavbarMenu handleToggle={handleToggleFunc} />
      </div>
      <div className="bg-[#324967] ">
        <Link href="https://wa.link/0xw639">
          <p className="text-center text-sm md:text-base text-white py-4 px-7 cursor-pointer">
            ✨ Do you have questions? Chat with us on WhatsApp now
            <ArrowIcon />
          </p>
        </Link>
      </div>
      <div className="px-5 md:px-32 pt-5 md:pt-5 bg-[#F0F7FF]">
        <nav>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <img
                src={custodia.src}
                className="mr-3 cursor-pointer self-center"
                alt="Custodia Logo"
              />
            </Link>

            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden"
              aria-controls="navbar-solid-bg"
              onClick={handleToggleFunc}
            >
              <span className="sr-only">Open main menu</span>
              {isToggled ? (
                <svg
                  className="w-6 h-6"
                  aria-hidden="false"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                {/* <li className="mt-3.5 mx-5 ">
                  <Link
                    href="/404"
                    className="text-base pt-5 mt-5 rounded  hover:text-blue-700 "
                    // aria-current="page"
                  >
                    <p className="text-[#002A47]">For health plans</p>
                  </Link>
                </li>
                 */}
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/healthcare-providers"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                  >
                    <p className="text-[#002A47]">For healthcare providers</p>
                  </Link>
                </li>
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/pricing"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                  >
                    <p className="text-[#002A47]">Pricing</p>
                  </Link>
                </li>
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/blog"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded hover:text-blue-700 md:p-0 "
                  >
                    <p className="text-[#002A47]">Blog</p>
                  </Link>
                </li>
                <li className="mt-3.5 mx-5 cursor-pointer">
                  <Link
                    href="/research"
                    className="text-base pt-5 mt-5 text-[#002A47] rounded  hover:text-blue-700 "
                  >
                    <p className="text-[#002A47]">Research</p>
                  </Link>
                </li>
                <li className="ml-5">
                  <Link href="/sign-up">
                    <SustainButton className="text-sm">
                      Get started
                    </SustainButton>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
