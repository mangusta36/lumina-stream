// src/lib/categories.ts

import { blogPosts, type BlogPost } from "./posts";

export interface CategoryInfo {
  slug: string;
  name: string;
  posts: BlogPost[];
}

export function getUniqueCategories(): string[] {
  const cats = new Set(blogPosts.map((p) => p.category));
  return Array.from(cats).sort();
}

export function slugifyCategory(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function categoryFromSlug(slug: string): string | null {
  const cat = getUniqueCategories().find((c) => slugifyCategory(c) === slug);
  return cat ?? null;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getCategoryDisplayInfo(slug: string): CategoryInfo | null {
  const name = categoryFromSlug(slug);
  if (!name) return null;
  return {
    slug,
    name,
    posts: getPostsByCategory(name),
  };
}
