import React, { useRef, useState } from "react";
import pdfToText from "react-pdftotext";
import { useDispatch } from "react-redux";
import { addJobDescription, addResumeText } from "../utils/formSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Form = () => {
  const dispatch = useDispatch();
  const jobDescriptionInput = useRef(null);
  const [fileText, setFileText] = useState(null);
  const navigate = useNavigate();

  const handleUploadFile = (f) => {
    const files = f.target.files[0];

    pdfToText(files)
      .then((text) => setFileText(text))
      .catch((error) => alert("Failed to extract text from pdf" + error));
  };

  const handleSubmit = () => {
    if (fileText && jobDescriptionInput?.current.value) {
      dispatch(addResumeText(fileText));
      dispatch(addJobDescription(jobDescriptionInput?.current.value));
      navigate("/resume");
    } else {
      alert("Please upload your resume and paste the job description.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, ease: "easeIn" }}
    >
      <form
        className="flex flex-col justify-center items-center md:items-start"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="file"
          accept=".doc,.pdf"
          onChange={handleUploadFile}
          required
          className="p-3 text-sm border-dashed border-[1px] border-black bg-black/10 rounded-md my-4 w-[300px] md:w-[400px] lg:w-[500px]"
        ></input>
        <textarea
          placeholder="Paste Job Description Here..."
          ref={jobDescriptionInput}
          required
          className="border-solid border-[1px] text-sm border-black rounded-md w-[300px] md:w-[400px] lg:w-[500px] py-1 px-2 placeholder:font-light"
          rows="4"
        ></textarea>
        <button
          className=" duration-300 ease-in-out bg-orange-600 text-white px-[126px] md:px-[176px] lg:px-[218px] py-4 rounded-md md:text-base lg:text-lg mt-12 hover:bg-black"
          onClick={handleSubmit}
        >
          Analyze
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
