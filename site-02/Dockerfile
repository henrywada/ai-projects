# site-02/Dockerfile (開発用)
FROM node:lts-slim

WORKDIR /app

# yarn.lock があるので yarn を使用
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Astroのデフォルトポート
EXPOSE 4321

# 開発サーバーをホストモードで起動
CMD ["yarn", "dev"]
