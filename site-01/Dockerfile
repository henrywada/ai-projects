# site-01/Dockerfile (開発用)
FROM node:lts-slim

WORKDIR /app

# pnpm を有効化
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

# 依存関係のインストール
RUN pnpm install --frozen-lockfile

COPY . .

# Astroのデフォルトポート
EXPOSE 4321

# 開発サーバーをホストモードで起動
CMD ["pnpm", "run", "dev", "--", "--host"]
