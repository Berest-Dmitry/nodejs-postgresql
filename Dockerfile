FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /nodejs-postdresql
COPY . .
RUN yarn install --production
CMD ["node", "routes/index.js"]