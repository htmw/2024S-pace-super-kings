import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
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

    # Check if an image file is present in the request
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    # Read image file from request
    image_file = request.files['image']

    # Convert image file to numpy array
    image_np = np.frombuffer(image_file.read(), np.uint8)
    
    # Decode image
    frame = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

    cust = []
    boxes = []
    encoded_image = ""

    # Run YOLOv8 inference on the image
    results = model(frame)



    for result in results:
        
          # Probs object for classification outputs
        #result.show()  # display to screen
        result.save(filename='result.jpg')
        with open("result.jpg", "rb") as image_file:
            encoded_image = base64.b64encode(image_file.read())
            print(encoded_image)
        
    # Extract pattern information and bounding box data
    pattern_info = {'pattern': results[0].names,
                    'boxes' : cust 
                    }

    

    for box in results[0].boxes.xyxyn:
        label_index = int(box[-1])
        if label_index < len(results[0].names):
            label = str(results[0].names[label_index])
            bounding_box = [int(coord) for coord in box[:-1]]
            boxes.append({'label': label, 'bounding_box': bounding_box})

    for box in results[0].boxes.xywhn:
        label_index = int(box[-1])
        if label_index < len(results[0].names):
            label = str(results[0].names[label_index])
            bounding_box = [int(coord) for coord in box[:-1]]
            boxes.append({'label': label, 'bounding_box': bounding_box})
            
    for box in results[0].boxes.xywhn:
        label_index = int(box[-1])
        if label_index < len(results[0].names):
            label = str(results[0].names[label_index])
            bounding_box = [int(coord) for coord in box[:-1]]
            boxes.append({'label': label, 'bounding_box': bounding_box})

    # Prepare JSON response
    response = {
        'pattern_info': pattern_info,
        'bounding_boxes': boxes,
        'image_data' : str(encoded_image)
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
