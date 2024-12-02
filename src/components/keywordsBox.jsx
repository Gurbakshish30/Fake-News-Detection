import React, { useEffect, useState } from "react";

const KeywordsBox = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    // Fetch stored keywords from the backend
    const fetchKeywords = async () => {
      try {
        const response = await fetch("/keywords"); // Proxy server redirects this to your backend
        const data = await response.json();
        setKeywords(data.storedKeywords || []); // Update state with extracted keywords
      } catch (error) {
        console.error("Error fetching keywords:", error);
      }
    };

    fetchKeywords();
  }, []);

  return (
    <div className="w-80 bg-gray-800 text-white rounded-lg p-4 shadow-lg">
      <h3 className="text-xl font-bold mb-4 border-b border-orange-500 pb-2">
        Extracted Keywords
      </h3>
      {keywords.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text border border-orange-500 rounded-full px-3 py-1 text-sm font-medium"
            >
              {keyword}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 italic">No keywords extracted yet.</p>
      )}
    </div>
  );
};

export default KeywordsBox;
