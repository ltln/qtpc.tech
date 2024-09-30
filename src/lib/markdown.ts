import { remark } from "remark";
import html from "remark-html";
import remarkBreak from "remark-breaks";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).use(remarkBreak).process(markdown);
  return result.toString();
}