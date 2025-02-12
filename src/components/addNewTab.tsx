import React, { ReactNode } from "react";
import StarIcon from "./icons/StarIcon";
import RemoveIcon from "./icons/RemoveIcon";
import Link from "next/link";

interface ItemTabs {
  id: string;
  tabTitle: string;
  iconTab: ReactNode;
  href: string;
}

function AddNewTab({ id, tabTitle, iconTab, href }: ItemTabs) {
  return (
    <Link
      href={href}
      className="title flex items-center gap-2 text-textActive border-r-borderDarck border-b-blue-600 border-r-2 border-b-2 p-2"
    >
      {iconTab}

      <p className="text-base">{tabTitle}</p>
      <button className="p-1 hover:bg-gray-500/30 rounded-md">
        <RemoveIcon
          width="16"
          height="16"
        />
      </button>
    </Link>
  );
}

export default AddNewTab;
