import { useState } from "react";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

import TextInputComponent from "./components/TextInputComponent";
import Workflow from "./components/Workflow";

const App = () => {
  const [keywords, setKeywords] = useState([]); // Initialize keywords state

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <TextInputComponent setKeywords={setKeywords} />
        <FeatureSection />
        <Workflow />
      </div>
    </>
  );
};

export default App;
