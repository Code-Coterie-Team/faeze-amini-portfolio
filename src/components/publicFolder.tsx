"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MailIcon from "./icons/MailIcon";
import IdeaIcon from "./icons/IdeaIcon";
import SkillsIcon from "./icons/SkillsIcon";
import LaptopIcon from "./icons/LaptopIcon";
import UserCheckIcon from "./icons/UserCheckIcon";
import StarIcon from "./icons/StarIcon";
import DirectionDown01Icon from "./icons/DirectionDown01Icon";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import FilePublicIcon from "./icons/FilePublicIcon";
import CreateFileMenu from "./createFileMenu";
import { addTabStore } from "@/store";

const listPublicFile = [
  {
    href: "/#aboutme",
    IconName: (
      <UserCheckIcon
        width="18"
        height="18"
      />
    ),
    nameFile: "About Me",
  },
  {
    href: "/#workExperience",
    IconName: (
      <LaptopIcon
        width="18"
        height="18"
      />
    ),
    nameFile: "Work Experience",
  },
  {
    href: "/#skills",
    IconName: (
      <SkillsIcon
        width="18"
        height="18"
      />
    ),
    nameFile: "Skills",
  },
  {
    href: "/#myWork",
    IconName: (
      <IdeaIcon
        width="18"
        height="18"
      />
    ),
    nameFile: "My Work",
  },
  {
    href: "/#contactMe",
    IconName: (
      <MailIcon
        className="text-blue-600"
        width="18"
        height="18"
      />
    ),
    nameFile: "Contact Me",
  },
];

function PublicFolder() {

  const [isPublic, setIsPublic] = useState(false);
  const { tab, addTab } = addTabStore();
  return (
    <div className="public">
      <button
        onClick={() => {
          setIsPublic(!isPublic);
        }}
        className="flex gap-1 items-center py-[2px] w-full hover:bg-borderDarck"
      >
        {isPublic ? (
          <DirectionDown01Icon
            className="ml-4"
            width="18"
            height="18"
          />
        ) : (
          <DirectionRight01Icon
            className="ml-4"
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
      {isPublic ? (
        <div className="menuPublic">
          <Link
            onClick={() => {
              addTab(
                "About Me",
                <StarIcon
                  width="18"
                  height="18"
                />,"/"
              );
            }}
            href="/"
          >
            <div className="aboutmePart  flex items-center gap-2 pl-10 py-[2px] bg-gray-500/20  hover:bg-borderDarck">
              <StarIcon
                width="18"
                height="18"
              />
              <p className="text-base">about_me.ts</p>
            </div>
          </Link>
          {listPublicFile.map((item, index) => (
            <CreateFileMenu
              key={index}
              nameFile={item.nameFile}
              href={item.href}
              IconName={item.IconName}
            />
          ))}
          {/* <Link href="/#aboutme">
            <div className="aboutme flex items-center gap-2  py-[2px]">
              <UserCheckIcon
                className="ml-14"
                width="18"
                height="18"
              />
              <p className="text-base">About Me</p>
            </div>
          </Link> */}
          {/* <Link href={"/#workExperience"}>
            <div className="workExperience flex items-center gap-2 pl-14 py-[2px]">
              <LaptopIcon
                width="18"
                height="18"
              />
              <p className="text-base">Work Experience</p>
            </div>
          </Link> */}
          {/* <Link href="/#skills">
            <div className="skills flex items-center gap-2 pl-14 py-[2px]">
              <SkillsIcon
                width="18"
                height="18"
              />
              <p className="text-base">Skills</p>
            </div>
          </Link> */}
          {/* <Link href="/#myWork">
            <div className="myWork flex items-center gap-2 pl-14 py-[2px]">
              <IdeaIcon
                width="18"
                height="18"
              />
              <p className="text-base">My Work</p>
            </div>
          </Link> */}
          {/* <Link href="/#contactMe">
            <div className="contactMe flex items-center gap-2 pl-14 py-[2px]">
              <MailIcon
                className="text-blue-600"
                width="18"
                height="18"
              />
              <p className="text-base">Contact Me</p>
            </div>
          </Link> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PublicFolder;
