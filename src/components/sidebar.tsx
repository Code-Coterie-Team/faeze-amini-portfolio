"use client";
import React, { ReactNode, useEffect, useState } from "react";
import FileIcon from "./icons/FileIcon";
import SearchIcon from "./icons/SearchIcon";
import BranchIcon from "./icons/BranchIcon";
import RunitemIcon from "./icons/RunitemIcon";
import ExtentionitemIcon from "./icons/ExtentionitemIcon";
import UserCircleIcon from "./icons/UserCircleIcon";
import SettingIcon from "./icons/SettingIcon";
import DetailSubSidebar from "./detailSubSidebar";
import { useStore } from "@/store";

interface IActiveIconSidebars {
  activeIcon: string;
  iconSidebarName: ReactNode;
}
const activeIconSidebar: IActiveIconSidebars[] = [
  {
    activeIcon: "file",
    iconSidebarName: (
      <FileIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    activeIcon: "search",
    iconSidebarName: (
      <SearchIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    activeIcon: "branch",
    iconSidebarName: (
      <BranchIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    activeIcon: "runTime",
    iconSidebarName: (
      <RunitemIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    activeIcon: "extentionitem",
    iconSidebarName: (
      <ExtentionitemIcon
        width="32"
        height="32"
      />
    ),
  },
];

function Sidebar() {
  const [isActiveSidebar, setIsActiveSidebar] = useState("file");
  const { sideBarShow, toggleSideBarShow } = useStore();
  return (
    <div className={`sidebar flex w-full flex-1 overflow-hidden`}>
      <div className={`subSidebar flex flex-col  pb-10 justify-between`}>
        <div className="partView flex flex-col">
          {activeIconSidebar.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (sideBarShow == false) {
                  setIsActiveSidebar(item.activeIcon);
                  toggleSideBarShow(true);
                } else if (
                  sideBarShow == true &&
                  isActiveSidebar === item.activeIcon
                ) {
                  toggleSideBarShow(false);
                } else if (
                  sideBarShow == true &&
                  isActiveSidebar !== item.activeIcon
                ) {
                  setIsActiveSidebar(item.activeIcon);
                }
              }}
              className={`p-3 text-gray-500 hover:text-tGrayAll  ${
                isActiveSidebar === item.activeIcon && sideBarShow == true
                  ? "border-l-2 border-tGrayAll text-tGrayAll"
                  : ""
              }`}
            >
              {item.iconSidebarName}
            </button>
          ))}
        </div>

        <div className="partSetting flex flex-col">
          <button className="p-3 text-gray-500 hover:text-tGrayAll ">
            <UserCircleIcon
              width="32"
              height="32"
            />
          </button>
          <button className="p-3 text-gray-500 hover:text-tGrayAll ">
            <SettingIcon
              width="32"
              height="32"
            />
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col ${
          !sideBarShow && "hidden"
        } border-r border-r-borderDarck overflow-hidden`}
      >
        <div className="w-[18rem] overflow-hidden">
          {isActiveSidebar === "file" && <DetailSubSidebar />}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
