"use client";
import React, { useState } from "react";
import VsCodeIcon from "./icons/VsCodeIcon";
import RemoveIcon from "./icons/RemoveIcon";
import CopyIcon from "./icons/CopyIcon";
import MinusIcon from "./icons/MinusIcon";
import Layout9Icon from "./icons/Layout9Icon";
import Layout10Icon from "./icons/Layout10Icon";
import Layout11Icon from "./icons/Layout11Icon";
import MenuLineHorizontalIcon from "./icons/MenuLineHorizontalIcon";
import { useStore } from "@/store";

function Header() {
  const { toggleSideBarShow, sideBarShow } = useStore();
  const listMenu = [
    "File",
    "Edit",
    "Selection",
    "View",
    "Go",
    "Run",
    "Terminal",
    "Help",
  ];

  return (
    <div className="header flex flex-row justify-between items-center border-b-borderDarck border-b-2">
      <div className="menuBar flex flex-row gap-1 p-1 items-center">
        <div className="flex gap-4">
          <div>
            <VsCodeIcon
              width="30"
              height="30"
            />
          </div>

          <div className="block md:hidden">
            <MenuLineHorizontalIcon />
          </div>
        </div>

        <div className="md:block hidden pl-2 p-1">
          {listMenu.map((item, index) => (
            <button
              key={index}
              className="hover:bg-gray-500 px-2 py-1 rounded-lg cursor-default hover:bg-opacity-30 text-base"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <h1 className="pt-3 pb-3">Faeze Amini - Portfolio</h1>

      <div className="flex flex-row">
        <div className="flex py-2">
          <button
            onClick={() => {
              toggleSideBarShow();
            }}
            className="hover:bg-gray-500 hover:bg-opacity-30 p-1 rounded-md"
          >
            <Layout11Icon
              width="20"
              height="20"
            />
          </button>
          <button className="hover:bg-gray-500 hover:bg-opacity-30 p-1 rounded-md">
            <Layout9Icon
              width="20"
              height="20"
            />
          </button>
          <button className="hover:bg-gray-500 hover:bg-opacity-30 p-1 rounded-md">
            <Layout10Icon
              width="20"
              height="20"
            />
          </button>
        </div>
        <div className="flex flex-row">
          <div className="hover:bg-gray-500 hover:text-gray-50 p-3 hover:bg-opacity-30">
            <MinusIcon
              width="16"
              height="16"
            />
          </div>

          <div className="hover:bg-gray-500 hover:text-gray-50 p-3 hover:bg-opacity-30">
            <CopyIcon
              width="16"
              height="16"
            />
          </div>
          <div className="hover:bg-red-700 hover:text-gray-50 p-3 ">
            <RemoveIcon
              width="16"
              height="16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
