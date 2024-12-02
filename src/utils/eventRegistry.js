import axios from "axios";

const API_KEY = "65f8bf906093442cb1db9febdb665960"; // Replace with your News API key
const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchArticlesFromNewsAPI = async (keywords) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: keywords,
        language: "en",
        sortBy: "relevancy",
        pageSize: 50,
        apiKey: API_KEY,
      },
    });

    let res = response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
    }));

    return res;
  } catch (error) {
    console.error("Error fetching articles:", error.response?.data || error.message);
    throw error;
  }
};
