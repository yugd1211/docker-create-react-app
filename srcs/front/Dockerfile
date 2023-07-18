FROM node:alpine

WORKDIR /front
RUN npm install -g create-react-app
RUN npx create-react-app my-app
RUN npm install -g typescript
WORKDIR /front/my-app

CMD [ "npm", "start" ]