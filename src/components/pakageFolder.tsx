import React, { ReactNode } from "react";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";

interface PakageFolders {
  IconName: ReactNode;
  nameFolder: string;
}

function PakageFolder(props: PakageFolders) {
  return (
    <div className="pl-4 pr-1 hover:bg-borderDarck">
      <button className="flex gap-1 py-[2px] items-center">
        <DirectionRight01Icon
          width="18"
          height="18"
        />
        {props.IconName}
        <p className="text-base pl-1 opacity-40">{props.nameFolder}</p>
      </button>
    </div>
  );
}

export default PakageFolder;
