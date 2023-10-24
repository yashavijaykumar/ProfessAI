from flask import Flask, jsonify, Response
from flask_cors import CORS
import openai
import pandas as pd
import json

app = Flask(__name__)
CORS(app)

openai.api_key = "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"
def generate_formal_words(sentence, tone):

    # Set the prompt for the GPT-3 model
    prompt = f"Give me the best way of expressing this text so that I sound {tone} \"{sentence}\". If the input text sounds like I am having a problem then continue the sentence to help me out. "
    
    # Use the GPT-3 model to generate the shopping list
    completions = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.9,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0.6,
    )

    message = completions.choices[0].text
    words = message.strip().split("\n")
    return words

@app.route("/formal_words/<tone>/<sentence>", methods=["GET"])
def formal_words(sentence, tone):
    cleaned_data = generate_formal_words(sentence, tone)
    return jsonify(cleaned_data)


if __name__=="__main__":
    app.run(debug=True)