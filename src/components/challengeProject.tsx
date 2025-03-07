"use client";
import React from "react";
import SectionSeparator from "./sectionSeparator";
import { motion } from "framer-motion";
import { useStore } from "@/store";

function ChallengeProject({
  descrption,
  item01,
  item02,
  item03,
  item04,
  item05,
  item06,
  activeHashProject,
}: IChallengeItems) {
  const { changeActiveHash } = useStore();
  return (
    <motion.div
      id="challenge"
      className="challenge md:px-14 px-2 py-6"
      onViewportEnter={() =>
        changeActiveHash(`/apps/${activeHashProject}/#challenge`)
      }
    >
      <SectionSeparator />
      <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
        Challenge
      </h1>
      <p className=" text-lg">{descrption}</p>

      <ul className="pl-10 list-disc text-lg">
        <li
          className={`mt-5 ${
            item01 === "" || item01 === " " || item01 === undefined
              ? "hidden"
              : ""
          }`}
        >
          {item01}
        </li>
        <li
          className={`mt-5 ${
            item02 === "" || item02 === " " || item02 === undefined
              ? "hidden"
              : ""
          }`}
        >
          {item02}
        </li>

        <li
          className={`mt-5 ${
            item03 === "" || item03 === " " || item03 === undefined
              ? "hidden"
              : ""
          }`}
        >
          {item03}
        </li>
        <li
          className={`mt-5 ${
            item04 === "" || item04 === " " || item04 === undefined
              ? "hidden"
              : ""
          }`}
        >
          {item04}
        </li>
        <li
          className={`mt-5 ${
            item05 === "" || item05 === " " || item05 === undefined
              ? "hidden"
              : ""
          }`}
        >
          {item05}
        </li>
        <li
          className={`mt-5 ${
            item06 === "" || item06 === " " || item06 === undefined
              ? "hidden"
              : ""
          }`}
        >
          {item06}
        </li>
      </ul>
    </motion.div>
  );
}

export default ChallengeProject;
