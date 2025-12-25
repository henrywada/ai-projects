import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // ★静的サイトとしてビルド
  output: 'static',

  // ★これを復活させます（Layout.astroのエラー対策）
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },

  vite: {
    // ★ as any をつけて型チェックを回避します（Tailwindエラー対策）
    plugins: [tailwindcss() as any],
  },

  adapter: cloudflare(),
});