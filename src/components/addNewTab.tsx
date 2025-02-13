import React, { ReactNode } from "react";
import StarIcon from "./icons/StarIcon";
import RemoveIcon from "./icons/RemoveIcon";
import Link from "next/link";
import { addTabStore } from "@/store";

interface ItemTabs {
  id: string;
  tabTitle: string;
  iconTab: ReactNode;
  href: string;
}

function AddNewTab({ id, tabTitle, iconTab, href }: ItemTabs) {
  const { removeTab, activeTab } = addTabStore();
  return (
    <Link
      id={id}
      href={href}
      className={`title flex items-center gap-2 border-r border-b border-r-borderDarck p-2 ${
        activeTab === href ? " text-textActive border-b-blue-900 border-b-2" : "border-b-borderDarck"
      }`}
    >
      {iconTab}

      <p className="text-base">{tabTitle}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          removeTab(id);
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
