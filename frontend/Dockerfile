############
# BUILDER #
############

FROM node:latest as builder

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build


############
# FINAL #
############

FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
