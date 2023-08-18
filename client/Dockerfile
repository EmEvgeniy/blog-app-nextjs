# FROM node:18 AS build

# WORKDIR /app

# COPY package.json .
# RUN npm install

# COPY . .

# RUN npm run build
# # CMD ["npm", "run", "build"]
# # Этап 2: развертывание с использованием Nginx
# FROM nginx:alpine

# RUN rm -rf /usr/share/nginx/html/*
# # Копируем статические файлы из этапа сборки
# COPY --from=build /app/.next /usr/share/nginx/html
# # Копируем ваш файл конфигурации
# COPY .nginx/*.conf /etc/nginx/conf.d/

# # CMD ["npm", "run", "start"]
# CMD ["nginx", "-g", "daemon off;"]


FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]