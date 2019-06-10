#FROM node:latest
FROM node:current-alpine

# Set the working dirertory to /app
WORKDIR /app

# Copy package.json to the container
COPY package.json .

# Install package.json modules in container
RUN npm install

#  Copy everything to container /app
COPY . .

EXPOSE 3000

# Start the Server
CMD ["node", "index.js"]


