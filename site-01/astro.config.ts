import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // ★静的サイト設定（これはそのまま維持）
  output: 'static',

  vite: {
    // Tailwindの設定
    plugins: [tailwindcss() as any],
    
    // ★ここを復活：このライブラリをバンドル対象から外します
    ssr: {
      external: ["@resvg/resvg-js"],
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  adapter: cloudflare(),
});