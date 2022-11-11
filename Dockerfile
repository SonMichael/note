FROM node:13.12.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci && npm install react-scripts@3.4.1 -g --silent 

COPY . .

RUN npm run postinstall && npm run build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html
