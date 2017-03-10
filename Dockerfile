FROM node:7-alpine

RUN mkdir -p /www
WORKDIR /www

COPY . ./

RUN npm install
RUN npm run build
RUN npm prune --production

EXPOSE "3333"

CMD ["npm", "start"]