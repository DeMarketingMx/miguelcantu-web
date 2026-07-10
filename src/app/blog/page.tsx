import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre transformación digital, marketing estratégico, analítica y tendencias de negocio.",
};

export default function Blog() {
  const posts = getBlogPosts();

  const postsForGrid = posts.map(({ content, headings, ...rest }) => rest);

  return (
    <>
      <div className="page-header">
        <h1>Blog</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Blog</span>
        </p>
      </div>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14">
            <span className="section-badge">Insights</span>
            <h2>Artículos y Reflexiones</h2>
            <p className="mt-4 max-w-lg text-text-muted">
              Ideas sobre transformación digital, marketing y estrategia de
              datos para líderes de negocio.
            </p>
          </div>

          <BlogGrid posts={postsForGrid} />
        </div>
      </section>
    </>
  );
}
