import { IoLogoGithub } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";

export function MainNav() {
  return (
    <div className="sticky top-0 flex justify-between items-center py-4 px-4 z-50 h-16 border-b bg-background">
      <Link href="/" className="text-2xl">
        Candvert&apos;s blog
      </Link>
      <div className="flex flex-row items-center justify-center">
        <div className="">
          <button className="p-1.5 rounded-xl hover:bg-gray-200 transition duration-300">
            <Link href={""}>
              <MdOutlineLightMode className="w-8 h-8" />
            </Link>
          </button>
        </div>
        <div>
          <button className="p-1.5 rounded-xl hover:bg-gray-200 transition duration-300">
            <Link href={"https://github.com/candvert/blog"} target="_blank">
              <IoLogoGithub className="w-8 h-8" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
