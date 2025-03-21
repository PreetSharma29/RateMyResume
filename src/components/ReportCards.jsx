import React from "react";
import ReportCard from "./ReportCard";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const ReportCards = () => {
  const searchObject = useSelector((store) => store.gemini.searchObject);

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className="flex flex-row justify-center items-center mb-4">
        <motion.h3
          className="mr-4"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, ease: "easeOut", duration: 0.7 }}
        >
          <ReportCard
            name="Action Verbs"
            detail={searchObject["Number of action verbs used in the resume"]}
            para="Action verbs strengthen your resume’s tone and engage hiring managers."
          />
        </motion.h3>
        <motion.h3
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, ease: "easeOut", duration: 0.7 }}
        >
          <ReportCard
            name="Readability"
            detail={searchObject["Readability"]}
            para="This index measures your resume's readability based on different factors."
          />
        </motion.h3>
      </div>
      <div className="flex flex-row justify-center items-start">
        <motion.h3
          className="mr-4"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, ease: "easeOut", duration: 0.7 }}
        >
          <ReportCard
            name="Skills Match"
            detail={searchObject["Skill match"]}
            para="This section shows the matched skills from the job description."
          />
        </motion.h3>
        <motion.h3
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, ease: "easeOut", duration: 0.7 }}
        >
          <ReportCard
            name="Time to read"
            detail={searchObject["Time to read"]}
            para="A short, focused resume creates a stronger and more positive impression."
          />
        </motion.h3>
      </div>
    </div>
  );
};

export default ReportCards;
