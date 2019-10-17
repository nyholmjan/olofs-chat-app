FROM mhart/alpine-node:11

WORKDIR /usr/src/app

COPY . . 

RUN yarn && yarn build

EXPOSE 8080
CMD [ "node", "dist/server/server.js" ]
