import numpy as np
import pickle
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask, request, jsonify
from flask_cors import CORS

# Load the trained model and vectorizers
with open('logistic_regression_model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('bow_vectorizer.pkl', 'rb') as f:
    bow_vectorizer = pickle.load(f)

with open('tfreq_vectorizer.pkl', 'rb') as f:
    tfreq_vectorizer = pickle.load(f)

with open('tfidf_vectorizer.pkl', 'rb') as f:
    tfidf_vectorizer = pickle.load(f)

# Function to predict the stance of the given headline and body
def predict_stance(headline, body):
    # Prepare the feature vector for prediction
    bow_head = bow_vectorizer.transform([headline]).toarray()
    tfreq_head = tfreq_vectorizer.transform(bow_head).toarray()[0].reshape(1, -1)
    tfidf_head = tfidf_vectorizer.transform([headline]).toarray().reshape(1, -1)
    
    bow_body = bow_vectorizer.transform([body]).toarray()
    tfreq_body = tfreq_vectorizer.transform(bow_body).toarray()[0].reshape(1, -1)
    tfidf_body = tfidf_vectorizer.transform([body]).toarray().reshape(1, -1)
    
    # Compute cosine similarity between headline and body
    cosine_sim = cosine_similarity(tfidf_head, tfidf_body)[0].reshape(1, 1)
    
    # Combine the feature vectors
    feature_vector = np.squeeze(np.c_[tfreq_head, tfreq_body, cosine_sim])

    # Predict stance using the trained model
    stance_prediction = model.predict([feature_vector])
    
    return stance_prediction[0]

stances = ['agree', 'disagree', 'discuss', 'unrelated']

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods = ["GET"])
def predict_endpoint():
    claim = request.args.get("claim")
    article_body = request.args.get("article_body")

    return jsonify({
        "predicted_stance": stances[predict_stance(claim, article_body)]
    })

app.run(port = 8888)
