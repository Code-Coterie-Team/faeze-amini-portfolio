"use client";
import React, { useState } from "react";
import FileIcon from "./icons/FileIcon";
import SearchIcon from "./icons/SearchIcon";
import BranchIcon from "./icons/BranchIcon";
import RunitemIcon from "./icons/RunitemIcon";
import ExtentionitemIcon from "./icons/ExtentionitemIcon";
import UserCircleIcon from "./icons/UserCircleIcon";
import SettingIcon from "./icons/SettingIcon";
import DetailSubSidebar from "./detailSubSidebar";
import { useStore } from "@/store";

const activeIconSidebar: ICreateSection[] = [
  {
    sectionName: "file",
    sectionIcon: (
      <FileIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    sectionName: "search",
    sectionIcon: (
      <SearchIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    sectionName: "branch",
    sectionIcon: (
      <BranchIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    sectionName: "runTime",
    sectionIcon: (
      <RunitemIcon
        width="32"
        height="32"
      />
    ),
  },
  {
    sectionName: "extentionitem",
    sectionIcon: (
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
                  setIsActiveSidebar(item.sectionName);
                  toggleSideBarShow(true);
                } else if (
                  sideBarShow == true &&
                  isActiveSidebar === item.sectionName
                ) {
                  toggleSideBarShow(false);
                } else if (
                  sideBarShow == true &&
                  isActiveSidebar !== item.sectionName
                ) {
                  setIsActiveSidebar(item.sectionName);
                }
              }}
              className={`p-3 text-gray-500 hover:text-tGrayAll  ${
                isActiveSidebar === item.sectionName && sideBarShow == true
                  ? "border-l-2 border-tGrayAll text-tGrayAll"
                  : ""
              }`}
            >
              {item.sectionIcon}
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
        } border-r border-r-borderDarck overflow-hidden lg:static absolute top-0 left-14 bg-darckBg z-10 h-full`}
      >
        <div className="w-[18rem] overflow-hidden">
          {isActiveSidebar === "file" && <DetailSubSidebar />}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
