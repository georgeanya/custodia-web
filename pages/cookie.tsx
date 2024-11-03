import React from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";

const Cookie = () => {
  return (
    <div>
      <Navbar1 />
      <div className="px-5 md:px-72 md:px md:mt-24 mt-16 pb-32">
        <h1 className="text-4lg md:text-center  md:text-5xl font-bold text-[#002A47]">
          Cookie policy
        </h1>
        <p className="mt-5 md:mt-5 text-base leading-7 md:text-center  md:text-2lg text-[#476D85]">
          If you’re curious about our evidence-backed approach, feel free to
          check out the below research.
        </p>
        <ul className="list-disc list-outside pl-5">
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            A Novel Intervention Including Individualized Nutritional
            Recommendations Reduces Hemoglobin A1c Level, Medication Use, and
            Weight in Type 2 Diabetes{" "}
            <span className="no-underline"> (2017)</span>
          </li>
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            Impact of a 2-year trial of nutritional ketosis on indices of
            cardiovascular disease risk in patients with type 2 diabetes{" "}
            <span className="no-underline"> (2020)</span>
          </li>
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            The Effect of Low-Carbohydrate Diet on Glycemic Control in Patients
            with Type 2 Diabetes Mellitus{" "}
            <span className="no-underline"> (2018)</span>
          </li>
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            The effects of low-fat, high-carbohydrate diets vs.
            low-carbohydrate, high-fat diets on weight, blood pressure, serum
            liquids and blood glucose: a systematic review and meta-analysis{" "}
            <span className="no-underline"> (2021)</span>
          </li>
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            Substantial and Sustained Improvements in Blood Pressure, Weight and
            Lipid Profiles from a Carbohydrate Restricted Diet: An Observational
            Study of Insulin Resistant Patients in Primary Care{" "}
            <span className="no-underline"> (2019)</span>
          </li>
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            Low carbohydrate diet to achieve weight loss and improve HbA1c in
            type 2 diabetes and pre-diabetes: Experience from one general
            practice <span className="no-underline"> (2014)</span>
          </li>
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            Carbohydrate restriction improves the features of Metabolic
            Syndrome. Metabolic Syndrome may be defined by the response to
            carbohydrate restriction{" "}
            <span className="no-underline"> (2005)</span>
          </li>
          <li className="mt-4 md:mt-5 text-base leading-7 md:text-center  underline md:text-2lg text-[#476D85]">
            Dietary carbohydrate restriction improves insulin sensitivity, blood
            pressure, microvascular function, and cellular adhesion markers in
            individuals taking statins{" "}
            <span className="no-underline"> (2013)</span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Cookie;
