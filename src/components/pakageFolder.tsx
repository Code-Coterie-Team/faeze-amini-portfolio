import React from "react";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import { ICreateSection } from "@/types/types";

function PakageFolder(props: ICreateSection) {
  return (
    <div className="pl-4 pr-1 hover:bg-borderDarck">
      <button className="flex gap-1 py-[2px] items-center">
        <DirectionRight01Icon
          width="18"
          height="18"
        />
        {props.sectionIcon}
        <p className="text-base pl-1 opacity-40">{props.sectionName}</p>
      </button>
    </div>
  );
}

export default PakageFolder;
