FROM node:alpine

WORKDIR /front
RUN npm install -g create-react-app
RUN npm install -g typescript
# RUN npx create-react-app my-app --template typescript
WORKDIR /front/my-app

CMD [ "npm", "start" ]