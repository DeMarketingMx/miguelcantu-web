import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content", "blog");
const BASE_URL = "https://www.miguelcantu.mba";

const today = new Date().toISOString().slice(0, 10);

// Static pages
const staticPages = [
  { url: "", priority: "1.0", changefreq: "weekly" },
  { url: "/blog", priority: "0.9", changefreq: "weekly" },
  { url: "/contacto", priority: "0.8", changefreq: "monthly" },
  { url: "/sobre-mi", priority: "0.7", changefreq: "monthly" },
  { url: "/consultoria/estrategia-digital", priority: "0.8", changefreq: "monthly" },
  { url: "/consultoria/marketing-digital", priority: "0.8", changefreq: "monthly" },
  { url: "/consultoria/transformacion-digital", priority: "0.8", changefreq: "monthly" },
  { url: "/consultoria/inteligencia-artificial", priority: "0.8", changefreq: "monthly" },
];

// Blog posts
const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx") || f.endsWith(".md"));
const blogPages = blogFiles.map(f => {
  const slug = f.replace(/\.mdx?$/, "");
  return { url: `/blog/${slug}`, priority: "0.7", changefreq: "monthly" };
});

const allPages = [...staticPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

fs.writeFileSync(path.join(ROOT, "public", "sitemap.xml"), xml);
console.log(`Sitemap generated with ${allPages.length} URLs`);
