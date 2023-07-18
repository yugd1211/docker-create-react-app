FROM node:alpine

WORKDIR /front
RUN npm install -g create-react-app
RUN npx create-react-app my-app

WORKDIR /front/my-app

CMD [ "npm", "start" ]