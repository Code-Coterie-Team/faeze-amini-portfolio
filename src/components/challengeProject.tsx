import React from "react";
import SectionSeparator from "./sectionSeparator";

interface ChallengeItems {
  descrption: string;
  item01?: string;
  item02?: string;
  item03?: string;
}

function ChallengeProject({
  descrption,
  item01,
  item02,
  item03,
}: ChallengeItems) {
  return (
    <div
      id="challenge"
      className="challenge md:px-14 px-2 py-6"
    >
      <SectionSeparator />
      <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
        Challenge
      </h1>
      <p className=" text-lg">
        {descrption}
      </p>

      <ul className="pl-10 list-disc text-lg">
        <li className={`mt-5 ${item03 === "" || item03 === undefined ? "hidden" : ""}`}>
         {item01}
        </li>
        <li className={`mt-5 ${item03 === "" || item03 === undefined ? "hidden" : ""}`}>
          {item02}
        </li>

        <li className={`mt-5 ${item03 === "" || item03 === undefined ? "hidden" : ""}`}>
         {item03}
        </li>
      </ul>
    </div>
  );
}

export default ChallengeProject;
