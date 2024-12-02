import axios from "axios";

// Function to extract keywords via your backend API (which calls TextRazor)
export const extractKeywords = async (text) => {
  try {
    // Sending a POST request to your backend server to extract keywords
    const response = await axios.post("http://localhost:5000/textrazor", {
      text: text,
    });

    if (response.data.response.entities === undefined)
      return "No keywords found!";
  
    let res = Array();
    for (let x of response.data.response.entities)
      res.push(x.entityEnglishId);

    return res.join(" ");
  } catch (error) {
    console.error("Error extracting keywords:", error);
    throw new Error("Failed to extract keywords. Please try again.");
  }
};
