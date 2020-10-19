FROM node:12.0-alpine AS builder
COPY . ./tour_of_heroes
WORKDIR /tour_of_heroes
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /tour_of_heroes/dist/angular-tour-of-heroes/ /usr/share/nginx/html