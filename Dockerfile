# 1. Dépendances (npm install)
FROM node:22 AS deps
WORKDIR /app

COPY package*.json ./
RUN npm install

# 2. Dev container (utilisé par docker-compose)
FROM node:22
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
