import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { read } from "to-vfile";
import { unified } from "unified";
import rehypeAddH2Class from "@/utils/md-styles";
import path from "path";

const prettyCodeOptions: Options = {
  theme: "github-dark",
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

export default async function Home({
  params,
}: {
  params: Promise<{ dir: string; file: string }>;
}) {
  const { dir, file } = await params;
  const decodedDir = decodeURIComponent(dir);
  const decodedFile = decodeURIComponent(file);

  const c = await ok(
    path.join(process.cwd(), "src", "mdx", decodedDir, decodedFile)
  );
  return <div dangerouslySetInnerHTML={{ __html: c }} />;
}
