import React from "react";
import BriefcaseIcon from "./icons/BriefcaseIcon";
import Image from "next/image";
import SectionSeparator from "./sectionSeparator";

function WorkExperience() {
  return (
    <div
      id="workExperience"
      className="workExperience"
    >
      <SectionSeparator />
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
        <div className="lg:hidden flex flex-col lg:flex-row">
          <div className="flex flex-row lg:flex-col gap-2">
          <div className="w-[96px] h-[96px] lg:m-20 mx-4">
              <Image
                src="/Image/codecoterie.jpeg"
                alt=""
                width={96}
                height={96}
              />
            </div>
            <div className="flex flex-col lg:flex-row font-semibold">
              <span className="text-gray-50">JUN 2023-PRESENT</span>
              <p className="text-textLightRed text-lg mb-4">
                CodeCoterie | Frontend Developer
              </p>
            </div>
           
          </div>
          <div>
            <ul className="list-disc pl-10 text-base pb-8 pt-8">
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
          </div>
        </div>
        <div className=" lg:flex lg:flex-row gap-4 hidden">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row font-semibold">
              <span className="text-gray-50 px-4">JUN 2023-PRESENT</span>
            </div>
            <div className="w-[96px] h-[96px] mx-8 my-8 ">
              <Image
                src="/Image/codecoterie.jpeg"
                alt=""
                width={96}
                height={96}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-textLightRed text-lg mb-4 font-semibold px-4">
              CodeCoterie | Frontend Developer
            </p>
            <ul className="list-disc pl-14 text-base pb-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
