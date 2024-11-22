import React, { useEffect, useState } from "react";
import image from "../public/assets/image.svg";
import image1 from "../public/assets/image1.svg";
import { useInView } from "react-intersection-observer";

const Section5 = () => {
  const [patientsReducedMedications, setPatientsReducedMedications] =
    useState(0);
  const [hba1cReduction, setHba1cReduction] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [weightLoss, setWeightLoss] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const startCountingAnimation = () => {
    const targetValues = {
      patientsReducedMedications: 95,
      hba1cReduction: 1.5,
      yearlySavings: 200000,
      weightLoss: 15,
    };

    const duration = 4000; 
    const interval = 20; 
    const increments = {
      patientsReducedMedications:
        (targetValues.patientsReducedMedications * interval) / duration,
      hba1cReduction: (targetValues.hba1cReduction * interval) / duration,
      yearlySavings: (targetValues.yearlySavings * interval) / duration,
      weightLoss: (targetValues.weightLoss * interval) / duration,
    };

    let currentValues = {
      patientsReducedMedications: 0,
      hba1cReduction: 0,
      yearlySavings: 0,
      weightLoss: 0,
    };

    const updateCounters = () => {
      currentValues.patientsReducedMedications +=
        increments.patientsReducedMedications;
      currentValues.hba1cReduction += increments.hba1cReduction;
      currentValues.yearlySavings += increments.yearlySavings;
      currentValues.weightLoss += increments.weightLoss;

      setPatientsReducedMedications(
        Math.min(
          targetValues.patientsReducedMedications,
          Math.floor(currentValues.patientsReducedMedications)
        )
      );
      setHba1cReduction(
        Math.min(
          targetValues.hba1cReduction,
          parseFloat(currentValues.hba1cReduction.toFixed(1))
        )
      );
      setYearlySavings(
        Math.min(
          targetValues.yearlySavings,
          Math.floor(currentValues.yearlySavings)
        )
      );
      setWeightLoss(
        Math.min(targetValues.weightLoss, Math.floor(currentValues.weightLoss))
      );

      if (
        currentValues.patientsReducedMedications >=
          targetValues.patientsReducedMedications &&
        currentValues.hba1cReduction >= targetValues.hba1cReduction &&
        currentValues.yearlySavings >= targetValues.yearlySavings &&
        currentValues.weightLoss >= targetValues.weightLoss
      ) {
        clearInterval(counterInterval);
      }
    };

    const counterInterval = setInterval(updateCounters, interval);
  };

  useEffect(() => {
    if (inView) {
      startCountingAnimation();
    }
  }, [inView]);

  return (
    <div className="px-5 md:px-32" ref={ref}>
      <div
        className="container mx-auto md:pt-28 pt-20 md:pb-36 pb-24"
        id="patient_stories"
      >
        <h2 className="pr-8 text-2xl leading-9 md:text-start md:text-4xl md:max-w-xl font-bold text-[#002A47]">
          Don’t just take our word for it
        </h2>
        <p className="mt-5 md:mt-6 text-base md:text-start mb-7 md:mb-14 md:text-xl leading-6 md:max-w-xl text-[#002A47]">
          See what some of our patients say about us.
        </p>
        {/* Patient Stories Section */}
        <div className="md:grid md:grid-cols-2 md:gap-7">
          {/* First Testimonial */}
          <div className="mt-8 md:mt-0 px-5 py-10 md:px-12 md:py-14 rounded-2xl bg-[#F0F3F4] flex flex-col justify-between">
            <p className="text-xl md:text-1xl md:leading-9 text-[#002A47] ">
              “Custodia has changed my life. I feel better, weigh less, and have
              control my blood sugar well. I am excited about continuing to make
              better choices about my health so I can be there for my family.”
            </p>
            <div className="pt-10 flex">
              <img
                src={image.src}
                alt="Avatar"
                width="60px"
                className="w-12 md:w-15"
              />
              <div className="self-center pl-3">
                <p className="font-medium text-base leading-5 md:leading-6 md:text-lg text-[#002A47]">
                  Ezeogo Mang
                </p>
                <p className="text-xs md:text-sm leading-4 text-[#476D85]">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
          {/* Second Testimonial */}
          <div className="md:flex">
            <div className="mt-8 md:mt-0 px-5 py-10 md:px-12 md:py-14 rounded-2xl bg-[#F0F3F4] flex flex-col justify-between">
              <p className="text-xl md:text-1xl md:leading-9 text-[#002A47] ">
                “I’ve found a new side to me that I didn’t realize was buried
                under all the weight and the bad health.”
              </p>
              <div className="pt-10 flex">
                <img
                  src={image1.src}
                  alt="Avatar"
                  width="60px"
                  className="w-12 md:w-15"
                />
                <div className="self-center pl-3">
                  <p className="font-medium text-base leading-5 md:leading-6 md:text-lg text-[#002A47]">
                    Uwa Uye
                  </p>
                  <p className="text-xs md:text-sm leading-4 text-[#476D85]">
                    Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics Section */}
        <div className="flex flex-wrap justify-between mt-16">
          <div className="md:w-60 w-40 mb-10 md:mb-0">
            <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
              {patientsReducedMedications}%
            </p>
            <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
              of patients reduced or eliminated their medications
            </p>
          </div>
          <div className="md:w-60 w-40 mb-10 md:mb-0">
            <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
              {hba1cReduction}%
            </p>
            <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
              Average HbA1c reduction among 90% patients
            </p>
          </div>
          <div className="md:w-60 w-40">
            <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
              ₦{yearlySavings}
            </p>
            <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
              Average yearly cost savings on medications
            </p>
          </div>
          <div className="md:w-60 w-40">
            <p className="font-medium text-2xl leading-9 md:text-5lg text-[#4F9EEA]">
              {weightLoss}%
            </p>
            <p className="md:text-base md:leading-6 text-sm font-normal text-[#002A47] md:mt-3 mt-1">
              Average weight loss after 6 months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
