import React from "react";
import Navbar1 from "../components/navbar1";

import teamImage from "../public/assets/teamImage.svg";
import Footer from "../components/footer";

import CustomButton from "@/components/mainButton";

const About = () => {
  return (
    <div>
      <Navbar1 />
      <div className="">
        <div className="px-5 md:px-66 md:mt-24 mt-16 flex flex-col justify-center pb-24 md:pb-36">
          <h1 className="text-4lg md:text-center md:text-5xl font-bold text-[#002A47] md:max-w-2xl flex md:self-center max-w-lg">
            Reversing chronic metabolic disease at scale
          </h1>
          <p className="mt-6 md:mt-6 text-base leading-6 md:text-center md:text-2lg text-[#476D85] max-w-l flex md:self-center">
            We are on a simply, yet ambitious mission to to treat and reverse
            chronic metabolic diseases in 5 million Africans by 2030 using
            simple lifestyle changes.
          </p>
        </div>
        <div className="px-5 sm:px-8 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 bg-[#EFF2FA]">
          <p className=" text-2xl leading-9 md:text-start md:text-4xl font-bold text-[#002A47]">
            Our story
          </p>
          <p className="mt-5 md:mt-6 text-base leading-6  md:text-start md:text-1lg text-[#002A47] md:max-w-3lg">
            If you have been living with a chronic metabolic disease, there’s a
            high chance you’re probably feeling frustrated and scared. No matter
            what you do, your blood sugar and blood pressure continues to go up
            and you don’t feel well.
          </p>
          <p className="mt-7 md:mt-9 text-base leading-6  md:text-start md:text-1lg text-[#002A47] md:max-w-3lg">
            The medications you have to take keep increasing and these
            medications cost a lot of money. and your condition steals your time
            by limiting your ability to do the things you love.
          </p>
          <p className="mt-7 md:mt-9 text-base leading-6  md:text-start md:text-1lg text-[#002A47] md:max-w-3lg">
            Don’t give up, Custodia takes these burdens away!
          </p>
        </div>
        <div className="px-5 sm:px-8 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24">
          <p className=" text-2xl leading-9 md:text-start md:text-4xl font-bold text-[#002A47]">
            The team
          </p>
          <p className="mt-5 md:mt-6 text-basex  md:text-start md:text-2lg text-[#002A47] max-w-l">
            We’re a diverse, close-knit team of innovators changing the way the
            world thinks about metabolic health.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-12 md:gap-26 mt-11 md:mt-14">
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                Dr. Olusina Ajidahun
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                CEO
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                Joseph Anya
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                Product
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                Promise Anya
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                Operations
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                Adeola D-Great
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                Nutrition
              </p>
            </div>
          </div>
          <p className=" text-2xl md:text-start md:text-4xl font-bold text-[#002A47] mt-18 md:mt-26">
            Advisors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-12 md:gap-26 mt-9 md:mt-14">
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                Opeyemi Awoyemi
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                FastForward
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                Omolara Awoyemi
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                FastForward
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                David Unwin, MD
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                NHS
              </p>
            </div>
            <div>
              <img src={teamImage.src} alt="Avatar" className="" />
              <p className="font-medium text-sm leading-4 md:text-xl md:leading-relaxed text-[#002A47] mt-5">
                Opeyemi Awoyemi
              </p>
              <p className="text-xs md:text-sm md:leading-5 text-[#476D85] mt-1.5">
                Founder, FastForward
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-8 md:px-32 md:pt-28 pt-20 md:pb-40 pb-24 bg-[#EFF2FA]">
          <p className=" text-2xl leading-9 md:text-start md:text-4xl font-bold text-[#002A47] md:max-w-l">
            Work on something that matters
          </p>
          <p className="mt-7 md:mt-9 text-basex  md:text-start md:text-3lg text-[#002A47] md:max-w-xl">
            We are looking for talented people who want to build the future of
            chronic metabolic disease care. If this is you, please join us.
          </p>
          <div className="mt-8 md:mt-12">
            <CustomButton href="/404" title="See current openings" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
