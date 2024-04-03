import os
from flask import Flask
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    environment = os.environ.get("ENVIRONMENT", "development")
    debug = False if environment == "production" else True

    port = int(os.environ.get("PORT", 3002))
    app.run(host='0.0.0.0', port=port, debug=debug)
