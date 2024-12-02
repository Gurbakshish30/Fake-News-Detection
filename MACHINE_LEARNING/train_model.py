import numpy as np
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, recall_score, classification_report, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt
from util import FNCData, pipeline_train

# File paths
train_instances_file = 'train_stances.csv'
train_bodies_file = 'train_bodies.csv'

# Load data
train_data = FNCData(train_instances_file, train_bodies_file)

# Preprocess the data
train_set, train_stances, bow_vectorizer, tfreq_vectorizer, tfidf_vectorizer = pipeline_train(train_data, train_data, lim_unigram=5000)

# Train-test split
X_train, X_val, y_train, y_val = train_test_split(train_set, train_stances, test_size=0.2, random_state=42)

# Model: Logistic Regression with class weights to handle class imbalance
model = LogisticRegression(class_weight='balanced', max_iter=1000)

# Train the model
model.fit(X_train, y_train)

# Validate the model
y_pred = model.predict(X_val)

# Compute accuracy, F1 score, and recall
accuracy = accuracy_score(y_val, y_pred)
f1 = f1_score(y_val, y_pred, average='weighted')
recall = recall_score(y_val, y_pred, average='weighted')

# Print performance metrics
print(f"Validation Accuracy: {accuracy * 100:.2f}%")
print(f"F1 Score (Weighted): {f1:.4f}")
print(f"Recall (Weighted): {recall:.4f}")

# Print classification report
print("\nClassification Report:")
print(classification_report(y_val, y_pred))

# Print confusion matrix
print("\nConfusion Matrix:")
print(confusion_matrix(y_val, y_pred))

# Plot Confusion Matrix
cm = confusion_matrix(y_val, y_pred)

# Set up the plot
plt.figure(figsize=(10, 7))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", xticklabels=["unrelated", "disagree", "agree", "support"], yticklabels=["unrelated", "disagree", "agree", "support"])

# Add labels and title
plt.title("Confusion Matrix")
plt.xlabel("Predicted")
plt.ylabel("True")
plt.show()

# Save the model and vectorizers
with open('logistic_regression_model.pkl', 'wb') as f:
    pickle.dump(model, f)

with open('bow_vectorizer.pkl', 'wb') as f:
    pickle.dump(bow_vectorizer, f)

with open('tfreq_vectorizer.pkl', 'wb') as f:
    pickle.dump(tfreq_vectorizer, f)

with open('tfidf_vectorizer.pkl', 'wb') as f:
    pickle.dump(tfidf_vectorizer, f)
