"use client";
import React, { useState } from "react";
import MenuCircleVerticalIcon from "./icons/MenuCircleVerticalIcon";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import DirectionDown01Icon from "./icons/DirectionDown01Icon";
import ItemPortfolio from "./itemPortfolio";
import NewFileIcon from "./icons/NewFileIcon";
import NewFolderIcon from "./icons/NewFolderIcon";
import RefreshIcon from "./icons/RefreshIcon";
import CollapseFolderIcon from "./icons/CollapseFolderIcon";
import SidebarMenu from "./sidebarMenu";
import { useStore } from "@/store";

function DetailSubSidebar() {
  const {hoverPortfolio, setHoverPortfolio} = useStore();
  const [isOpenEditors, setIsOpenEditors] = useState(false);
  const [hoverOpenEditors, setHoverOpenEditors] = useState(false);

  const [isPortfolio, setIsPortfolio] = useState(true);

  const listSidebarMenu = [
    {
      iconMenu: <DirectionRight01Icon width="18" height="18" />,
      menuName: "OUTLINE",
    },
    {
      iconMenu: <DirectionRight01Icon width="18" height="18" />,
      menuName: "TIMELINE",
    },
    {
      iconMenu: <DirectionRight01Icon width="18" height="18" />,
      menuName: "SCRIPTS",
    },
  ];
  return (
    <div className="overflow-hidden h-full flex-1 flex flex-col">
      <div className="flex justify-between py-3 pl-5 pr-3">
        <span className="text-xs">EXPLORER</span>
        <button>
          <MenuCircleVerticalIcon width="16" height="16" />
        </button>
      </div>
      <div className="menuSidebar flex-1 flex flex-col overflow-hidden">
        <div
          className="item border-b-2 border-b-borderDarck py-1"
          onMouseEnter={() => setHoverOpenEditors(true)}
          onMouseLeave={() => {
            setHoverOpenEditors(false);
          }}
        >
          <button
            onClick={() => {
              setIsOpenEditors(!isOpenEditors);
            }}
            className="flex justify-between w-full"
          >
            <div className="flex">
              {isOpenEditors ? (
                <DirectionDown01Icon width="18" height="18" />
              ) : (
                <DirectionRight01Icon width="18" height="18" />
              )}

              <span className="font-extrabold text-xs pl-1">OPEN EDITORS</span>
            </div>
            {isOpenEditors && hoverOpenEditors && (
              <div className="flex pr-1">
                <NewFileIcon
                  className="hover:bg-gray-500/30 rounded-md "
                  width="18"
                  height="18"
                />
                <CollapseFolderIcon
                  className="hover:bg-gray-500/30 rounded-md"
                  width="18"
                  height="18"
                />
              </div>
            )}
          </button>
        </div>

        <div
          className="item border-b-2 flex-1 border-b-borderDarck py-1 transition-all overflow-hidden"
          onMouseEnter={() => setHoverPortfolio(true)}
          onMouseLeave={() => {
            setHoverPortfolio(false);
          }}
        >
          <button
            onClick={() => {
              setIsPortfolio(!isPortfolio);
            }}
            className="flex w-full justify-between"
          >
            <div className="flex">
              {isPortfolio ? (
                <DirectionDown01Icon width="18" height="18" />
              ) : (
                <DirectionRight01Icon width="18" height="18" />
              )}
              <span className="font-extrabold text-xs pl-1">PORTFOLIO</span>
            </div>
            {isPortfolio && hoverPortfolio && (
              <div className="flex pr-1 gap-1 ">
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <NewFileIcon width="18" height="18" />
                </div>
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <NewFolderIcon width="18" height="18" />
                </div>
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <RefreshIcon width="18" height="18" />
                </div>
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <CollapseFolderIcon width="18" height="18" />
                </div>
              </div>
            )}
          </button>
          {isPortfolio && <ItemPortfolio />}
        </div>
        {listSidebarMenu.map((itemMenu, index) => (
          <SidebarMenu
            key={index}
            sectionIcon={itemMenu.iconMenu}
            sectionName={itemMenu.menuName}
          />
        ))}
      </div>
    </div>
  );
}

export default DetailSubSidebar;
