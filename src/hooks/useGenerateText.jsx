import { useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY, getSubstringBetween } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchObject, removeSearchObject } from "../utils/geminiSlice";
import { removeJobDescription, removeResumeText } from "../utils/formSlice";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const useGenerateText = (prompt) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!prompt) return;

    const generate = async () => {
      try {
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
        });

        const result = await model.generateContent(prompt);
        const subString = getSubstringBetween(result.response.text(), "n", "`");
        const parsedData = await JSON.parse(subString);

        dispatch(addSearchObject(parsedData));

        return;
      } catch (error) {
        console.error("Error generating text:", error);
        return "Failed to generate response.";
      }
    };

    generate();

    return () => {
      dispatch(removeSearchObject());
      dispatch(removeResumeText());
      dispatch(removeJobDescription());
    };
  }, []);
};
