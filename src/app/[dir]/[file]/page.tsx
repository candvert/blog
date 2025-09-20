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
import { filesName } from "@/utils/get-mdx-filenames";

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

export async function generateStaticParams() {
  const allDirsAndFiles = filesName();
  
  // 生成所有参数组合
  const params = allDirsAndFiles.flatMap((dirArray) => {
    const dirName = dirArray[0]; // 第一个元素是目录名
    const fileNames = dirArray.slice(1); // 剩余元素是文件名
    
    return fileNames.map((fileName) => ({
      dir: dirName,    // 匹配 [dir] 段
      file: path.basename(fileName)   // 匹配 [file] 段
    }));
  });

  return params;
}

export default async function Home({
  params,
}: {
  params: { dir: string; file: string };
}) {
  const { dir, file } = params;
  const decodedDir = decodeURIComponent(dir);
  const decodedFile = decodeURIComponent(file);

  const c = await ok(
    path.join(process.cwd(), "src", "mdx", decodedDir, decodedFile)
  );
  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: c }} />
    </div>
  );
}
