import fs from "fs";
import path from "path";

export function filesName() {
  const baseDir = path.join(process.cwd(), "src", "mdx");
  const dirs = fs.readdirSync(baseDir);

  const result: string[][] = [[]];
  dirs.map((dir) => {
    if (dir != "images") {
      const files = fs.readdirSync(path.join(baseDir, dir));
      result.push([dir, ...files.map((f) => `${dir}/${f}`)]);
    }
  });

  return result;
}
