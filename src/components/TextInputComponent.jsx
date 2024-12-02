import { useState } from "react";
import { fetchArticlesFromNewsAPI } from "../utils/eventRegistry";
import { getPrediction } from "../utils/predictor";
import { extractKeywords } from "../utils/textRazor";

const TextInputComponent = () => {
  const [hasBeenRun, setHasBeenRun] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [keywords, setKeywords] = useState("");
  const [articles, setArticles] = useState([]);
  const [predicted_stance, setPredictedStance] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleAnalyze = async () => {
    if (userInput.trim()) {
      try {
        setHasBeenRun(true);
        setLoading(true);
        setError(null);

        setKeywords([]);
        setArticles([]);
        setPredictedStance("");

        // Step 1: Extract keywords
        const extractedKeywords = await extractKeywords(userInput);
        setKeywords(extractedKeywords);

        // Step 2: Fetch relevant articles
        const keywordsString = extractedKeywords.split(", ").join(",");
        const fetchedArticles = await fetchArticlesFromNewsAPI(userInput);
        setArticles(fetchedArticles);

        // Step 3: Get Prediction
        let count = 0;
        let stance = "Debatable";

        for (let article of fetchedArticles)
        {
          let res = await getPrediction(userInput, article.description);
          if (count == 0)
          {
            stance = res;
            count = 1;
          }
          else if (stance != res)
          {
            count -= 1;
          }
          else count += 1;
        }
        setPredictedStance(count == 0 ? "Debatable" : stance == "agree" ? "Correct" : "Incorrect");
      } catch (error) {
        console.error("Error during analysis:", error);
        setError("An error occurred while processing your request. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please enter a claim to analyze.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "transparent",
      }}
    >
      <h3
        style={{
          background: "linear-gradient(to right, #FFA500, #FF4500)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Enter Your Claim
      </h3>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type your claim"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "600px",
          marginBottom: "20px",
          border: "2px solid",
          borderImageSource: "linear-gradient(to right, #FFA500, #FF4500)",
          borderImageSlice: 1,
          borderRadius: "8px",
          backgroundColor: "transparent",
          color: "white",
          outline: "none",
        }}
      />
      <button
        onClick={handleAnalyze}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#FF4500",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "16px",
          transition: "transform 0.2s, background-color 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#FF6347")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#FF4500")}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      <div style={{ marginTop: "20px", color: "white" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="w-80 bg-gray-800 text-white rounded-lg p-4 shadow-lg">
        {!hasBeenRun && (
          <>
            <p>Enter a claim to generate keywords.</p>
          </>
        )}
        {hasBeenRun && ((keywords.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-4 border-b border-orange-500 pb-2">Extracted Keywords</h3>
            <p>{keywords}</p>
            <div style={{padding: 10 + 'px'}}></div>
          </>
        )) || (
          <>
            <h3 className="text-xl font-bold mb-4 border-b border-orange-500 pb-2">Extracted Keywords</h3>
            <p>No keywords detected.</p>
          </>
        ))}
        {hasBeenRun && keywords.length > 0 && articles.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-4 border-b border-orange-500 pb-2">Relevant Articles</h3>
            <ul>
              {articles.slice(0, 5).map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#FFA500", textDecoration: "none" }}
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{padding: 10 + 'px'}}></div>
          </>
        )}

        {hasBeenRun && keywords.length > 0 && articles.length > 0 && predicted_stance != "" && (
          <>
            <h3 className="text-xl font-bold mb-4 border-b border-orange-500 pb-2">Predicted Stance</h3>
            <p>{predicted_stance}</p>
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default TextInputComponent;
