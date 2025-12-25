import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // 静的サイトとしてビルド（これが最重要）
  output: 'static',

  vite: {
    // 型エラー防止のため as any をつけます
    plugins: [tailwindcss() as any],
  },

  adapter: cloudflare(),
});