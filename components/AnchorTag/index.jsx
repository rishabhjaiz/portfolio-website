import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

/** Study this html elemnt once what is href in anchor tage */
function index({ href, children, openNewTab = true }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        // Learn about css transition alll property and display hidden none
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      )}
      href={href}
      key={href}
      target={openNewTab ? "_blank" : undefined}
      rel={openNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

export default index;
