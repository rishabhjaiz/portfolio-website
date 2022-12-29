import React from "react";
import AnchorTag from "../AnchorTag";

function Footer() {
  return (
    <div className="flex flex-col px-8 justify-center mt-auto">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <AnchorTag href={"https://twitter.com/rishabhjaiz"} className="">
          Twitter
        </AnchorTag>
        <AnchorTag href={"https://www.linkedin.com/in/rishabh-jain-22aaa2113/"}>
          Linkedin
        </AnchorTag>
        <AnchorTag href={"https://www.instagram.com/tyson._.7/"}>
          Instagram
        </AnchorTag>
        <AnchorTag href={"https://github.com/rishabhjaiz"}>Github</AnchorTag>
      </nav>
    </div>
  );
}

export default Footer;
