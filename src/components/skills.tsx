"use client";
import React, { useEffect, useState } from "react";
import OpenBookIcon from "./icons/OpenBookIcon";
import Image from "next/image";
import SectionSeparator from "./sectionSeparator";

function Skills() {
  const [colorChange, setColorChange] = useState("rgb(255,255,255)");
  const [changeSkills, setChangeSkills] = useState("Languages");

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
 
  const skillsCollection: Record<string, { image: string; name: string }[]> = {
    Languages: [
      { image: "/Image/js-logo.webp", name: "JavaScript" },
      { image: "/Image/ts-logo.webp", name: "TypeScript" },
      { image: "/Image/csharp-logo.webp", name: "c#" },
    ],
    Tools: [
      { image: "/Image/git-logo.webp", name: "Git" },
      { image: "/Image/github-logo.webp", name: "GitHub" },
      { image: "/Image/figma-logo.webp", name: "Figma" },
      { image: "/Image/redux-logo.webp", name: "Redux" },
      { image: "/Image/zustand.png", name: "Zustand" },
    ],
    Front: [
      { image: "/Image/html5-logo.webp", name: "HTML" },
      { image: "/Image/css-logo.webp", name: "CSS" },
      { image: "/Image/react-logo.webp", name: "React" },
      { image: "/Image/nextjs-logo.webp", name: "Next.js" },
      { image: "/Image/tailwindcss-logo.webp", name: "Tailwind CSS" },
      { image: "/Image/bootstrap-logo.svg", name: "Bootstrap" },
      { image: "/Image/sass-logo.webp", name: "sass" },
     
    ],
    Back: [
      { image: "/Image/csharp-logo.webp", name: "c#" },
      { image: "/Image/sql-logo.png", name: "SQL" },
    ],
  };
  return (
    <div
      id="skills"
      className="skills"
    >
         <SectionSeparator/>
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
              <button
                onClick={() => {
                  setChangeSkills("Languages");
                }}
                className="w-[122px] h-[122px] bg-black rounded-tl-full rounded-[500px] flex items-center justify-center"
              >
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Languages
                </p>
              </button>
              <button
                onClick={() => {
                  setChangeSkills("Front");
                }}
                className="w-[122px] h-[122px] bg-black rounded-tr-full rounded-[500px] flex items-center justify-center"
              >
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Front
                </p>
              </button>
              <button
                onClick={() => {
                  setChangeSkills("Tools");
                }}
                className="w-[122px] h-[122px] bg-black rounded-bl-full rounded-[500px] flex items-center justify-center"
              >
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Tools
                </p>
              </button>
              <button
                onClick={() => {
                  setChangeSkills("Back");
                }}
                className="w-[122px] h-[122px] bg-black  rounded-br-full rounded-[500px] flex items-center justify-center"
              >
                <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                  Back
                </p>
              </button>
            </div>
          </div>
        </div>

        <div>
          {Object.entries(skillsCollection).map(
            ([category, skills],index) =>
              changeSkills === category && (
                <div  key={index} className="flex flex-col">
                  <h2 className="text-3xl font-semibold text-gray-50">
                    {category}
                  </h2>

                  <div className="flex gap-8 pt-8 flex-wrap">
                    {skills.map((skill,index) => (
                      <div key={index} className="h-[115px] flex flex-col items-center">
                        <Image
                          className="w-[64px] h-[64px] "
                          src={skill.image}
                          alt=""
                          width={144}
                          height={144}
                        />
                        <h3 className="bg-gray-50 text-blue-500 mt-2 rounded-full px-2">
                          {skill.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
