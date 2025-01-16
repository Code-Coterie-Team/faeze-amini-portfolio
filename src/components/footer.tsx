import React from "react";
import BranchIcon from "./icons/BranchIcon";
import WarningErrorIcon from "./icons/WarningErrorIcon";
import MultiplyCircleIcon from "./icons/MultiplyCircleIcon";
import OpenARemoteWindowIcon from "./icons/OpenARemoteWindowIcon";
import IcloadIcon from "./icons/IcloadIcon";
import LiveServerIcon from "./icons/LiveServerIcon";
import Notification01Icon from "./icons/Notification01Icon";

function Footer() {
  return (
    <div className="flex flex-row bottom-0 border-t border-borderDarck justify-between">
      <div className="flex items-center cursor-pointer gap-1">
        <div className="p-1 px-2 bg-blue-400 bg-opacity-50 hover:bg-gray-500 hover:bg-opacity-30">
          <OpenARemoteWindowIcon
            width="18"
            height="18"
          />
        </div>
        <div className="flex flex-row gap-1 p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
          <div>
            <BranchIcon
              width="18"
              height="18"
            />
          </div>
          <span>main &#42;</span>
        </div>
        <div className="p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
          <IcloadIcon
            width="20"
            height="20"
          />
        </div>
        <div className="flex flex-row gap-1 items-center p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
          <div>
            <MultiplyCircleIcon
              width="16"
              height="16"
            />
          </div>

          <span>0</span>
          <WarningErrorIcon
            width="16"
            height="16"
          />
          <span>0 </span>
        </div>
      </div>
      <div className="flex items-center cursor-pointer gap-1">
        <span className="p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
          Spaces: 2
        </span>
        <span className="p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
          UTF-8
        </span>
        <span className="p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
          CRLF
        </span>
        <span className="p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
          &#123; &#125; TypeScript JSX
        </span>
        <div className="flex flex-row gap-1 p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
        <LiveServerIcon width="18" height="18"/>
          <span>Go Live</span>
        </div>
        <div className="p-1 px-2 hover:bg-gray-500 hover:bg-opacity-30">
         <Notification01Icon width="18" height="18"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
