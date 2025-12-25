import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ★重要：Cloudflareのアダプター(import cloudflare ...)は削除します
// 静的サイトなら、アダプターなしでもCloudflare Pagesは表示できます。

// https://astro.build/config
export default defineConfig({
  // あなたのCloudflare URL
  site: 'https://site-01-blog.pages.dev',

  // 静的サイトとしてビルド
  output: 'static',

  vite: {
    // Tailwindの設定だけ残します
    plugins: [tailwindcss() as any],
    // ★以前書いた ssr: { ... } や optimizeDeps は全て削除してスッキリさせます
  },

  // adapter: ... ← これも削除します
});