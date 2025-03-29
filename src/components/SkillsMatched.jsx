import React from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const SkillsMatched = () => {
  const searchObject = useSelector((store) => store.gemini.searchObject);

  return (
    <div className="flex flex-col  justify-center items-center w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] my-8">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, ease: "easeOut", duration: 0.7 }}
        className="text-2xl"
      >
        Skills Matched
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, ease: "easeOut", duration: 0.7 }}
        className="text-sm md:text-[15px] text-[#686868] font-thin mt-2 mb-4 text-center"
      >
        This section provides a detailed comparison of the skills listed in the
        job description against those found in your resume, highlighting the
        overall match.
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center items-start mb-8">
        {Object.entries(searchObject["Skills matched"]).map(
          ([key, value], i) => (
            <motion.div
              key={i}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, ease: "easeOut", duration: 0.9 }}
              className="flex flex-row justify-between items-center px-4 py-1 border-solid border-[1px] text-sm md:text-base border-orange-400 rounded-full m-2"
            >
              <h1 className="pr-4">{key}</h1>
              <h1 className="text-gray-500">{value}</h1>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default SkillsMatched;
