import React from "react";
import TotalScore from "./TotalScore";
import ReportCards from "./ReportCards";
import ActionVerbs from "./ActionVerbs";
import SkillsMatched from "./SkillsMatched";
import { motion, useScroll } from "motion/react";

const Report = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-2 bg-orange-600 origin-left z-50"
      ></motion.div>
      <div className="flex flex-col justify-center items-center p-8">
        <div className="flex flex-col justify-center items-center p-8 ">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, ease: "easeOut", duration: 0.7 }}
            className="text-3xl md:text-4xl"
          >
            Your Report
          </motion.div>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, ease: "easeOut", duration: 0.7 }}
            className="text-sm mt-4  text-gray-500 font-thin w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] text-center"
          >
            This report provides a detailed analysis of your resume against the
            provided job description. It evaluates key factors such as
            readability, action verb usage, and skill match to help you
            understand how well your resume aligns with the role requirements.
            Finally, a total score out of 100 is provided, reflecting your
            resume's relevance and strength based on the job description.
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-8">
          <div>
            <TotalScore />
          </div>
          <div className="flex flex-col justify-center items-center">
            <ReportCards />
          </div>
        </div>
        <ActionVerbs />
        <SkillsMatched />
      </div>
    </div>
  );
};

export default Report;
