FROM mhart/alpine-node:11

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN yarn && yarn global add typescript && yarn build

EXPOSE 8080
CMD [ "node", "dist/server/server.js" ]
