import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articulos sobre transformacion digital, marketing estrategico, analitica y tendencias de negocio.",
};

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[800px]">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
          Digital Insights
        </p>
        <h1 className="mb-4">Blog</h1>
        <p className="mb-12 max-w-lg text-lg text-text-muted">
          Ideas y reflexiones sobre transformacion digital, marketing y
          estrategia de datos.
        </p>

        {posts.length === 0 ? (
          <div className="rounded-[var(--radius-lg)] bg-surface p-12 text-center shadow-md">
            <p className="text-text-muted">
              Proximamente: articulos en proceso de migracion.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-[var(--radius-lg)] bg-surface p-6 no-underline shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <p className="mb-2 text-sm text-text-muted">
                  {post.date}
                  {post.readingTime && ` · ${post.readingTime}`}
                </p>
                <h2 className="mb-2 text-xl">{post.title}</h2>
                <p className="text-sm text-text-muted">{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
