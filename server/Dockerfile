FROM node:current-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN npm ci --quiet && npm run build

FROM node:current-alpine as release
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --quiet --only=production
COPY --from=builder /usr/src/app/build ./build
CMD npm run start