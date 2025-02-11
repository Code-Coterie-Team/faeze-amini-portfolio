import Link from "next/link";
import React, { ReactNode } from "react";
import AboutIcon from "./icons/AboutIcon";

interface MenuLinkProjects {
  href: string;
  IconName: ReactNode;
  nameLink: string;
}
function MenuLinkProject(props: MenuLinkProjects) {
  return (
    <Link href={props.href}>
      <div className="hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
        {props.IconName}
        <p className="text-base">{props.nameLink}</p>
      </div>
    </Link>
  );
}

export default MenuLinkProject;
