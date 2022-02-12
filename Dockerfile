# Install dependencies only when needed
FROM node:alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ARG CONTAINER_SERVER_PORT
ARG CONTAINER_HOST_PORT

# Set args as env variables so the custom server can use it
ENV SERVER_PORT $CONTAINER_SERVER_PORT
ENV HOST_PORT $CONTAINER_HOST_PORT

# Default container's NODE_ENV to production
ENV NODE_ENV production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src/server.js /app/*.pem ./

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
RUN chown -R nextjs:nodejs /app/*.pem && echo "SSL copied successfully." || echo "SSL not found."

USER nextjs

EXPOSE ${SERVER_PORT}

RUN npx next telemetry disable

CMD ["node", "server.js"]
