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
    <>
      {/* Page Header */}
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
            <h2>Articulos y Reflexiones</h2>
            <p className="mt-4 max-w-lg text-text-muted">
              Ideas sobre transformacion digital, marketing y estrategia de
              datos para lideres de negocio.
            </p>
          </div>

          {posts.length === 0 ? (
            /* Empty state - placeholder posts */
            <div className="grid gap-8 md:grid-cols-12">
              {/* Featured post placeholder */}
              <div className="md:col-span-7">
                <div className="group">
                  <div className="aspect-[16/10] bg-navy/90 mb-6 flex items-center justify-center">
                    <div className="text-center text-white/40 px-8">
                      <p className="text-sm uppercase tracking-wider mb-2">
                        Post Destacado
                      </p>
                      <p className="text-xs">Imagen del articulo</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Transformacion Digital
                  </span>
                  <h3 className="mt-2 text-2xl leading-tight">
                    Proximamente: Articulos en Proceso de Migracion
                  </h3>
                  <p className="mt-3 text-sm text-text-muted">
                    Estamos migrando 49 articulos del blog anterior. Pronto
                    estaran disponibles aqui con un nuevo formato.
                  </p>
                </div>
              </div>

              {/* Side posts placeholder */}
              <div className="space-y-6 md:col-span-5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="aspect-square w-28 shrink-0 bg-navy/10" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Categoria
                      </span>
                      <h3 className="mt-1 text-base leading-snug">
                        Titulo del articulo #{i}
                      </h3>
                      <p className="mt-1 text-xs text-text-muted">
                        Proximamente
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Real posts */
            <div className="grid gap-8 md:grid-cols-12">
              {/* Featured - first post */}
              {posts[0] && (
                <div className="md:col-span-7">
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="group block no-underline"
                  >
                    <div className="aspect-[16/10] bg-navy/90 mb-6 flex items-center justify-center">
                      <div className="text-center text-white/40 px-8">
                        <p className="text-sm uppercase tracking-wider">
                          Imagen del articulo
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Transformacion Digital
                    </span>
                    <h3 className="mt-2 text-2xl leading-tight group-hover:text-accent transition-colors">
                      {posts[0].title}
                    </h3>
                    <p className="mt-2 text-xs text-text-muted">
                      {posts[0].date}
                      {posts[0].readingTime && ` · ${posts[0].readingTime}`}
                    </p>
                    <p className="mt-3 text-sm text-text-muted">
                      {posts[0].description}
                    </p>
                  </Link>
                </div>
              )}

              {/* Side - remaining posts */}
              <div className="space-y-6 md:col-span-5">
                {posts.slice(1).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex gap-4 no-underline group"
                  >
                    <div className="aspect-square w-28 shrink-0 bg-navy/10" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Blog
                      </span>
                      <h3 className="mt-1 text-base leading-snug group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-xs text-text-muted">
                        {post.date}
                        {post.readingTime && ` · ${post.readingTime}`}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
