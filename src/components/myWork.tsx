import React from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import PackageBox from "./icons/PackageBox";

function MyWork() {
  return (
    <div className="myWork">
      <div className="sectionSeparator flex gap-2">
        <div className="w-6 border-t-2 border-gray-50 "></div>
        <div className="w-full border-t-2 border-tGrayAll/30 "></div>
      </div>
      <div className="flex pt-12 items-center">
        <div className="text-gray-50">
          <PackageBox
            width="28"
            height="28"
          />
        </div>
        <p className="text-gray-50 text-2xl pl-7">My Work</p>
      </div>
      <div className="max-w-3xl text-5xl pt-9 mb-24">
        <span className="text-gray-50">Some of </span>
        <span className="text-textYelowLight">my work </span>
        <span className="text-gray-50">as a full stack </span>
        <span className="text-textYelowLight">web </span>
        <span className="text-gray-50">developer</span>
      </div>
      <div className="workChildren flex flex-col gap-6">
        <div className="item flex gap-8 items-center border border-tGrayAll/30 rounded-2xl shadow">
          <div className="w-1/2 p-12 pb-5">
            <h3 className="text-3xl text-gray-50">
              saas platform that enables realtors to deploy a professional
              website in minutes.
            </h3>

            <a
              className="flex items-center mt-7"
              href="#"
            >
              <span className="text-3xl text-gray-50">Learn More</span>
              <ArrowRightIcon
                width="24"
                height="24"
              />
            </a>
          </div>
          <div className="h-full w-1/2 bg-black rounded-2xl ">
            <img
              className=""
              src="/"
              alt=""
            />
          </div>
        </div>
        <div className="item flex gap-10 items-center border border-tGrayAll/30 rounded-2xl shadow">
          <div className="w-1/2 p-12 pb-5">
            <h3 className="text-3xl text-gray-50">
              saas platform that enables realtors to deploy a professional
              website in minutes.
            </h3>

            <a
              className="flex items-center mt-7"
              href="#"
            >
              <span className="text-3xl text-gray-50">Learn More</span>
              <div className="w-[24px] h-[24px]">
                <ArrowRightIcon
                  width="24"
                  height="24"
                />
              </div>
            </a>
          </div>
          <div className="h-full w-1/2 bg-purple-700 rounded-2xl ">
            <img
              className="bg-purple-700 h-full w-full"
              src="/"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
