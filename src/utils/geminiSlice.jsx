import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    searchObject: {
      "Time to read": "0 minutes",
      "Number of action verbs used in the resume": 0,
      "Skill match": "0/0",
      Readability: "NA",
      "Skills matched": {},
      "Action verbs used in CV": [],
      "Total score": 0,
    },
  },
  reducers: {
    addSearchObject: (state, action) => {
      state.searchObject = action.payload;
    },
    removeSearchObject: (state, action) => {
      state.searchObject = {
        "Time to read": "0 minutes",
        "Number of action verbs used in the resume": 0,
        "Skill match": "0/0",
        Readability: "NA",
        "Skills matched": {},
        "Action verbs used in CV": [],
        "Total score": 0,
      };
    },
  },
});

export const { addSearchObject, removeSearchObject } = geminiSlice.actions;
export default geminiSlice.reducer;
