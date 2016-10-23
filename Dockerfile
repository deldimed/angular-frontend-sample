FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm install -g webpack
RUN webpack --optimize-minimize --optimize-occurence-order --optimize-dedupe

EXPOSE 3000
CMD [ "npm", "start" ]
