import React from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const ActionVerbs = () => {
  const searchObject = useSelector((store) => store.gemini.searchObject);

  return (
    <div className="flex flex-col  justify-center items-center  w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] my-8">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, ease: "easeOut", duration: 0.7 }}
        className="text-2xl"
      >
        Action Verbs
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, ease: "easeOut", duration: 0.7 }}
        className="text-sm md:text-[15px] text-[#686868] font-thin mt-2 mb-4 text-center"
      >
        This section analyzes the use of action verbs in your resume, which help
        make your statements more impactful and engaging to hiring managers.
      </motion.div>
      <div className="flex flex-row  flex-wrap  justify-center items-start">
        {searchObject["Action verbs used in CV"].map((m, i) => (
          <motion.div
            key={i}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, ease: "easeOut", duration: 0.7 }}
            className="px-4 py-1 border-solid border-[1px] text-sm md:text-base border-orange-400 rounded-full m-2"
          >
            {m}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActionVerbs;
