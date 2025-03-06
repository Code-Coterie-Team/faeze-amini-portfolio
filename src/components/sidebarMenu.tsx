import { ICreateSection } from "@/types/types";
import React from "react";

function SidebarMenu(props: ICreateSection) {
  return (
    <div className="sidebarMenuItem border-b-2 py-1 border-b-borderDarck ">
      <button className="flex">
        {props.sectionIcon}
        <span className="font-extrabold text-xs pl-1">{props.sectionName}</span>
      </button>
    </div>
  );
}

export default SidebarMenu;
