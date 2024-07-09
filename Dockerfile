FROM node:18

LABEL org.opencontainers.image.source https://github.com/mabebrahimi/myblog

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD npm run start