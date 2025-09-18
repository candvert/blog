import { filesName } from "../utils/get-mdx-filenames";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Link from "next/link";
import path from "path";

export default function LeftSidebar() {
  return (
    <div className="w-80 overflow-auto scroll-smooth scrollbar-hide h-svh pl-8 pt-4 flex-none">
      {filesName().map((files) => (
        <Collapsible defaultOpen={false} key={`a${files[0]}`} className="my-2">
          {files.map((file) =>
            !file.endsWith(".md") ? (
              <CollapsibleTrigger
                key={file}
                className="bg-gray-100 w-48 text-start my-4 rounded-4xl indent-2.5 p-0.5"
              >
                {file}
              </CollapsibleTrigger>
            ) : (
              <CollapsibleContent
                key={file}
                className="pl-8 py-0.5 border-l border-gray-300"
              >
                <Link href={`/${file}`}>{path.basename(file, ".md")}</Link>
              </CollapsibleContent>
            )
          )}
        </Collapsible>
      ))}
    </div>
  );
}
