import React, { ReactElement, ReactNode } from "react";
import RemoveIcon from "./icons/RemoveIcon";
import Link from "next/link";
import { addTabStore } from "@/store";
import StarIcon from "./icons/StarIcon";
import { usePathname } from "next/navigation";

interface ItemTabs {
  tabTitle: string;
  href: string;
  iconTab:ReactElement;
}

function AddNewTab({ tabTitle, href,iconTab }: ItemTabs) {
  // const path = usePathname();
  const {
    removeTab,
    activeTab,
    changeActiveTab,
    changeIsPublicSideBar,
    changeMyFolderSideBar,
    changeSrcFolderSideBar,
  } = addTabStore();
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
        href === "/" ? changeIsPublicSideBar(true) : undefined
        if (href.includes("/apps/")) {
          changeMyFolderSideBar(true);
          changeSrcFolderSideBar(true);
        }
      }}
    >
     {iconTab}
      <p className="text-base">{tabTitle}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
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
