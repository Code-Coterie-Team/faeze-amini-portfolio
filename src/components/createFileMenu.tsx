import Link from "next/link";
import React, { ReactNode } from "react";
import { addTabStore } from "@/store";

interface CreateFileMenus {
  href: string;
  hrefPage: string;
  IconName: ReactNode;
  nameFile: string;
}
function CreateFileMenu(props: CreateFileMenus) {
  const { changeActiveTab } = addTabStore();
  return (
    <Link onClick={() => changeActiveTab(props.hrefPage)} href={props.href}>
      <div className="flex items-center gap-2 pl-14 py-[2px]">
        {props.IconName}
        <p className="text-base">{props.nameFile}</p>
      </div>
    </Link>
  );
}

export default CreateFileMenu;
