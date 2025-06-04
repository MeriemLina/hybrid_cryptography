from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Flask backend!"

@app.route("/api/decrypt", methods=["POST"])
def decrypt_message():
    data = request.json
    # You’ll handle the actual decryption here
    return jsonify({"status": "ok", "message": "Decryption logic goes here."})

if __name__ == "__main__":
    app.run(debug=True)
