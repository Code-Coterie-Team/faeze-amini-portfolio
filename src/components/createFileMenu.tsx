"use client";
import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { addTabStore, useStore } from "@/store";
import ArrowTopLeft from "./icons/ArrowTopLeft";
import ArrowTopRight from "./icons/ArrowTopRight";
import ArrowBottomLeft from "./icons/ArrowBottomLeft";
import ArrowBottomRight from "./icons/ArrowBottomRight";
import { motion } from "framer-motion";

interface CreateFileMenus {
  href: string;
  hrefPage: string;
  IconName: ReactNode;
  nameFile: string;
}
interface IChartFrameworksArray {
  listFileMenu: CreateFileMenus[];
}

function CreateFileMenu({ listFileMenu }: IChartFrameworksArray) {
  const { changeActiveTab } = addTabStore();
  const {
    activeHash,

    changeActiveHash,
  } = useStore();

  useEffect(() => {
    changeActiveHash(activeHash);
    console.log("active Hash Public : ", activeHash);
  }, [activeHash]);

  return (
    <>
      {listFileMenu.map((item, index) => (
        <div
          key={index}
          className="relative"
        >
          <Link
            onClick={() => {
              changeActiveTab(item.hrefPage);
              changeActiveHash(item.href);
              changeActiveHash(item.href);
            }}
            href={item.href}
          >
            <div className="flex items-center gap-2 pl-14 py-[2px]">
              {item.IconName}
              <p className="text-base">{item.nameFile}</p>
            </div>
          </Link>
          {activeHash === item.href && (
            <>
              <motion.span
                className="absolute top-0 left-12"
                initial={{ opacity: 0, x: -10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              >
                <ArrowTopLeft />
              </motion.span>
              <motion.span
                className="absolute top-0 right-16"
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              >
                <ArrowTopRight />
              </motion.span>
              <motion.span
                className="absolute top-5 left-12"
                initial={{ opacity: 0, x: -10, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              >
                <ArrowBottomLeft />
              </motion.span>
              <motion.span
                className="absolute top-5 right-16"
                initial={{ opacity: 0, x: 10, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
              >
                <ArrowBottomRight />
              </motion.span>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default CreateFileMenu;
