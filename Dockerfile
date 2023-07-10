FROM node
WORKDIR /src
COPY . .
EXPOSE 9009
CMD node server.js

