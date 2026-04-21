FROM node:20.11-alpine AS base
WORKDIR /backend-app
COPY package.json ./

FROM node:20.11-alpine AS runner
WORKDIR /backend-app

USER node

COPY --from=base --chown=node:node /backend-app/package.json ./
COPY --chown=node:node app.js ./

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "http.get('http://localhost:8080', (res) => res.statusCode === 200 ? process.exit(0) : process.exit(1))"

CMD ["node", "app.js"]