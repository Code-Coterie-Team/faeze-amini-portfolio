"use client";
import React from "react";
import SectionSeparator from "./sectionSeparator";
import { motion } from "framer-motion";
import { useStore } from "@/store";

interface ChallengeItems {
  descrption: string;
  item01?: string;
  item02?: string;
  item03?: string;
  activeHashProject: string;
}

function ChallengeProject({
  descrption,
  item01,
  item02,
  item03,
  activeHashProject,
}: ChallengeItems) {
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
            item01 === "" ||  item01 === " " ? "hidden" : ""
          }`}
        >
          {item01}
        </li>
        <li
          className={`mt-5 ${
            item02 === "" ||  item02 === " " ? "hidden" : ""
          }`}
        >
          {item02}
        </li>

        <li
          className={`mt-5 ${
            item03 === "" || item03 === " " ? "hidden" : ""
          }`}
        >
          {item03}
        </li>
      </ul>
    </motion.div>
  );
}

export default ChallengeProject;
