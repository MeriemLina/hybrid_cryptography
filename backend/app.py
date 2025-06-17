from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello from Flask backend!"

@app.route("/linaaa")
def lina_slays():
    return "lina bzf harba khawti"

@app.route("/decrypt", methods=["POST"])
def decrypt_message():
    data = request.json
    print("Received:", data["message"])
    return jsonify({"message": "Decrypted: " + data["message"]})


if __name__ == "__main__":
    app.run(debug=True)
