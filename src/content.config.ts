import { defineCollection, z } from 'astro:content';
// 1. glob ローダーをインポート
import { glob } from 'astro/loaders';

const sections = defineCollection({
  // 2. type: 'content' を削除し、loader を設定
  // base: 読み込むフォルダのパス
  // pattern: 読み込むファイルの形式（例: 全てのマークダウン）
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    id: z.string().optional(),
    align: z.string().optional(),
  }),
});

export const collections = {
  'sections': sections,
};
