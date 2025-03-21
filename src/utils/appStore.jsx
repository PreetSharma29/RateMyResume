import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import geminiReducer from "./geminiSlice";

const appStore = configureStore({
  reducer: {
    form: formReducer,
    gemini: geminiReducer,
  },
});

export default appStore;
