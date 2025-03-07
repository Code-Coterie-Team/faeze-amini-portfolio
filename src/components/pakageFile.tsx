import React from "react";

function PakageFile(props: ICreateSection) {
  return (
    <div className="pl-9 pr-1 hover:bg-borderDarck">
      <button className="flex gap-1 items-center py-[2px]">
        {props.sectionIcon}
        <p className="text-base pl-1">{props.sectionName}</p>
      </button>
    </div>
  );
}

export default PakageFile;
