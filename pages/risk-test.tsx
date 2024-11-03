import React from "react";
import Navbar from "../components/navbar3";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/ed-metacard.png";
import TestForm from "../components/test-form";

type Question = {
  text: string;
  options: {
    text: string;
    count: number;
  }[];
};

const questions: Question[] = [
  {
    text: "How confident do you feel that you can keep an erection?",
    options: [
      { text: "Very low", count: 1 },
      { text: "Low", count: 2 },
      { text: "Moderate", count: 3 },
      { text: "High", count: 4 },
      { text: "Very high", count: 5 },
    ],
  },
  {
    text: "When you had erections, how often were they hard enough for sex?",
    options: [
      { text: "Almost never", count: 1 },
      { text: "A few times", count: 2 },
      { text: "Sometimes ", count: 3 },
      { text: "Most times", count: 4 },
      { text: "Almost always", count: 5 },
    ],
  },
  {
    text: "During sex, how often were you able to maintain your erection after penetration? ",
    options: [
      { text: "Almost never", count: 1 },
      { text: "A few times", count: 2 },
      { text: "Sometimes", count: 3 },
      { text: "Most times", count: 4 },
      { text: "Almost always", count: 5 },
    ],
  },
  {
    text: "How difficult is it to maintain your erection until orgasm?",
    options: [
      { text: "Very difficult", count: 1 },
      { text: "Difficult", count: 2 },
      { text: "Neutral", count: 3 },
      { text: "Easy", count: 4 },
      { text: "Very easy", count: 5 },
    ],
  },
  {
    text: "Is your sex life satisfactory to you?",
    options: [
      { text: "Almost never", count: 1 },
      { text: "A few times", count: 2 },
      { text: "Sometimes", count: 3 },
      { text: "Most times", count: 4 },
      { text: "Almost always", count: 5 },
    ],
  },
];

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const RiskTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [testStart, setTestStart] = useState(true);
  const [testComplete, setTestComplete] = useState(true);

  const handleOptionClick = (optionCount: number) => {
    setTotalScore(totalScore + optionCount);
    if (currentQuestionIndex === questions.length - 1) {
      setTestComplete(!testComplete);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    startTest();
  };

  const startTest = () => {
    setTestStart(!testStart);
  };

  const formRestartTest = () => {
    setTestComplete(!testComplete);
    restartTest();
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <Navbar />
      {testComplete ? (
        <div>
          {testStart ? (
            <div className=" px-5 mt-[65px] md:mt-[70px] text-center flex flex-col items-center">
              <h1 className="md:text-[44px] text-3xl leading-[38px] md:leading-[55px] font-bold text-[#002A47] max-w-[490px] px-5">
                Know your risk for type 2 diabetes
              </h1>
              <p className="md:text-xl text-base mt-6 md:px-5 md:mb-9 mb-7 text-[#476D85] max-w-[457px]">
                More than 60% of people with type 2 diabetes don’t know they
                have it. Take the risk test now to see where you stand.
              </p>
              <div className="max-w-[245px]">
                <SustainButton onClick={() => startTest()}>
                  Take the test now
                </SustainButton>
              </div>
              <p className="text-sm mt-7 md:mt-9 text-[#476D85] px-5">
                *This is an assessment tool. Do not use for diagnostic purposes.
              </p>
            </div>
          ) : (
            <div className="px-5 mt-[65px] md:mt-[70px]  flex flex-col items-center justify-center">
              <div>
                <h1 className="md:text-3xl text-2xl font-bold max-w-[400px] text-[#002A47] mb-9">
                  {currentQuestion?.text}
                </h1>
                <ul>
                  {currentQuestion?.options.map((option) => (
                    <li key={option?.text}>
                      <div
                        className="py-[16px] text-[#002A47] max-w-[400px] border border-[#D7D7DB] hover:border-[#4F9EEA] my-2 text-center rounded-2xl text-sm md:text-base md:leading-5 leading-4"
                        onClick={() => handleOptionClick(option?.count)}
                      >
                        {option?.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <p
                onClick={() => restartTest()}
                className="text-[#4F9EEA] text-[14px] leading-[17px] text-center font-medium pt-7"
              >
                Click here to start again
              </p>
            </div>
          )}
        </div>
      ) : (
        <TestForm tScore={totalScore} start={formRestartTest} />
      )}
    </div>
  );
};

export default RiskTest;
