import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import requests
from ultralytics import YOLO
import cv2
import numpy as np
import base64

load_dotenv()

app = Flask(__name__)
cv2.setUseOptimized(True)
cv2.setNumThreads(0)



print("Loading YOLOv8 model...")
model = YOLO('best.pt')
print("Done, model loaded")

@app.route('/detect_pattern', methods=['POST'])
def detect_pattern():
    image_url = request.get_json().get("image")
    # Check if an image file is present in the request
    if not image_url:
        return jsonify({"error": "Missing image URL"}), 400
    
    try:
        response = requests.get(image_url, stream=True)
        response.raise_for_status()  # Raise an exception for unsuccessful downloads
    except Exception as e:
        return jsonify({"error": "Failed to download image"}), 400


    # Convert image file to numpy array
    image_np = np.frombuffer(response.content, np.uint8)
    
    # Decode image
    frame = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

    cust = []
    boxes = []
    encoded_image = ""
    patterns = []
    boxes2 = []

    # Run YOLOv8 inference on the image
    results = model(frame)



    for result in results:
        
          # Probs object for classification outputs
        #result.show()  # display to screen
        result.save(filename='result.jpg')
        with open("result.jpg", "rb") as image_file:
            encoded_image = base64.b64encode(image_file.read())
            #print(encoded_image)
        



        
        class_names = result.names  # Dictionary mapping indices to class names
        labels = result.boxes.cls.tolist()  # List of class indices
        boxes = result.boxes.xyxy.tolist()
        for i, label_index in enumerate(labels):
            label_name = class_names[int(label_index)]
            print(f"Object {i+1}: {label_name}")
            patterns.append({'label': label_name, 'label_index': label_index})
        


        for i, box in enumerate(boxes):
            print(f"Object {i+1} bounding box: ({box[0]:.2f}, {box[1]:.2f}) - ({box[2]:.2f}, {box[3]:.2f})")
            boxes2.append({'bounding_box': {
                'x1': box[0],
                'y1': box[1],
                'x2': box[2],
                'y2': box[3]
            }, 'sequence': i})


        
    # Prepare JSON response
    response = {
        'pattern': patterns,
        'bounding_boxes': boxes2,
        # 'image_data' : str(encoded_image)
    }

    return jsonify(response)



@app.route('/')
def hello():
    return 'Hello, World!'





if __name__ == '__main__':
    print("Starting server...")
    environment = os.environ.get("ENVIRONMENT", "development")
    debug = False if environment == "development" else True

    port = int(os.environ.get("PORT", 3002))
    app.run(host='0.0.0.0', port=port, debug=debug)
