"use client";
import React, { useEffect } from "react";
import Layout10Icon from "./icons/Layout10Icon";
import MenuCircleVerticalIcon from "./icons/MenuCircleVerticalIcon";
import OpenChangeIcon from "./icons/OpenChangeIcon";
import AddNewTab from "./addNewTab";
import { addTabStore } from "@/store";
import { usePathname } from "next/navigation";

function HeaderMain() {
  // const router = useRouter();
  const { tab, changeActiveTab, activeTab, addTab } = addTabStore();
  const path = usePathname();

  useEffect(() => {
    if (tab.length === 0 && path === "/") {
      changeActiveTab(path);
      addTab("About Me", path,<StarIcon width="18"  height="18"/>);
    }

    activeTab === path ? "" : changeActiveTab(path);
  }, [path, activeTab, tab]);

  return (
    <div className="headerMain flex items-center justify-between w-full border-borderDarck border-b-2 bg-darckBg">
      <div className="flex overflow-hidden ">
        {tab.map((itemTab, index) => (
          <AddNewTab
            key={index}
            tabTitle={itemTab.tabTitle}
            href={itemTab.href}
            iconTab={itemTab.iconTab}
          />
        ))}
      </div>

      <div className="flex px-4">
        <button className="p-1 hover:bg-gray-500/30 rounded-md">
          <OpenChangeIcon
        
            width="18"
            height="18"
          />
        </button>
        <button className="p-1 hover:bg-gray-500/30 rounded-md">
          <Layout10Icon width="18" height="18" />
        </button>
        <button className="p-1 hover:bg-gray-500/30 rounded-md">
          <MenuCircleVerticalIcon width="18" height="18" />
        </button>
      </div>
    </div>
  );
}

export default HeaderMain;
