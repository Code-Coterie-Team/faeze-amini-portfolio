"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { addTabStore, useStore } from "@/store";
import ArrowTopLeft from "./icons/ArrowTopLeftIcon";
import ArrowTopRight from "./icons/ArrowTopRightIcon";
import ArrowBottomLeft from "./icons/ArrowBottomLeftIcon";
import ArrowBottomRight from "./icons/ArrowBottomRightIcon";
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
            }}
            href={item.href}
          >
            <div className={`flex items-center gap-2  py-[2px] ${item.href.includes("/apps/") ? "pl-[4.75rem]" : "pl-14"}`}>
              {item.IconName}
              <p className="text-base">{item.nameFile}</p>
            </div>
          </Link>
          {activeHash === item.href && (
            <>
              <motion.span
                className={`absolute top-0  ${item.href.includes("/apps/") ? "left-[4.25rem]" : "left-12"}`}
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
                className={`absolute top-5 ${item.href.includes("/apps/") ? "left-[4.25rem]" : "left-12"}`}
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
