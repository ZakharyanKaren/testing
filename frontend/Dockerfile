# Use the official Node.js 10 image.
FROM node:20.10.0-alpine
LABEL authors="vvardanyan"

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN yarn

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD ["yarn", "run", "dev"]
