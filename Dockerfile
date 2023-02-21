FROM node:16.17.0-alpine

# set working directory
WORKDIR /my-app

# add `/my-app/node_modules/.bin` to $PATH
ENV PATH /my-app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install -g npm@latest --silent
RUN npm install --silent

# add app
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
