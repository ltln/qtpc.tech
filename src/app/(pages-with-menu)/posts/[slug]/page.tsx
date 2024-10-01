import Window from "@/components/Window";
import markdownToHtml from "@/lib/markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug);

    if (post.content == "") {
        return "";
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <Window title={"Post Details"}>
            <div
              className="px-6 py-4 min-w-full prose"
            >
              <div className="h-48" style={{ background: `url(${post.coverImage}) no-repeat center center`}} />
              <div>
                <span>{(new Date(post.date * 1000)).toLocaleString()}</span>
                <h1 className="mb-0">{post.title}</h1>
                <Link href={post.author.url} target="_blank">{post.author.name}</Link>
              </div>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </Window>
    )
}

type Params = {
    params: {
      slug: string;
    };
};
  
export function generateMetadata({ params }: Params): Metadata {
    const post = getPostBySlug(params.slug);
  
    if (post.content == "") {
      return notFound();
    }
  
    const title = `${post.title}`;
  
    return {
      title,
    };
}
  
export async function generateStaticParams() {
    const posts = getAllPosts();
  
    return posts.data.map((post) => ({
      slug: post.slug,
    }));
}