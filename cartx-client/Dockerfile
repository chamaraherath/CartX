FROM node:22-alpine AS builder

WORKDIR /app

RUN pwd

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]

# FROM nginx:alpine

# COPY --from=builder /app/dist/cart-xclient /usr/share/nginx/html

# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]