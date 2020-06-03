FROM nginx:1.15

COPY dist/afstuderen-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf