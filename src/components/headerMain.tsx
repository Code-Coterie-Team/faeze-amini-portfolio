"use client";
import React, { useEffect } from "react";
import Layout10Icon from "./icons/Layout10Icon";
import MenuCircleVerticalIcon from "./icons/MenuCircleVerticalIcon";
import OpenChangeIcon from "./icons/OpenChangeIcon";
import AddNewTab from "./addNewTab";
import StarIcon from "./icons/StarIcon";
import { addTabStore } from "@/store";
import { useRouter } from "next/navigation";

function HeaderMain() {
  const router = useRouter();
  const { tab, activeTab,changeActiveTab } = addTabStore();
const path = window.location.pathname;
  // console.log(activeTab, "activeTab");

  //  console.log(tab, "array tab");

  useEffect(() => {
    console.log("mount header main");
    // console.log(router, "router");
    console.log(activeTab, "activeTab");
    console.log(window.location.pathname, "get url ");
    // localStorage.clear();
    router.push(path);
    changeActiveTab(path)
  }, [path]);

  return (
    <div className="headerMain flex items-center justify-between w-full border-borderDarck border-b-2 bg-darckBg">
      <div className="flex overflow-hidden ">
        {tab.map((itemTab, index) => (
          <AddNewTab
            key={index}
            tabTitle={itemTab.tabTitle}
            id={itemTab.id}
            href={itemTab.href}
          />
        ))}
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
