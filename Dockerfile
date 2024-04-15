FROM node:18-alpine
#all environment variables have been moved to docker-compsoe.yml
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app

CMD [ "npm", "start" ]
