import Link from "next/link";
import React, { ReactNode } from "react";
import AboutIcon from "./icons/AboutIcon";

interface CreateFileMenus {
  href: string;
  IconName: ReactNode;
  nameFile: string;
}
function CreateFileMenu(props: CreateFileMenus) {
  return (
    <Link href={props.href}>
      <div className="flex items-center gap-2 pl-14 py-[2px]">
        {props.IconName}
        <p className="text-base">{props.nameFile}</p>
      </div>
    </Link>
  );
}

export default CreateFileMenu;
