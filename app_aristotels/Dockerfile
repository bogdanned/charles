FROM node:boron as base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY  .babelrc \
      .eslintrc.yml \
      webpack.config.babel.js \
      index.html.ejs \
      shared/certs/lokalleads.de-wildcard.cer \
      shared/certs/lokalleads.de-wildcard.key \
      entrypoint.sh \
      ./

COPY src ./src/

ENV PATH=./node_modules/.bin:$PATH \
    PORT=9001 \
    NODE_ENV=development \
    API_DOMAIN=api.lokalleads.de \
    AUTH_DOMAIN=www.lokalleads.de \
    ADMIN_GATEWAY=https://pre.www.lokalleads.de \
    CONSUMER_GATEWAY=https://offerio.lokalleads.de \
    OFFERIO_GATEWAY=https://offerio-api.lokalleads.de \
    CDN_DOMAIN=customer.lokalleads.de:9001 \
    RUNTIME_ENV=dev


EXPOSE 9001


RUN eslint . && \
    babel src -d dist

CMD ["webpack-dev-server"]
ENTRYPOINT ["./entrypoint.sh"]

FROM base as prod

RUN   NODE_ENV=production \
      API_DOMAIN=pre2-api.lokalleads.de \
      AUTH_DOMAIN=www.lokalleads.de \
      ADMIN_GATEWAY=https://pre.www.lokalleads.de \
      CONSUMER_GATEWAY=https://pre2-offerio.lokalleads.de \
      OFFERIO_GATEWAY=https://pre2-offerio-api.lokalleads.de \
      CDN_DOMAIN=pre2-customer.lokalleads.de \
      RUNTIME_ENV=pre \
      webpack -p && \
      mv public public-pre && \
      mv webpack-assets.json webpack-assets-pre.json

RUN   NODE_ENV=production \
      API_DOMAIN=api.lokalleads.de \
      AUTH_DOMAIN=www.lokalleads.de \
      ADMIN_GATEWAY=https://www.lokalleads.de \
      CONSUMER_GATEWAY=https://offerio.lokalleads.de \
      OFFERIO_GATEWAY=https://offerio-api.lokalleads.de \
      CDN_DOMAIN=customer.lokalleads.de \
      RUNTIME_ENV=live \
      webpack -p && \
      mv public public-live && \
      mv webpack-assets.json webpack-assets-live.json
