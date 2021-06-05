FROM node:14
WORKDIR /dist
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]