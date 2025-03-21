export const GEMINI_SEARCH_API =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";

export const getSubstringBetween = (str, startChar, endChar) => {
  if (typeof str !== "string") {
    console.error("Invalid input: str is not a string", str);
    return null;
  }

  const startIndex = str.indexOf(startChar);
  const endIndex = str.indexOf(endChar, startIndex + 1);

  if (startIndex !== -1 && endIndex !== -1) {
    return str.substring(startIndex + 1, endIndex);
  }

  console.warn("Start or end character not found in string:", str);
  return null;
};
