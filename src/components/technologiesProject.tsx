"use client";
import React from "react";
import SectionSeparator from "./sectionSeparator";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStore } from "@/store";
import { ITechnologiesItems } from "@/types/types";

function TechnologiesProject({
  listTechnologies,
  activeHashProject,
}: ITechnologiesItems) {
  const { changeActiveHash } = useStore();
  return (
    <motion.div
      id="technologies"
      className="technologies md:px-14 px-2 py-6 mb-48"
      onViewportEnter={() =>
        changeActiveHash(`/apps/${activeHashProject}/#technologies`)
      }
    >
      <div>
        <SectionSeparator />
        <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
          Technologies
        </h1>
      </div>
      <div className="flex gap-4 mt-6 flex-wrap">
        {listTechnologies.map((item, index) => (
          <motion.div
            key={index}
            className="h-[115px] flex flex-col items-center"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              className="w-[64px] h-[64px] "
              src={item.image}
              alt=""
              width={144}
              height={144}
            />
            <h4 className="mt-2 px-2 font-medium tracking-tight text-lg text-gray-50 ">
              {item.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TechnologiesProject;
