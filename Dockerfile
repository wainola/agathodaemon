FROM node:10.14.2
RUN mkdir -p /usr/server
WORKDIR /usr/server
COPY package*.json ./
RUN npm install --silent

COPY . .
EXPOSE 9000
CMD ["npm", "run", "dev"]
