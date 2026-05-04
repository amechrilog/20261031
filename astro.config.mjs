// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
  // あなたのGitHubのURLを記入（例: https://username.github.io）
  site: "https://amechrilog.github.io",
  // リポジトリ名を記入（例: /my-portfolio）。先頭のスラッシュを忘れずに！
  base: "/20261031",
});
