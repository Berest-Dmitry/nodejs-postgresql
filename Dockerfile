FROM node:16-alpine
WORKDIR /nodejs-postgresql-master
COPY . .
RUN yarn install --production
CMD ["node", "routes/index.js"]