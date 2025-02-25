import React, { useEffect } from "react";
import twitter from "../public/assets/tw.svg";
import sustain from "../public/assets/custodiaw.svg";
import fbook from "../public/assets/fbook.svg";
import insta from "../public/assets/insta.svg";
import Link from "next/link";
import CustomButton from "./mainButton";
import  WebsiteCarbonBadge from 'react-websitecarbon-badge';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#0C1227] md:px-[125px] px-5">
      <div className=" md:pt-36 pt-20 text-white container mx-auto">
        <p className="mb-6 md:mb-5 text-base leading-5 md:text-xl md:leading-6 text-center md:text-start">
          Start your enrollment now
        </p>
        <div className="md:flex md:justify-between text-center md:text-start">
          <p className="md:text-5lg text-3xl font-bold mb-11 md:mb-0 md:max-w-2xl">
            Are you ready to start that journey? Join Custodia today!
          </p>
          <Link href="/sign-up">
            <CustomButton href="/sign-up" title="Get started now" />
          </Link>
        </div>
        <hr className="h-[0.5px] border-t-[0.5px] md:mt-[150px] mt-[109px] md:mb-[90px] mb-[70px] text-[#C7CBD1]" />
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
                <Link title="Pricing" href="/pricing">Pricing</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="For healthcare providers" href="/healthcare-providers">
                  For healthcare providers
                </Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Research" href="/research">Research</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="FAQs" href="/faq">FAQs</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Download our app" href="/download">Download our app</Link>
              </p>
            </div>
            <div className="w-40 md:w-[245px]">
              <h3 className="md:mb-8 mb-[27px] mt-[60px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
                RESOURCES
              </h3>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Help center" href="https://wa.link/3qqw37">Help center</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Privacy policy" href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35">
                  Privacy policy
                </Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Terms of use" href="https://lifebox-labs.notion.site/lifebox-labs/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1">
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
                <Link title="About" href="https://lifebox.ng/">About</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Blog" href="/blog">Blog</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Careers" href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">
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
                <Link title="Contact phone number" href="tel:+2347040559724">+2347040559724</Link>
              </p>
              <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
                <Link title="Contact email address" href="mailto:hi@custodiahealth.com">
                  hi@custodiahealth.com
                </Link>
              </p>
              <div className="flex">
                <Link title="Custodia Facebook account" href="https://facebook.com/custodiahealth">
                  <img
                    src={fbook.src}
                    className="mr-5 cursor-pointer"
                    alt="facebook logo"
                  />
                </Link>
                <Link title="Custodia Instagram account" href="https://instagram.com/custodiahealth">
                  <img
                    src={insta.src}
                    className="mr-5 cursor-pointer"
                    alt="instagram logo"
                  />
                </Link>
                <Link title="Custodia X(Twitter) account" href="https://x.com/custodiahealth">
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
        <p className="md:mt-[45px] mt-[35px] text-sm md:text-[15px] leading-[17px] md:leading-[18px] pb-[45px] md:pb-[45px] text-center md:text-start">
          ©{currentYear} Custodia Health, a Lifebox Labs company
        </p>
      </div>
      <div className="pb-[51px] md:pb-[65px]"><div id="wcb" className="carbonbadge md:inline-block py-3 px-4 md:py-5 md:px-7 bg-white" data-url="https://custodiahealth.com/"></div></div>
    </div>
  );
};

export default Footer;
