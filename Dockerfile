# Stage 1: Build the app using Vite
FROM node:21 AS build
WORKDIR /app
COPY package.json ./
COPY vite.config.js ./
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve the static site with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
