import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getBlogPosts();
  if (posts.length === 0) return [{ slug: "_placeholder" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.thumbnail }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <article className="px-6 py-20">
      <div className="mx-auto max-w-[700px]">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted no-underline transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <p className="mb-4 text-sm text-text-muted">
          {post.date}
          {post.readingTime && ` · ${post.readingTime}`}
        </p>
        <h1 className="mb-8">{post.title}</h1>

        <div className="mb-12 aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-text [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline [&_h2]:font-heading [&_h2]:text-primary [&_h3]:font-heading [&_h3]:text-primary">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  );
}
