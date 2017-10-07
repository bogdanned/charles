FROM node:boron as base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY  .babelrc \
      .eslintrc.yml \
      webpack.config.babel.js \
      index.html.ejs \
      ./

COPY src ./src/

ENV PATH=./node_modules/.bin:$PATH \
    NODE_ENV=development \
    RUNTIME_ENV=dev

EXPOSE 3000

ENTRYPOINT ["webpack-dev-server"]
