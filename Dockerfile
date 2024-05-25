FROM node:16.17.0-alpine as builder
WORKDIR /app
COPY package.json package-lock.json* ./
#COPY ./yarn.lock .
RUN npm install
COPY . .
#ARG TMDB_V3_API_KEY
#ENV VITE_APP_TMDB_V3_API_KEY=${TMDB_V3_API_KEY}
#ENV VITE_APP_API_ENDPOINT_URL="https://api.themoviedb.org/3"
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# Copy the built React app to Nginx's web server directory
COPY --from=builder /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
