import React from "react";
import DarkModeSVG from "../../assets/DarkModeSVG";
import AnchorTag from "../AnchorTag"; /** Imoort check what he is using could be better */
import { useTheme } from "next-themes";
import LightModeSVG from "../../assets/LightModeSVG";

const HEADER_LABELS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col justify-center px-8">
      {/** Understand position relative better. */}
      {/** Max width is you can be anything at all below the max width. */}
      {/** margin auto, nav is block level element which take up 100% if they have flex they shrink to content siez, taking the available space and evenly distbuting it margin auto */}
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <div className="ml-[-0.60rem]">
          {HEADER_LABELS.map((h) => (
            <AnchorTag href={h.href} openNewTab={false}>
              {h.label}
            </AnchorTag>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
        >
          {mounted && resolvedTheme === "dark" ? (
            <DarkModeSVG />
          ) : (
            <LightModeSVG />
          )}
        </button>
      </nav>
    </div>
  );
}

export default Header;
