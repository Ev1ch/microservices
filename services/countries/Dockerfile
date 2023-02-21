FROM node:16-alpine

WORKDIR /usr/server

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

COPY .env .env

EXPOSE $PORT
CMD [ "yarn", "start:prod" ]

