"use client";
import Link from "next/link";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ToggleMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="">
      {theme === 'dark' ? (
        <button
          className="p-1.5 rounded-xl hover:bg-gray-200 transition duration-300"
          onClick={() => setTheme("light")}
        >
          <Link href={""}>
            <MdOutlineDarkMode className="w-8 h-8" />
          </Link>
        </button>
      ) : (
        <button
          className="p-1.5 rounded-xl hover:bg-gray-200 transition duration-300"
          onClick={() => setTheme("dark")}
        >
          <Link href={""}>
            <MdOutlineLightMode className="w-8 h-8" />
          </Link>
        </button>
      )}
    </div>
  );
}
