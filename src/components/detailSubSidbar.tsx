"use client";
import React, { useState } from "react";
import MenuCircleVerticalIcon from "./icons/MenuCircleVerticalIcon";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import DirectionDown01Icon from "./icons/DirectionDown01Icon";
import CopyIcon from "./icons/CopyIcon";
import ItemPortfolio from "./itemPortfolio";
import NewFileIcon from "./icons/NewFileIcon";
import NewFolderIcon from "./icons/NewFolderIcon";
import RefreshIcon from "./icons/RefreshIcon";
import CollapseFolderIcon from "./icons/CollapseFolderIcon";

function DetailSubSidbar() {
  const [isOpenEditors, setIsOpenEditors] = useState(false);
  const [hoverOpenEditors, setHoverOpenEditors] = useState(false);

  const [isPortfolio, setIsPortfolio] = useState(false);
  const [hoverPortfolio, setHoverPortfolio] = useState(false);

  return (
    <div className="detailSubSidbar overflow-hidden">
      <div className="flex justify-between py-3 pl-5 pr-3 overflow-hidden">
        <span className="text-xs">EXPLORER</span>
        <button>
          <MenuCircleVerticalIcon
            width="16"
            height="16"
          />
        </button>
      </div>
      <div className="menuSidbar overflow-hidden">
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
                <DirectionDown01Icon
                  width="18"
                  height="18"
                />
              ) : (
                <DirectionRight01Icon
                  width="18"
                  height="18"
                />
              )}

              <span className="font-extrabold text-xs pl-1">OPEN EDITORS</span>
            </div>
            {isOpenEditors && hoverOpenEditors && (
              <div className="flex pr-1">
                <CopyIcon
                  className="hover:bg-gray-500/30 rounded-md"
                  width="18"
                  height="18"
                />
                <CopyIcon
                  className="hover:bg-gray-500/30 rounded-md"
                  width="18"
                  height="18"
                />
                <CopyIcon
                  className="hover:bg-gray-500/30 rounded-md"
                  width="18"
                  height="18"
                />
              </div>
            )}
          </button>
        </div>

        <div
          className="item border-b-2 border-b-borderDarck py-1 transition-all h-full overflow-y-auto"
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
                <DirectionDown01Icon
                  width="18"
                  height="18"
                />
              ) : (
                <DirectionRight01Icon
                  width="18"
                  height="18"
                />
              )}
              <span className="font-extrabold text-xs pl-1">PORTFOLIO</span>
            </div>
            {isPortfolio && hoverPortfolio && (
              <div className="flex pr-1 gap-1">
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <NewFileIcon
                    className=" "
                    width="18"
                    height="18"
                  />
                </div>
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <NewFolderIcon
                    className=""
                    width="18"
                    height="18"
                  />
                </div>
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <RefreshIcon
                    className=""
                    width="18"
                    height="18"
                  />
                </div>
                <div className=" hover:bg-gray-500/30 rounded-md">
                  <CollapseFolderIcon
                    className=""
                    width="18"
                    height="18"
                  />
                </div>
              </div>
            )}
          </button>
          {isPortfolio && <ItemPortfolio />}
        </div>
        <div className="item border-b-2 border-b-borderDarck py-1">
          <button className="flex">
            <DirectionRight01Icon
              width="18"
              height="18"
            />
            <span className="font-extrabold text-xs pl-1">OUTLINE</span>
          </button>
        </div>
        <div className="item border-b-2 border-b-borderDarck py-1">
          <button className="flex">
            <DirectionRight01Icon
              width="18"
              height="18"
            />
            <span className="font-extrabold text-xs pl-1">TIMELINE</span>
          </button>
        </div>
        <div className="item py-1">
          <button className="flex">
            <DirectionRight01Icon
              width="18"
              height="18"
            />
            <span className="font-extrabold text-xs pl-1 ">SCRIPTS</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailSubSidbar;
