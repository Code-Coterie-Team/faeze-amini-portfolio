"use client";
import React, { useState } from "react";
import FileNextIcon from "./icons/FileNextIcon";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import FileNodeModulesIcon from "./icons/FileNodeModulesIcon";
import FilePublicIcon from "./icons/FilePublicIcon";
import FileSrcIcon from "./icons/FileSrcIcon";
import EslintrcIcon from "./icons/EslintrcIcon";
import GitignoreIcon from "./icons/GitignoreIcon";
import NextConfigIcon from "./icons/NextConfigIcon";
import PackageIcon from "./icons/PackageIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TsconfigIcon from "./icons/TsconfigIcon";
import DirectionDown01Icon from "./icons/DirectionDown01Icon";
import StarIcon from "./icons/StarIcon";
import Link from "next/link";
import UserCheckIcon from "./icons/UserCheckIcon";
import LaptopIcon from "./icons/LaptopIcon";
import SkillsIcon from "./icons/SkillsIcon";
import IdeaIcon from "./icons/IdeaIcon";
import MailIcon from "./icons/MailIcom";
import FileWorkIcon from "./icons/FileWorkIcon";
import FileLeetcodeIcon from "./icons/FileLeetcodeIcon";
import NextIcon from "./icons/NextIcon";

function ItemPortfolio() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div className="itemPortfolio overflow-y-auto">
      <div className="next pl-4 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 py-[2px] items-center">
          <DirectionRight01Icon
            width="18"
            height="18"
          />
          <FileNextIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1 opacity-40">.next</p>
        </button>
      </div>
      <div className="nodeModules pl-4 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <DirectionRight01Icon
            width="18"
            height="18"
          />
          <FileNodeModulesIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1 opacity-40">node_modules</p>
        </button>
      </div>
      <div className="public pl-4 pr-1">
        <button
          onClick={() => {
            setIsPublic(!isPublic);
          }}
          className="flex gap-1 items-center py-[2px] w-full hover:bg-borderDarck"
        >
          {isPublic ? (
            <DirectionDown01Icon
              width="18"
              height="18"
            />
          ) : (
            <DirectionRight01Icon
              width="18"
              height="18"
            />
          )}

          <FilePublicIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">public</p>
        </button>
        <Link href="/">
          <div className="aboutmePart hover:bg-borderDarck flex items-center gap-2 pl-10 py-[2px]">
            <StarIcon
              width="18"
              height="18"
            />
            <p className="text-base">about_me.ts</p>
          </div>
        </Link>
        <Link href="#aboutme">
          <div className="aboutme hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
            <UserCheckIcon
              width="18"
              height="18"
            />
            <p className="text-base">About Me</p>
          </div>
        </Link>
        <Link href="#workExperience">
          <div className="workExperience hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
            <LaptopIcon
              width="18"
              height="18"
            />
            <p className="text-base">Work Experience</p>
          </div>
        </Link>
        <Link href="#skills">
          <div className="skills hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
            <SkillsIcon
              width="18"
              height="18"
            />
            <p className="text-base">Skills</p>
          </div>
        </Link>
        <Link href="#myWork">
          <div className="myWork hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
            <IdeaIcon
              width="18"
              height="18"
            />
            <p className="text-base">My Work</p>
          </div>
        </Link>
        <Link href="#contactMe">
          <div className="contactMe hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
            <MailIcon
              className="text-blue-600"
              width="18"
              height="18"
            />
            <p className="text-base">Contact Me</p>
          </div>
        </Link>
      </div>
      <div className="src ">
        <div className="pl-4 pr-1">
          <button className="flex gap-1 items-center py-[2px]hover:bg-borderDarck">
            <DirectionRight01Icon
              width="18"
              height="18"
            />

            <FileSrcIcon
              width="18"
              height="18"
            />
            <p className="text-base pl-1">src</p>
          </button>
        </div>

        <div className="myWorkFolder pl-4">
          <button className="flex gap-1 items-center py-[2px]">
            <DirectionRight01Icon
              width="18"
              height="18"
            />

            <FileWorkIcon
              width="18"
              height="18"
            />
            <p className="text-base pl-1">my work</p>
          </button>
          <Link href="#aboutme">
            <div className="aboutme hover:bg-borderDarck flex items-center gap-2 pl-10 py-[2px]">
              <NextIcon
                width="18"
                height="18"
              />
              <p className="text-base">Realtor Simplified</p>
            </div>
          </Link>
        </div>
        <div className="leetcodeFolder pl-4">
          <button className="flex gap-1 items-center py-[2px]">
            <DirectionRight01Icon
              width="18"
              height="18"
            />

            <FileLeetcodeIcon
              width="18"
              height="18"
            />
            <p className="text-base pl-1">leetcode</p>
          </button>
        </div>
      </div>
      <div className="pl-9 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <EslintrcIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">.eslintrc.json</p>
        </button>
      </div>
      <div className="pl-9 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <GitignoreIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">.gitignore</p>
        </button>
      </div>
      <div className="pl-9 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <NextConfigIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">next.config.js</p>
        </button>
      </div>
      <div className="pl-9 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <PackageIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">package-lock.json</p>
        </button>
      </div>
      <div className="pl-9 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <PackageIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">package.json</p>
        </button>
      </div>
      <div className="pl-9 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <TailwindIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">tailwind.config.ts</p>
        </button>
      </div>
      <div className="pl-9 pr-1 hover:bg-borderDarck">
        <button className="flex gap-1 items-center py-[2px]">
          <TsconfigIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">tsconfig.json</p>
        </button>
      </div>
    </div>
  );
}

export default ItemPortfolio;
