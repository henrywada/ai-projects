import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // あなたのサイトURL（予定）
  site: 'https://site-02-lp.pages.dev',

  // 静的サイトとしてビルド
  output: 'static',

  vite: {
    // ★修正点：JavaScriptファイルなので "as any" は削除します
    plugins: [tailwindcss()],
  },

  // Cloudflareアダプターは不要なので削除済み
});