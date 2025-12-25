import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // ★ここを追加！ (あなたのCloudflareのプロジェクト名に合わせています)
  site: 'https://site-01-blog.pages.dev',

  // 静的サイト設定
  output: 'static',

  vite: {
    plugins: [tailwindcss() as any],
    ssr: {
      external: ["@resvg/resvg-js", "sharp"],
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  adapter: cloudflare(),
});