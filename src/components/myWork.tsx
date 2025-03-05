"use client";
import React, { useState } from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import PackageBoxIcon from "./icons/PackageBoxIcon";
import Image from "next/image";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import Link from "next/link";
import SectionSeparator from "./sectionSeparator";
import MaximizeIcon from "./icons/MaximizeIcon";
import CodeIcon from "./icons/CodeIcon";
import { useStore, addTabStore } from "@/store";
import { motion } from "framer-motion";

const workProjects: workProject[] = [
  {
    name: "Admin Dashboard",
    description:
      "The management panel enables you to efficiently manage the products section with ease.",
    image: "/Image/react-admin-project01.png",
    linkGit: "https://github.com/Code-Coterie-Team/react-admin-project",
    linkDemo: "https://adminpanelprojectweb.netlify.app/",
    href: "/apps/adminDashboard",
  },
  {
    name: "Sneakers Company",
    description:
      "This platform is designed to make your shopping experience easier and more enjoyable.",
    image: "/Image/sneakers-company-project01.png",
    linkGit: "https://github.com/Code-Coterie-Team/sneakers-company",
    linkDemo: "https://pageproductsneakerweb.netlify.app/",
    href: "/apps/sneakersCompany",
  },
  {
    name: "Rock Paper Scissors Game",
    description: "",
    image: "/Image/challenges-rock-paper-scissors-game01.png",
    linkGit:
      "https://github.com/Code-Coterie-Team/challenges-rock-paper-scissors-game",
    linkDemo: "https://gamerockpaperscissors-js.netlify.app/",
    href: "/apps/rockPaperScissorsGame",
  },
  {
    name: "Drink Water",
    description: "",
    image: "/Image/Drink-Water02.png",
    linkGit: "https://github.com/Code-Coterie-Team/Drink-Water",
    linkDemo: "https://drinkwater-js.netlify.app/",
    href: "/apps/drinkWater",
  },
  {
    name: "Routing Navigation",
    description: "",
    image: "/Image/Routing-Navigation01.png",
    linkGit: "https://github.com/Code-Coterie-Team/Routing-Navigation",
    linkDemo: "https://routingnavigation.netlify.app/",
    href: "/apps/routingNavigation",
  },
  {
    name: "Form Input Wave",
    description: "",
    image: "/Image/Form-Input-Wave01.png",
    linkGit: "https://github.com/Code-Coterie-Team/Form-Input-Wave",
    linkDemo: "https://form-inputwave.netlify.app/?",
    href: "/apps/formInputWave",
  },
];

function MyWork() {
  const [isHoverShowProject, setIsHoverShowProject] = useState("");
  const { changeActiveHash } = useStore();
  const { changeActiveTab, addTab } = addTabStore();
  return (
    <motion.div
      id="myWork"
      className="myWork"
      onViewportEnter={() => changeActiveHash("/#myWork")}
    >
      <SectionSeparator />
      <div className="flex pt-12 items-center">
        <div className="text-gray-50">
          <PackageBoxIcon
            width="28"
            height="28"
          />
        </div>
        <motion.p
          className="text-gray-50 text-2xl pl-7"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Work
        </motion.p>
      </div>
      <motion.div
        className="max-w-3xl text-5xl pt-9 mb-24"
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -30, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-gray-50">Some of </span>
        <span className="text-textYelowLight">my work </span>
        <span className="text-gray-50">as a </span>
        <span className="text-textYelowLight"> Fron-tend </span>
        <span className="text-gray-50">developer</span>
      </motion.div>
      <div className="workChildren flex flex-col gap-6">
        {workProjects.map((project, index) => (
          <div
            key={index}
            className="item flex flex-col lg:flex-row items-center border border-tGrayAll/30 rounded-2xl shadow"
          >
            <div className="lg:w-1/2 p-12 pb-5 flex flex-col gap-10">
              <h3 className="font-semibold">
                <p className="text-4xl text-textYelowLight lg:whitespace-nowrap whitespace-normal">
                  {" "}
                  {project.name}
                </p>
                <p className="text-2xl text-gray-50">{project.description}</p>
              </h3>

              <Link
                href={project.href}
                className="flex items-center"
                onMouseEnter={() => setIsHoverShowProject(project.href)}
                onMouseLeave={() => setIsHoverShowProject("")}
                onClick={() => {
                  changeActiveTab(project.href);
                  addTab(project.name, project.href);
                }}
              >
                <span
                  className="text-2xl text-gray-50 font-semibold border-b-2 border-b-darckBg 
                  hover:border-b-2 hover:border-b-textYelowLight"
                >
                  Learn More
                </span>

                {isHoverShowProject === project.href ? (
                  <ArrowRightIcon
                    className="mt-2 text-gray-50 "
                    width="24"
                    height="24"
                  />
                ) : (
                  <DirectionRight01Icon
                    className="mt-2 text-gray-50 "
                    width="18"
                    height="18"
                  />
                )}
              </Link>
            </div>
            <div className="h-[300px] lg:w-1/2 flex lg:justify-end  flex-col rounded-2xl relative items-center">
              <div className="demoProject absolute flex gap-4 top-1/2">
                <Link
                  className="bg-gray-500/40 p-2 rounded-full text-gray-50 hover:scale-125"
                  href={project.linkDemo}
                  target="_blank"
                >
                  <MaximizeIcon
                    width="24"
                    height="24"
                  />
                </Link>
                <Link
                  className="bg-gray-500/40 p-2 rounded-full text-gray-50 hover:scale-125"
                  href={project.linkGit}
                  target="_blank"
                >
                  <CodeIcon
                    width="24"
                    height="24"
                  />
                </Link>
              </div>

              <Image
                className="h-[95%] w-full rounded-2xl shadow-styleShadowMyWorkBox"
                src={project.image}
                alt=""
                width={1228}
                height={1208}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default MyWork;
