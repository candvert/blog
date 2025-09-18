import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { read } from "to-vfile";
import { unified } from "unified";
import rehypeAddH2Class from "@/utils/md-styles";

const prettyCodeOptions: Options = {
  theme: 'github-dark',
};

async function ok(filename: string) {
  const filecontent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeAddH2Class)
    .use(rehypePrettyCode, prettyCodeOptions)
    .use(rehypeStringify)
    .process(await read(filename));

    return String(filecontent);
}

export function MainArea() {
  return (
    <div className="overflow-x-hidden">
      <div className="">点击左侧文件开始阅读</div>
    </div>
  );
}
