import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import sys
import json

# Load the pre-trained model and tokenizer
model_name = "gooohjy/suicidal-bert"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

# Move model to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

def predict_suicide_risk(text):
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512)
    inputs = {key: value.to(device) for key, value in inputs.items()}  # Move input to the same device as model
    
    with torch.no_grad(): 
        outputs = model(**inputs)
    
    logits = outputs.logits
    probabilities = torch.nn.functional.softmax(logits, dim=-1)
    prediction = torch.argmax(probabilities, dim=-1).item()

    return {"risk": bool(prediction == 1), "probabilities": probabilities.tolist()}

if __name__ == "__main__":
    message = sys.argv[1]
    result = predict_suicide_risk(message)
    print(json.dumps(result))  # Convert dictionary to JSON string
