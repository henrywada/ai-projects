import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // ★ここが最重要：静的サイトとしてビルドする設定を追加
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
    // 以前書いた ssr: { external: ... } などはもう不要なので削除しました
  },

  // アダプター設定もシンプルに戻します
  adapter: cloudflare(),
});