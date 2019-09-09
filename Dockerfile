FROM node:12-alpine as build

RUN mkdir -p /www
WORKDIR /www

COPY . ./

RUN apk update && apk upgrade && apk add --no-cache bash git openssh
RUN yarn install
RUN npm run build
RUN rm -rf src

FROM node:12-alpine
WORKDIR /www

EXPOSE 3333
COPY --from=build /www /www

CMD ["npm", "start"]
