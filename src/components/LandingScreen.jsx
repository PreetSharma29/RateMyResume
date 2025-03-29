import React from "react";
import Form from "./Form";
import ImageSlider from "./ImageSlider";
import { motion } from "motion/react";

const LandingScreen = () => {
  return (
    <div
      initial={{
        x: 0,
        opacity: 1,
      }}
      exit={{ x: -600, opacity: 0 }}
      transition={{ duration: 2 }}
      className="w-screen h-screen object-contain md:object-cover overflow-x-hidden overflow-y-hidden flex flex-row justify-center md:justify-between"
    >
      <motion.div
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ ease: "easeOut" }}
        className="flex flex-col justify-center items-start px-6 md:px-16 lg:px-24"
      >
        <p className="text-sm uppercase">Get Your Resume Rated with</p>
        <div className="flex flex-row pt-1">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
            RateMy
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600">
            Resume!
          </span>
        </div>
        <p className="text-sm text-[#686868] font-light py-6 w-[300px] md:w-[400px] lg:w-[500px]">
          Upload your resume, enter the job description, and see how well you
          match. Get insights to improve your chances of landing the job!
        </p>
        <Form />
      </motion.div>
      <div className="bg-gradient-to-l from-black/85 h-full">
        <ImageSlider />
      </div>
    </div>
  );
};

export default LandingScreen;
