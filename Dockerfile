FROM node:lts-alpine AS base

COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN npm install --only=prod --ignore-scripts

FROM base AS build
RUN npm install --only=dev --ignore-scripts
RUN npm run build 

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.output /app/.output

CMD ["node", "./.output/server/index.mjs"]