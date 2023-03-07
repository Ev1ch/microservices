# Choosing the base image and setting the working directory
FROM node:16-alpine
WORKDIR /usr/migrations

# Installing dependencies
COPY package.json ./
RUN yarn install

# Copying source files
COPY . .
