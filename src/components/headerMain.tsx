"use client";
import React, { useEffect } from "react";
import Layout10Icon from "./icons/Layout10Icon";
import MenuCircleVerticalIcon from "./icons/MenuCircleVerticalIcon";
import OpenChangeIcon from "./icons/OpenChangeIcon";
import AddNewTab from "./addNewTab";
import StarIcon from "./icons/StarIcon";
import { addTabStore } from "@/store";

function HeaderMain() {
  const { tab, addTab } = addTabStore();

  useEffect(() => {
    addTab(
      "About Me",
      <StarIcon
        width="18"
        height="18"
      />,"/"
    );
  }, []);
  return (
    <div className="headerMain flex items-center justify-between w-full border-borderDarck border-b-2 bg-darckBg">
      <div className="flex overflow-hidden ">
        {tab.map((itemTab, index) => (
          <AddNewTab key={index}
            tabTitle={itemTab.tabTitle}
            iconTab={itemTab.iconTab}
            id={itemTab.id}
            href={itemTab.href}
          />
        ))}

        {/* <div className="title flex items-center gap-2 text-textActive border-r-borderDarck border-b-blue-600 border-r-2 border-b-2 p-2">
          <StarIcon
            width="18"
            height="18"
          />

          <p className="text-base">About Me</p>
          <button className="p-1 hover:bg-gray-500/30 rounded-md">
            <RemoveIcon
              width="16"
              height="16"
            />
          </button>
        </div> */}
        {/* <div className="title flex items-center gap-2 border-r-borderDarck border-b-blue-600 border-r-2 p-2">
          <StarIcon
            width="18"
            height="18"
          />

          <p className="text-base">Work</p>
          <button className="p-1 hover:bg-gray-500/30 rounded-md">
            <RemoveIcon
              width="16"
              height="16"
            />
          </button>
        </div> */}
      </div>

      <div className="flex px-4">
        <button className="p-1 hover:bg-gray-500/30 rounded-md">
          <OpenChangeIcon
            className=""
            width="18"
            height="18"
          />
        </button>
        <button className="p-1 hover:bg-gray-500/30 rounded-md">
          <Layout10Icon
            width="18"
            height="18"
          />
        </button>
        <button className="p-1 hover:bg-gray-500/30 rounded-md">
          <MenuCircleVerticalIcon
            width="18"
            height="18"
          />
        </button>
      </div>
    </div>
  );
}

export default HeaderMain;
