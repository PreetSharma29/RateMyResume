import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const TotalScore = () => {
  const searchObject = useSelector((store) => store.gemini.searchObject);

  const percentage = Number(searchObject["Total score"]);
  const radius = 100;
  const stroke = 15;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, ease: "easeOut", duration: 0.7 }}
      className="flex flex-col justify-center items-center border-[1px] rounded-lg border-solid border-gray-200 shadow-md p-6 md:p-8 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px]"
    >
      <h1 className="text-2xl">Total Score</h1>

      <div className="relative w-68 h-68 my-2">
        <svg width="100%" height="100%">
          <circle
            cx="50%"
            cy="50%"
            r={normalizedRadius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={stroke}
          />
          <circle
            cx="50%"
            cy="50%"
            r={normalizedRadius}
            fill="none"
            stroke="#f44900"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-700 ease-in-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center  text-gray-700">
          <div className="text-4xl md:text-4xl font-semibold">
            {searchObject["Total score"]}%
          </div>
        </div>
      </div>
      <p className="text-sm md:text-[15px] text-[#686868] font-thin text-center">
        The total score reflects the overall alignment of your resume with the
        job description. A higher score indicates a stronger relevance of your
        resume to the job requirements.
      </p>
    </motion.div>
  );
};

export default TotalScore;
