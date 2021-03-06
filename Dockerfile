FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci 

COPY . . 

EXPOSE 3500

CMD [ "node","index.js" ]

