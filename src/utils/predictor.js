import axios from "axios";
const BASE_URL = "http://localhost:8888/predict";

export const getPrediction = async (claim, article_body) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        "claim": claim,
        "article_body": article_body
      },
    });

    return response.data.predicted_stance;
  } catch (error) {
    console.error("Error predicting stance:", error.response?.data || error.message);
    throw error;
  }
};
