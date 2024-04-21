# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

RUN apt-get update && apt-get install -y gcc python3-dev

ADD https://huggingface.co/foduucom/stockmarket-pattern-detection-yolov8/resolve/main/best.pt /app/best.pt

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 3002

# Define environment variable
ENV FLASK_APP=app.py

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0"]