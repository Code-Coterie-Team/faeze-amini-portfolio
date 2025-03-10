"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStore } from "@/store";

function AboutProject({
  title,
  description,
  industry,
  year,
  service,
  imageSrc,
  imageAlt,
  activeHashProject,
}: IItemAboutPaje) {
  const { changeActiveHash } = useStore();
  return (
    <motion.div
      id="about"
      className="about"
      onViewportEnter={() =>
        changeActiveHash(`/apps/${activeHashProject}/#about`)
      }
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div className=" px-4 py-6">
        <div className="flex flex-col justify-center items-center mt-24 gap-4">
          <p className=" text-base font-semibold text-textActive">Case Study</p>
          <h1 className="text-6xl text-gray-50 font-semibold pt-3 tracking-tight text-center">
            {title}
          </h1>
          <p className="text-xl max-w-3xl text-center pt-2">{description}</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 grid-cols-1 border border-tGrayAll/30 ">
        <div className="flex flex-col  px-6 py-4 border-r border-r-tGrayAll/30">
          <span className="text-textActive font-semibold">Industry</span>
          <span>{industry} </span>
        </div>
        <div className="flex flex-col px-6 py-4 border-r border-r-tGrayAll/30">
          <span className="text-textActive font-semibold">Year</span>
          <span>{year}</span>
        </div>
        <div className="flex flex-col px-6 py-4">
          <span className="text-textActive font-semibold">Service</span>
          <span>{service}</span>
        </div>
      </div>
      <div className="md:p-24 p-4 w-full h-full flex justify-center items-center bg-colotBgProject bg-backgroundImgProject">
        <Image
          className="w-full h-full"
          src={imageSrc}
          alt={imageAlt}
          width={144}
          height={955}
        ></Image>
      </div>
    </motion.div>
  );
}

export default AboutProject;
