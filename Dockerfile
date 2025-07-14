FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY package.json pnpm-lock.yaml ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
