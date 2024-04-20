# Use a minimal base image
FROM debian:bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Expose the port on which Flask will run
EXPOSE 3002

# Run app.py when the container launches
CMD ["python", "app.py"]
