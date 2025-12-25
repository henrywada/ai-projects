import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // これから作るサイトのURL（予定）
  site: 'https://site-02-lp.pages.dev',

  // ★重要：静的サイトとしてビルド
  output: 'static',

  vite: {
    plugins: [tailwindcss() as any],
  },

  // Cloudflareアダプターは削除して、純粋な静的HTMLとして出力します
});