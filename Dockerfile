FROM node:13-alpine
WORKDIR /usr/corona/src/app
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@3.0.1 -g 
COPY . .
EXPOSE 3001

CMD ["npm", "start"]