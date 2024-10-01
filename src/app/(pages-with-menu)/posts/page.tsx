import Window from "@/components/Window";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function PostList() {
    const allPosts = getAllPosts();

    return (
        <Window title={"Posts List"}>
            <div className="min-w-full">
                <div className="flex items-center justify-between h-12 px-6 py-2 text-xl font-chicago border-b-4 border-b-black">
                    <span>{allPosts.count} items</span>
                    <span className="absolute left-1/2 -translate-x-1/2 max-lg:hidden">{allPosts.totalSize}K in folder</span>
                    <span><span className="lg:hidden">{allPosts.totalSize}K/</span>{1024 - allPosts.totalSize}K <span className="max-lg:hidden">available</span></span>
                </div>
                <table className="table-auto w-full">
                    <thead className="border-b-2 border-b-black">
                        <tr>
                            <th className="text-left px-2">Title</th>
                            <th></th>
                            <th className="text-center">Author</th>
                            <th className="text-left px-2">Published</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allPosts.data.map((n, i) => {
                        return (
                        <Link href={`/posts/${n.slug}`} key={i} legacyBehavior>
                        <tr key={i} className="h-12 hover:bg-black hover:text-white cursor-pointer">
                            <td className="px-2">{n.title}</td>
                            <td>{n.excerpt}</td>
                            <td className="text-center">{n.author.name}</td>
                            <td className="px-2">{(new Date(n.date * 1000)).toLocaleString()}</td>
                        </tr>
                        </Link>
                        )
                    })}                      
                    </tbody>
                    </table>        
            </div>
        </Window>
    )
}