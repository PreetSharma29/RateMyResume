import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    resumeText: null,
    jobDescription: null,
  },
  reducers: {
    addResumeText: (state, action) => {
      state.resumeText = action.payload;
    },
    removeResumeText: (state, action) => {
      state.resumeText = null;
    },
    addJobDescription: (state, action) => {
      state.jobDescription = action.payload;
    },
    removeJobDescription: (state, action) => {
      state.jobDescription = null;
    },
  },
});

export const {
  addResumeText,
  removeResumeText,
  addJobDescription,
  removeJobDescription,
} = formSlice.actions;
export default formSlice.reducer;
