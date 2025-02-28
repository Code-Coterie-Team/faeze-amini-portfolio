"use client";
import Link from "next/link";
import React from "react";
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
import { addTabStore, useStore } from "@/store";

const listPublicFile = [
  {
    href: "/#aboutme",
    hrefPage: "/",
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
    hrefPage: "/",
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
    hrefPage: "/",
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
    hrefPage: "/",
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
    hrefPage: "/",
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
  const {
    addTab,
    changeActiveTab,
    activeTab,
    isPublicSideBar,
    changeIsPublicSideBar,
  } = addTabStore();

  const { changeActiveHash } = useStore();
  return (
    <div className="public">
      <button
        onClick={() => {
          changeIsPublicSideBar(!isPublicSideBar);
        }}
        className="flex gap-1 items-center py-[2px] w-full hover:bg-borderDarck"
      >
        {isPublicSideBar ? (
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
      {isPublicSideBar ? (
        <div className="menuPublic relative">
          <Link
            onClick={() => {
              addTab("About Me", "/");
              changeActiveTab("/");
              changeActiveHash("/#aboutme");
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
          {activeTab === "/" ? (
            <CreateFileMenu listFileMenu={listPublicFile} />
          ) : undefined}

          <div className="left-6 top-0 absolute h-full border-l border-lineBorder bg-tGrayAll"></div>
        </div>
      ) : undefined}
    </div>
  );
}

export default PublicFolder;
