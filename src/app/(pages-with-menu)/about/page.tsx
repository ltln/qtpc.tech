import Window from "@/components/Window";
import markdownToHtml from "@/lib/markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export default async function About() {
    const about_me = getPostBySlug("about-me");
    if (!about_me) {
        return "";
    }

    const content = await markdownToHtml(about_me.content || "");

    return (
        <Window title={"cutiepc"} size={{ height: 700, width: 1200 }}>
            <div 
                className="px-6 py-4 min-w-full prose"
                dangerouslySetInnerHTML={{ __html: content }} 
            />
        </Window>
    )
}

export async function generateStaticParams() {
    const posts = getAllPosts();
  
    return posts.data.map((post) => ({
      slug: post.slug,
    }));
}