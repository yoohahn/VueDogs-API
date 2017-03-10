# VueDogs-API

This is just a small hack to test BrewDogs API and to play around with Vue 2.1.x and Webpack 2.2.x
The database is a fork of [samjbmason](https://github.com/samjbmason) [punkapi-server](https://github.com/samjbmason/punkapi-server).

## Just run the container
``` bash
$ docker pull yoohahn/brewdog-recipe
```

## Build local

``` bash
# install dependencies
$ npm install

# build for production with minification
$ npm run build

# serve with hot reload at localhost:3333
$ node server
```

## Build Docker

``` bash
# Build
$ docker build -t yoohahn/brewdog-recipe .

# Run
$ docker run --name brewdog-recipe -p 3333:3333 -d yoohahn/brewdog-recipe

# Stop
$ docker stop brewdog-recipe

# Remove
$ docker rm -f brewdog-recipe

# Remove Image
$ docker rmi -f yoohahn/brewdog-recipe
```

### Publish Docker Image
``` bash
# Build
$ docker tag HASH yoohahn/brewdog-recipe:latest

# Push
$ docker push yoohahn/brewdog-recipe:latest
