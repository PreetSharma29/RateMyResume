import React from "react";
import { useSelector } from "react-redux";
import { useGenerateText } from "../hooks/useGenerateText";
import Report from "./Report";

const MainContainer = () => {
  const resumeText = useSelector((store) => store.form.resumeText);
  const jobDescription = useSelector((store) => store.form.jobDescription);

  const searchQuery =
    "Suppose you are a Resume checker. Check the Resume and Job Description.  Resume text: " +
    resumeText +
    " Job description: " +
    jobDescription +
    ' . Analyze the resume based on the job description and return a JSON object in the following format:  {  "Time to read": "X mins.",  "Number of action verbs used in the resume": X(must return the number, must be equal to the Action verbs array length, number of unique action verbs in CV), "Skill match": "X (every single skill in CV that matches with job description, do not count if a skill is used more than once, duplicate skill does not count)/Y (every single skill in job description, all skills in job description, duplicate skill does not count, always greater than X, must be equal to the Skills Matched object length)", "Readability": "[Easy / Moderate / Difficult]", "Skills matched": {  "skill name(write only skill name, do not copy paste the sentences, extract skills from that, any kind of degree do not count as skill so do not count it)": "X (in CV)/Y (in job description)", "[for all skills from job description (every single skill)]": "X(must return a number, number of times in CV, should be a number)/Y(must return a number,number of times in job description, should be a number)" },  "Action verbs used in CV": [ "Action verb 1", "Action verb 2", "Action verb 3" ],  "Total score": "X (return only number, out of 75, based on job description match after considering all factors, do not give score easily, after considering various factors give the score, go for the hard scoring)"  }';

  useGenerateText(searchQuery);

  return (
    <div className="w-screen h-screen">
      <Report />
    </div>
  );
};

export default MainContainer;
