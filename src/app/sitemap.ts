import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const pages = ["", "/shop", "/custom-bouquet", "/bulk-orders", "/about", "/reviews", "/faq", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 })),
    ...categories.map((c) => ({ url: `${base}/collections/${c.slug}`, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...products.map((p) => ({ url: `${base}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.6, images: p.images.map((i) => `${base}${i.src}`) })),
  ];
}
