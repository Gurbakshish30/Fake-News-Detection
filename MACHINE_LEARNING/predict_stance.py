import numpy as np
import pickle
from sklearn.metrics.pairwise import cosine_similarity
from util import FNCData, pipeline_test

# Define the label mapping for stance prediction
label_ref_rev = {0: 'agree', 1: 'disagree', 2: 'discuss', 3: 'unrelated'}

# Load the trained model and vectorizers
model_filename = 'model.pkl'
vectorizer_filename = 'vectorizer.pkl'

with open(model_filename, 'rb') as model_file:
    clf = pickle.load(model_file)

with open(vectorizer_filename, 'rb') as vectorizer_file:
    bow_vectorizer = pickle.load(vectorizer_file)
    tfreq_vectorizer = pickle.load(vectorizer_file)
    tfidf_vectorizer = pickle.load(vectorizer_file)

# Function to preprocess the input and predict the stance
def predict_stance(headline, body):
    # Manually create a mock instance for prediction
    test_data = FNCData("test_stances_unlabeled.csv", "test_bodies.csv")
    test_data.instances = [{'Headline': headline, 'Body ID': 1}]  # Mock a single instance
    
    # Ensure that the input body text is processed as expected
    test_data.bodies[1] = body  # Assign the body of the claim to the body ID
    
    # Process the test data to create feature vectors
    test_set = pipeline_test(test_data, bow_vectorizer, tfreq_vectorizer, tfidf_vectorizer)

    # Debugging: Check the shape of the processed test set and the features
    print(f"Processed features for prediction: {test_set[0]}")

    # Predict the stance
    prediction = clf.predict(test_set)

    # Debugging: Check the prediction output
    print(f"Model prediction (raw): {prediction}")

    # Map the raw prediction to a stance label
    stance = label_ref_rev[prediction[0]]

    return stance

# Take custom input from the user
print("Enter the claim details to predict the stance.")
headline = input("Enter the headline of the claim: ")
body = input("Enter the body of the claim (or press Enter to skip): ")

# Predict the stance for the custom input
stance = predict_stance(headline, body)

# Output the result
print(f"The predicted stance for the headline is: {stance}")
