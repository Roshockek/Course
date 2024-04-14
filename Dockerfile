FROM node:latest

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]

