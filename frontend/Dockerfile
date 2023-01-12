FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

RUN chown -R node /app/node_modules

USER node

CMD ["npm", "start"]