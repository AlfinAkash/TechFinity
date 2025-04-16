# Stage 1: Build the Vite app
FROM node:21 AS build
WORKDIR /app

# Copy only what's needed for installing dependencies first
COPY package.json package-lock.json* ./

# Install dependencies first (cache-friendly)
RUN npm install

# Now copy the rest of the files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
