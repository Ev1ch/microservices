# Choosing the base image and setting the working directory
FROM node:18-alpine
WORKDIR /usr/server

# Installing dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copying source files
COPY . .

# Copying environment variables
COPY .env .env

# Building app
RUN yarn build

# Running the app
EXPOSE $PORT
CMD [ "yarn", "start:prod" ]
