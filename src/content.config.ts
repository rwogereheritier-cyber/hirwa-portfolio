import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    scope: z.string(),
    year: z.string().optional(),
    status: z.string().optional(),
    url: z.string().url().optional(),
    cover: z.string().optional(), // e.g. "/images/work/koamol/cover.jpg"
    order: z.number(),
  }),
});

export const collections = { work };
