"use client";
import React, { useEffect, useState } from "react";
import OpenBookIcon from "./icons/OpenBookIcon";

function Skills() {
  const [colorChange, setColorChange] = useState("rgb(255,255,255)");

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setColorChange(randomColor);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="skills"
      className="skills"
    >
      <div className="sectionSeparator flex gap-2">
        <div className="w-6 border-t-2 border-gray-50 "></div>
        <div className="w-full border-t-2 border-tGrayAll/30 "></div>
      </div>
      <div className="flex pt-12 items-center">
        <div className="text-gray-50">
          <OpenBookIcon
            width="28"
            height="28"
          />
        </div>
        <p className="text-gray-50 text-2xl pl-7">Skills</p>
      </div>
      <div className="max-w-3xl text-5xl pt-9">
        <span className="text-textPurpLeLight">Full Stack </span>
        <span className="text-gray-50">
          software developer with experience in{" "}
        </span>
        <span className="text-textPurpLeLight">Front-End</span>
      </div>
      <div className="programmingSkills flex mt-20 gap-8">
        <div className="rounded-full w-[335px] h-[335px] border-4 border-black shadow-styleShadowCircle place-self-center relative">
          <div
            className="rounded-full w-[325px] h-[325px] "
            style={{ background: colorChange }}
          >
            <div className="grid grid-cols-2 gap-2 absolute top-[2.4rem] left-[2.3rem] rotate-45">
              <button className="w-[122px] h-[122px] bg-black rounded-tl-full rounded-[500px] flex items-center justify-center">
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Languages
                </p>
              </button>
              <button className="w-[122px] h-[122px] bg-black rounded-tr-full rounded-[500px] flex items-center justify-center">
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Front
                </p>
              </button>
              <button className="w-[122px] h-[122px] bg-black rounded-bl-full rounded-[500px] flex items-center justify-center">
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Tools
                </p>
              </button>
              <button className="w-[122px] h-[122px] bg-black  rounded-br-full rounded-[500px] flex items-center justify-center">
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Back
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold text-gray-50">
            Programming Languages
          </h2>
          <div className="flex gap-8 pt-8">
            <div className="h-[115px] flex flex-col items-center">
              <img
                className="w-[64px] h-[64px] bg-black"
                src="/"
                alt=""
              />
              <h3 className="bg-gray-50 text-blue-500 mt-2 rounded-full px-2">
                Node.js
              </h3>
            </div>
            <div className="h-[115px] flex flex-col items-center">
              <img
                className="w-[64px] h-[64px] bg-black"
                src="/"
                alt=""
              />
              <h3 className="bg-gray-50 text-blue-500 mt-2 rounded-full px-2">
                javaScript
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
