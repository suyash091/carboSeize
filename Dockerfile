FROM node:14.15.1 as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app
RUN npm run build


EXPOSE 80
CMD ["npm", "run", "build"]