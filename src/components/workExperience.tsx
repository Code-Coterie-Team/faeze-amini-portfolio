import React from "react";
import BriefcaseIcon from "./icons/BriefcaseIcon";
import Image from "next/image";

function WorkExperience() {
  return (
    <div
      id="workExperience"
      className="workExperience"
    >
      <div className="sectionSeparator flex gap-2">
        <div className="w-6 border-t-2 border-gray-50 "></div>
        <div className="w-full border-t-2 border-tGrayAll/30 "></div>
      </div>
      <div className="flex pt-12 items-center">
        <div className="text-gray-50 w-[28px] h-[28px]">
          <BriefcaseIcon className="" />
        </div>
        <p className="text-gray-50 text-2xl pl-7 ">Work Experience</p>
      </div>
      <div className="max-w-3xl text-5xl pt-9">
        <span className="text-textLightRed">Front-end </span>
        <span className="text-gray-50">with </span>
        <span className="text-textLightRed">1 years </span>
        <span className="text-gray-50">
          of experience in the software industry
        </span>
      </div>
      <div className="border-l mt-24 border-l-tGrayAll/30 pl-2">
        <div className="flex ">
          <div>
            <div>
              <span className="px-4 font-semibold text-gray-50">
                JUN 2023-PRESENT
              </span>
            </div>
            <div className="w-[96px] h-[96px] m-20">
              <Image
                src="/Image/codecoterie.jpeg"
                alt=""
                width={96}
                height={96}
              />
            </div>
          </div>
          <div>
            <p className="text-textLightRed text-lg font-semibold mb-4">
              CodeCoterie | Frontend Developer
            </p>
            <ul className="list-disc pl-10 text-base pb-8">
              <li className="py-1">
                Developed and maintained React components, screens.
              </li>
              <li className="py-1">
                Developed front-end user interface using React,Tailwind and
                JavaScript for Web Apps.
              </li>
              <li className="py-1">
                Collaborated with other developers to implement new features in
                a way that is consistent with existing codebase conventions.
              </li>
            </ul>
            <div className="sectionSeparator flex gap-2">
              <div className="w-6 border-t-2 border-gray-50 "></div>
              <div className="w-full border-t-2 border-tGrayAll/30 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
