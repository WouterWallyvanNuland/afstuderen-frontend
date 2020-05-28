FROM node:14.3.0 as node
WORKDIR /app
COPY . .
RUN npm i yarn
RUN yarn global add @angular/cli@latest
RUN yarn install
RUN ng build --prod

# STAGE 2
FROM nginx:alpine

COPY --from=node /app/dist/afstuderen-frontend /usr/share/nginx/html
COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80