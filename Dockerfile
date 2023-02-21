FROM node:16.17.0-alpine

WORKDIR /my-app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
