FROM node:14-alpine

WORKDIR /app

RUN npm install

COPY . /app

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]