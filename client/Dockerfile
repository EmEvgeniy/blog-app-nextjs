FROM node:18 AS build

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build
# CMD ["npm", "run", "build"]
# Этап 2: развертывание с использованием Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
# Копируем статические файлы из этапа сборки
COPY --from=build /app/.next /usr/share/nginx/html
# Копируем ваш файл конфигурации
COPY .nginx/*.conf /etc/nginx/conf.d/

# CMD ["npm", "run", "start"]
CMD ["nginx", "-g", "daemon off;"]
