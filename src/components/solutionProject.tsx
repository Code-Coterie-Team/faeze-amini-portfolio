import Link from "next/link";
import React from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import SectionSeparator from "./sectionSeparator";

interface SolutionItems {
  text01: string;
  titleText: string;
  text02: string;
  href: string;
}

function SolutionProject({ text01, titleText, text02, href }: SolutionItems) {
  return (
    <div
      id="solution"
      className="solution md:px-14 px-2 py-6"
    >
      <SectionSeparator />
      <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
        Solution
      </h1>
      <p className="text-lg">{text01}</p>
      <div className="mt-5">
        <span className="lg:text-lg text-textActive">{titleText}</span>
        <span className="text-base pl-2">{text02}</span>
      </div>
      <div className="inline-block mt-8">
        <div className="bg-gray-50 text-gray-950 px-3 py-1 rounded-full hover:opacity-80 flex gap-2">
          <Link href={href}>Visit website</Link>
          <ArrowRightIcon
            width="24"
            height="24"
          />
        </div>
      </div>
    </div>
  );
}

export default SolutionProject;
