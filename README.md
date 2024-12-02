# Word of Mouth: Fake News Detection

## 📜 Overview
**Word of Mouth** is a web application that detects fake news using machine learning and NLP techniques. It features a pre-trained stance detection model with 95% accuracy and a user-friendly interface built with React and TailwindCSS. This project combines scalable backend APIs and advanced data processing to combat misinformation effectively.

---

## 🚀 Features
- **Real-Time Detection**: Predicts the authenticity of news articles using a pre-trained machine learning model.
- **Interactive Interface**: User-friendly web design built with React and TailwindCSS.
- **Scalable Backend**: Integrated APIs for processing large datasets efficiently.
- **Model Precision**: Achieves 95% accuracy in fake news detection through NLP techniques.

---

## 📂 Repository Structure
- **MACHINE_LEARNING**: Contains datasets, training scripts, and pre-trained models for fake news detection.
- **WEBSITE**: Includes frontend (React, TailwindCSS) and backend (Node.js) code for the web application.

---

## 🛠️ Installation and Setup

### Prerequisites
- Python 3.7+
- Node.js 16+
- npm

### Clone the Repository
```bash
git clone https://github.com/Gurbakshish30/Fake-News-Detection.git
cd Fake-News-Detection
```
## Machine Learning Setup
**Navigate to the MACHINE_LEARNING folder:**

```bash
cd MACHINE_LEARNING
```
**Install the necessary Python dependencies:**

```bash
pip install -r requirements.txt
```

**To train the model, run the following command:**

```bash
python train_model.py
```
**For predictions, use the predict_stance.py script:**

```bash
python predict_stance.py --input <input_file>
```

### Website Setup
**Navigate to the WEBSITE folder:**

```bash
cd WEBSITE
```

**Install the required Node.js dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```

**Open the application in your browser at http://localhost:3000.**

## 📂Acknowledgement
- **Datasets:** Thanks to Event Registry for providing the data.
- **Tools:** TensorFlow, React, Node.js, and TailwindCSS.










