"use client";
import Link from "next/link";
import React from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import SectionSeparator from "./sectionSeparator";
import { useStore } from "@/store";
import { motion } from "framer-motion";
import { ISolutionItems } from "@/types/types";

function SolutionProject({
  text01,
  text02,
  text03,
  text04,
  text05,
  text06,
  href,
  activeHashProject,
}: ISolutionItems) {
  const { changeActiveHash } = useStore();
  return (
    <motion.div
      id="solution"
      className="solution md:px-14 px-2 py-6"
      onViewportEnter={() =>
        changeActiveHash(`/apps/${activeHashProject}/#solution`)
      }
    >
      <SectionSeparator />
      <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
        Solution
      </h1>
      <p className="text-lg py-1"> {text01}</p>
      <p className="text-lg py-1"> {text02}</p>
      <p className="text-lg py-1"> {text03}</p>
      <p className="text-lg py-1"> {text04}</p>
      <p className="text-lg py-1"> {text05}</p>
      <p className="text-lg py-1"> {text06}</p>

      <div className="inline-block mt-8">
        <div className="bg-gray-50 text-gray-950 px-3 py-1 rounded-full hover:opacity-80 flex gap-2">
          <Link
            target="_blank"
            href={href}
          >
            Visit website
          </Link>
          <ArrowRightIcon
            width="24"
            height="24"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SolutionProject;
