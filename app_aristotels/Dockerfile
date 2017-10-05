FROM node:boron as base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
RUN npm install


COPY  .babelrc \
      .eslintrc.yml \
      webpack.config.babel.js \
      ./

COPY src ./src/

EXPOSE 9001


CMD ["webpack-dev-server"]
