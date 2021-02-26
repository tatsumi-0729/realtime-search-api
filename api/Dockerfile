FROM node:14.15.4-alpine3.10

WORKDIR /api

RUN apk update \
  && apk --no-cache add git ca-certificates wget

RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.30-r0/glibc-2.30-r0.apk \
  && apk --no-cache add glibc-2.30-r0.apk

RUN yarn install \
  && npm install \
  && npm install express \
  && npm install cors \
  && npm install body-parser \
  && npm install googleapis \
  && npm install dotenv
