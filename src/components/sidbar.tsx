"use client";
import React, { useState } from "react";
import FileIcon from "./icons/FileIcon";
import SearchIcon from "./icons/SearchIcon";
import BranchIcon from "./icons/BranchIcon";
import RunitemIcon from "./icons/RunitemIcon";
import ExtentionitemIcon from "./icons/ExtentionitemIcon";
import UserCircleIcon from "./icons/UserCircleIcon";
import SettingIcon from "./icons/SettingIcon";
import DetailSubSidbar from "./detailSubSidbar";
import { useStore } from "@/store";

function Sidbar() {
  const [isFile, setIsFile] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isBranch, setIsBranch] = useState(false);
  const [isRunitem, setRunitem] = useState(false);
  const [isExtentionitem, setIsExtentionitem] = useState(false);

  const {sideBarShow} = useStore();

  return (
    <div className={`sidbar grid grid-cols-8 ${sideBarShow ? "col-span-1" : "col-span-3 "}`}>
      <div className={`subSidbar flex flex-col  pb-10 justify-between`}>
        <div className="partView flex flex-col">
          <button
            onClick={() => {
              setIsExtentionitem(false);
              setIsBranch(false);
              setIsFile(true);
              setIsSearch(false);
              setRunitem(false);
            }}
            className={`p-3 text-gray-500 hover:text-tGrayAll  ${
              isFile ? "border-l-2" : ""
            }`}
          >
            <FileIcon
              className=""
              width="32"
              height="32"
            />
          </button>
          <button
            onClick={() => {
              setIsExtentionitem(false);
              setIsBranch(false);
              setIsFile(false);
              setIsSearch(true);
              setRunitem(false);
            }}
            className={`p-3 text-gray-500 hover:text-tGrayAll  ${
              isSearch ? "border-l-2" : ""
            }`}
          >
            <SearchIcon
              width="32"
              height="32"
            />
          </button>
          <button
            onClick={() => {
              setIsExtentionitem(false);
              setIsBranch(true);
              setIsFile(false);
              setIsSearch(false);
              setRunitem(false);
            }}
            className={`p-3 text-gray-500 hover:text-tGrayAll  ${
              isBranch ? "border-l-2" : ""
            }`}
          >
            <BranchIcon
              width="32"
              height="32"
            />
          </button>
          <button
            onClick={() => {
              setIsExtentionitem(false);
              setIsBranch(false);
              setIsFile(false);
              setIsSearch(false);
              setRunitem(true);
            }}
            className={`p-3 text-gray-500 hover:text-tGrayAll  ${
              isRunitem ? "border-l-2" : ""
            }`}
          >
            <RunitemIcon
              width="32"
              height="32"
            />
          </button>
          <button
            onClick={() => {
              setIsExtentionitem(true);
              setIsBranch(false);
              setIsFile(false);
              setIsSearch(false);
              setRunitem(false);
            }}
            className={`p-3 text-gray-500 hover:text-tGrayAll  ${
              isExtentionitem ? "border-l-2" : ""
            }`}
          >
            <ExtentionitemIcon
              width="32"
              height="32"
            />
          </button>
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
      
      <div className={`${sideBarShow ? "hidden" : "col-span-7"} ml-4 border-r border-r-borderDarck overflow-hidden`}>
        {isFile && <DetailSubSidbar />}
      </div>
    </div>
  );
}

export default Sidbar;
function useRef(arg0: null) {
  throw new Error("Function not implemented.");
}
