import React from "react";
import RemoveIcon from "./icons/RemoveIcon";
import Link from "next/link";
import { addTabStore, useStore } from "@/store";

interface ItemTabs {
  tabTitle: string;
  href: string;
}

function AddNewTab({ tabTitle, href }: ItemTabs) {
  const {
    removeTab,
    activeTab,
    changeActiveTab,
    changeIsPublicSideBar,
    changeMyFolderSideBar,
    changeSrcFolderSideBar,
  } = addTabStore();
  const { changeActiveHash } = useStore();
  return (
    <Link
      href={href}
      className={`title flex items-center gap-2 border-r border-b border-r-borderDarck p-2 ${
        href === activeTab
          ? " text-textActive border-b-blue-900 border-b-2"
          : "border-b-borderDarck"
      }`}
      onClick={() => {
        changeActiveTab(href);

        if (href === "/") {
          changeIsPublicSideBar(true);
          changeActiveHash(`${href}#aboutme`);
        }
        if (href.includes("/apps/")) {
          changeMyFolderSideBar(true);
          changeSrcFolderSideBar(true);
          changeActiveHash(`${href}/#about`);
        }
      }}
    >
      <p className="text-base whitespace-nowrap">{tabTitle}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          removeTab(href);
        }}
        className="p-1 hover:bg-gray-500/30 rounded-md"
      >
        <RemoveIcon
          width="16"
          height="16"
        />
      </button>
    </Link>
  );
}

export default AddNewTab;
