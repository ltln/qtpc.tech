import { Post, postEmpty } from "./interfaces";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "resources", "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return postEmpty;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const fileSize = fs.statSync(fullPath).size / 1024;
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, size: fileSize, content } as Post;
}

export function getAllPosts(): { count: number, totalSize: number, data: Post[] } {
  const slugs = getPostSlugs().filter(item => item !== "about-me.md");
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  const totalSize = slugs.map((slug) => getPostBySlug(slug)).reduce((sum, post) => sum + post.size, 0)
  return {
    count: posts.length,
    totalSize: Math.floor(totalSize),
    data: posts
  };
}