import React from "react";
import monitor from "../public/assets/monitor.svg";
import referral from "../public/assets/referral.svg";
import communicate from "../public/assets/communicate.svg";
import change from "../public/assets/change.svg";
import workload from "../public/assets/workload.svg";
import conflits from "../public/assets/conflits.svg";

const Section3 = () => {
  return (
    <div className="px-5 md:px-32 md:pt-28 pt-20 md:pb-36 pb-24 " id="benefits">
      <h2 className="text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47] md:pr-6">
        Here&apos;s why you should partner with us
      </h2>
      <div className="md:mt-6 flex flex-wrap justify-between">
        <div className="mt-17 sm:max-w-s">
          <img src={workload.src} alt="Icon" />
          <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
            Reduce your workload
          </p>
          <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
            We specialize in metabolic disease care, allowing you to focus on
            other pressing matters in your practice.
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={change.src} alt="Icon" />
          <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
            Lifestyle change specialists
          </p>
          <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
            We help patients to understand the impact of diet on their health
            and guide them in making personalized changes.
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={monitor.src} alt="Icon" />
          <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
            Patient monitoring
          </p>
          <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
            With continuous monitoring, we track patient health, allowing us to
            deprescribe medications when necessary.
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={referral.src} alt="Icon" />
          <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
            Easy Referrals
          </p>
          <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
            Referring patients is very easy. Simply fill out our referral form,
            and we&apos;ll take care of the rest.
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={conflits.src} alt="Icon" />
          <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
            No conflicts
          </p>
          <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
            We solely focus on metabolic diseases care through lifestyle
            interventions. We do not do primary care and our interests are 100%
            aligned.
          </p>
        </div>
        <div className="mt-17 sm:max-w-s">
          <img src={communicate.src} alt="Icon" />
          <p className="text-xl md:text-1xxl text-[#002A47] font-medium mt-5">
            Constant communication
          </p>
          <p className="text-base leading-6 md:text-lg md:leading-relaxed text-[#476D85] mt-2">
            Our providers stay in touch with you on relevant patient milestones
            and health changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
