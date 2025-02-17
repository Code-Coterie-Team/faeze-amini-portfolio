import React, { ReactNode } from "react";

interface PakageFiles {
  IconName: ReactNode;
  nameFile: string;
}

function PakageFile(props: PakageFiles) {
  return (
    <div className="pl-9 pr-1 hover:bg-borderDarck">
      <button className="flex gap-1 items-center py-[2px]">
        {props.IconName}
        <p className="text-base pl-1">{props.nameFile}</p>
      </button>
    </div>
  );
}

export default PakageFile;
