import React from "react";
import FileIcon from "./icons/FileIcon";
import SearchIcon from "./icons/SearchIcon";
import BranchIcon from "./icons/BranchIcon";
import RunitemIcon from "./icons/RunitemIcon";
import ExtentionitemIcon from "./icons/ExtentionitemIcon";
import UserCircleIcon from "./icons/UserCircleIcon";
import SettingIcon from "./icons/SettingIcon";
import MenuCircleVerticalIcon from "./icons/MenuCircleVerticalIcon";

function Sidbar() {
  return (
    <div className="sidbar grid grid-cols-8 gap-2 col-span-3">
      <div className="subSidbar flex flex-col justify-between col-span-1">
        <div className="partView flex flex-col">
          <button className="p-3 hover:text-opacity-90 hover:text-gray-50 border-l-2">
            <FileIcon
              width="32"
              height="32"
            />
          </button>
          <button className="p-3 hover:text-opacity-90 hover:text-gray-50">
            <SearchIcon
              width="32"
              height="32"
            />
          </button>
          <button className="p-3 hover:text-opacity-90 hover:text-gray-50">
            <BranchIcon
              width="32"
              height="32"
            />
          </button>
          <button className="p-3 hover:text-opacity-90 hover:text-gray-50">
            <RunitemIcon
              width="32"
              height="32"
            />
          </button>
          <button className="p-3 hover:text-opacity-90 hover:text-gray-50">
            <ExtentionitemIcon
              width="32"
              height="32"
            />
          </button>
        </div>

        <div className="partSetting flex flex-col">
          <button className="p-3 hover:text-opacity-90 hover:text-gray-50">
            <UserCircleIcon
              width="32"
              height="32"
            />
          </button>
          <button className="p-3 hover:text-opacity-90 hover:text-gray-50">
            <SettingIcon
              width="32"
              height="32"
            />
          </button>
        </div>
      </div>
      <div className="detailSubSidbar col-span-7 border-r border-r-borderDarck">
        <div className="flex justify-between py-3 pl-5 pr-3 ">
          <span className="text-xs">EXPLORER</span>
          <button>
            <MenuCircleVerticalIcon
              width="16"
              height="16"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidbar;
