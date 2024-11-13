import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import twitter from "../public/assets/tw.svg";
import sustain from "../public/assets/custodiaw.svg";
import fbook from "../public/assets/fbook.svg";
import insta from "../public/assets/insta.svg";
import Link from "next/link";

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 36px",
  },
});

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="bg-[#0C1227] md:px-[125px] px-5">
      <div className="container mx-auto md:pt-[90px] pt-[70px] text-white">
        <div className="md:flex md:justify-between text-start">
          <img
            src={sustain.src}
            className="self-start md:w-[131px]"
            alt="sustain logo"
          />
          <div className="flex flex-wrap text-start justify-between">
            <div className="w-40 md:w-[245px]">
              <h3 className="md:mb-8 mb-[27px] mt-[60px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
                PRODUCT
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="/pricing">Pricing</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="/healthcare-providers">
                  For healthcare providers
                </Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="/research">Research</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="/faq">FAQs</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="/download">Download our app</Link>
              </p>
            </div>
            <div className="w-40 md:w-[245px]">
              <h3 className="md:mb-8 mb-[27px] mt-[60px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
                RESOURCES
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="/404">Help center</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35">
                  Privacy policy
                </Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="https://lifebox-labs.notion.site/lifebox-labs/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1">
                  Terms of use
                </Link>
              </p>
              {/* <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/cookie">Cookie policy</Link>
            </p> */}
            </div>
            <div className="w-40 md:w-[245px]">
              <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
                COMPANY
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="https://lifebox.ng/">About</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="/blog">Blog</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">
                  Careers
                </Link>
              </p>
              {/* <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/404">Press</Link>
            </p> */}
            </div>
            <div className="w-40 md:w-[205px]">
              <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
                CONTACT
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="tel:+2347040559724">+2347040559724</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link href="mailto:hi@custodiahealth.com">
                  hi@custodiahealth.com
                </Link>
              </p>
              <div className="flex">
                <Link href="https://facebook.com/custodiahealth">
                  <img
                    src={fbook.src}
                    className="mr-5 cursor-pointer"
                    alt="facebook logo"
                  />
                </Link>
                <Link href="https://instagram.com/custodiahealth">
                  <img
                    src={insta.src}
                    className="mr-5 cursor-pointer"
                    alt="instagram logo"
                  />
                </Link>
                <Link href="https://twitter.com/custodiahealth">
                  <img
                    src={twitter.src}
                    className="mr-5 cursor-pointer"
                    alt="twitter logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="md:mt-[90px] mt-[70px] text-[#C7CBD1]" />
        <p className="md:mt-[45px] mt-[35px] text-sm md:text-[15px] leading-[17px] md:leading-[18px] pb-[51px] md:pb-[65px] text-center md:text-start">
          ©{currentYear} Custodia Health, a Lifebox Labs company
        </p>
      </div>
    </div>
  );
};

export default Footer;
