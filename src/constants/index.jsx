import { BatteryCharging, BotMessageSquare, PlugZap, ShieldHalf } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Text Input",
    description:
      "Users can input a claim to verify it's authenticity.",
  },
  {
    icon: <ShieldHalf />,
    text: "Content Classification (Fake/Real News):",
    description:
      "Uses a trained machine learning model to classify news articles as fake or real.The model analyzes linguistic patterns and common traits found in fake news articles to make accurate predictions.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Detection",
    description:
      "The website analyzes the submitted content and provides instant results, labeling the news as Real or Fake.",
  },
  {
    icon: <PlugZap />,
    text: "Relevant Articles",
    description:
      "The website provies the relevant articles to the claim which are used by the machine learning model to classify the claim.",
  }
];

export const checklistItems = [
  {
    title: "Input Section:Text Input Field:",
    description:
      "A simple box where users can paste the content of a news article or headline.",
  },
  {
    title: "Data Preprocessing:",
    description:
      "Text Cleaning: The website should automatically remove irrelevant characters, HTML tags, or unnecessary formatting from the user’s input.",
  },
  {
    title: "Model Processing:",
    description:
      "Content Analysis: The input data will be fed into the trained machine learning model for classification (real or fake).",
  },
  {
    title: " Results Display:",
    description:
      "Classification Outcome: Show whether the news is classified as Fake or Real Confidence Score: Provide a percentage-based confidence score to indicate the model's certainty about the classification.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
