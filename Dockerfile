FROM node:buster

RUN apt-get update
RUN npm install -g http-server

COPY ./build /shop_ui
WORKDIR /

EXPOSE 8080/tcp

CMD ["http-server", "/shop_ui", "-s"]

