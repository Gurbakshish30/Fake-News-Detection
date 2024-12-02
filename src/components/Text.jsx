import { useState } from "react";

function FakeNewsDetector() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    // Call your API or machine learning model here and set the output
    const result = fakeNewsDetectionModel(inputText); // Replace with your model logic
    setOutputText(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Fake News Detector
        </h1>

        {/* Input Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="input-text">
            Enter News Article or Text
          </label>
          <textarea
            id="input-text"
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Paste the news article text here..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Detect Fake News
          </button>
        </div>

        {/* Output Section */}
        {outputText && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-medium text-gray-800">Detection Result:</h2>
            <p className="text-gray-700 mt-2">{outputText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Replace this with your actual fake news detection logic
function fakeNewsDetectionModel(input) {
  // For demonstration, we'll randomly return Fake or Real
  return Math.random() > 0.5 ? "This news is Real." : "This news is Fake.";
}

export default FakeNewsDetector;
