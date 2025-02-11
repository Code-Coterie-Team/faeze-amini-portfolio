"use client"
import Link from "next/link";
import React, { useState } from "react";
import MailIcon from "./icons/MailIcon";
import IdeaIcon from "./icons/IdeaIcon";
import SkillsIcon from "./icons/SkillsIcon";
import LaptopIcon from "./icons/LaptopIcon";
import UserCheckIcon from "./icons/UserCheckIcon";
import StarIcon from "./icons/StarIcon";
import DirectionDown01Icon from "./icons/DirectionDown01Icon";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import FilePublicIcon from "./icons/FilePublicIcon";

function PublicFolder() {

    const [isPublic, setIsPublic] = useState(false);
    
  return (
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
      {isPublic ? (
        <div className="menuPublic">
          <Link href="/">
            <div className="aboutmePart hover:bg-borderDarck flex items-center gap-2 pl-10 py-[2px]">
              <StarIcon
                width="18"
                height="18"
              />
              <p className="text-base">about_me.ts</p>
            </div>
          </Link>
          <Link href="/#aboutme">
            <div className="aboutme hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
              <UserCheckIcon
                width="18"
                height="18"
              />
              <p className="text-base">About Me</p>
            </div>
          </Link>
          <Link href={"/#workExperience"}>
            <div className="workExperience hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
              <LaptopIcon
                width="18"
                height="18"
              />
              <p className="text-base">Work Experience</p>
            </div>
          </Link>
          <Link href="/#skills">
            <div className="skills hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
              <SkillsIcon
                width="18"
                height="18"
              />
              <p className="text-base">Skills</p>
            </div>
          </Link>
          <Link href="/#myWork">
            <div className="myWork hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
              <IdeaIcon
                width="18"
                height="18"
              />
              <p className="text-base">My Work</p>
            </div>
          </Link>
          <Link href="/#contactMe">
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
      ) : (
        ""
      )}
    </div>
  );
}

export default PublicFolder;
