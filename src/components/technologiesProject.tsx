import React from "react";
import SectionSeparator from "./sectionSeparator";
import Image from "next/image";

interface Technology {
    name: string;
    image: string;
  }
interface TechnologiesItems {
    listTechnologies:Technology[];

}

function TechnologiesProject({listTechnologies,}: TechnologiesItems) {
  return (
    <div
      id="technologies"
      className="technologies px-14 py-6 mb-48"
    >
      <div>
        <SectionSeparator />
        <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
          Technologies
        </h1>
      </div>
      <div className="flex gap-4 mt-6 flex-wrap">
        {listTechnologies.map((item, index) => (
          <div key={index} className="h-[115px] flex flex-col items-center">
            <Image
              className="w-[64px] h-[64px] "
              src={item.image}
              alt=""
              width={144}
              height={144}
            />
            <h4 className="mt-2 px-2 font-medium tracking-tight text-lg text-gray-50 ">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesProject;
