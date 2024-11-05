# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app’s source code
COPY . .

# Build the app for production
RUN npm run build

# Serve the app with NGINX
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
