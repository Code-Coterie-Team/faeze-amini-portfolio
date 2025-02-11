import React, { ReactNode } from "react";

interface SidebarMenus {
  iconMenu: ReactNode;
  menuName: string;
}

function SidebarMenu(props: SidebarMenus) {
  return (
    <div className="sidebarMenuItem border-b-2 py-1 border-b-borderDarck ">
      <button className="flex">
        {props.iconMenu}
        <span className="font-extrabold text-xs pl-1">{props.menuName}</span>
      </button>
    </div>
  );
}

export default SidebarMenu;
