FROM node:latest

WORKDIR /app

COPY ../../package.json ./

RUN npm install

COPY src/div .

EXPOSE 8080

CMD ["node", "index.js"]