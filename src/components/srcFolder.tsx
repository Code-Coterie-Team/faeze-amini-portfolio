"use client";
import React, { ReactNode, useEffect, useState } from "react";
import DirectionRight01Icon from "./icons/DirectionRight01Icon";
import FileSrcIcon from "./icons/FileSrcIcon";
import DirectionDown01Icon from "./icons/DirectionDown01Icon";
import Link from "next/link";
import FileWorkIcon from "./icons/FileWorkIcon";
import AboutIcon from "./icons/AboutIcon";
import ChallengeIcon from "./icons/ChallengeIcon";
import SolutionIcon from "./icons/SolutionIcon";
import TechnologiesIcon from "./icons/TechnologiesIcon";
import ReactJsIcon from "./icons/ReactJsIcon";
import { addTabStore, useStore } from "@/store";
import CreateFileMenu from "./createFileMenu";
import StarIcon from "./icons/StarIcon";

const listMenuLinkProjecs: Record<
  string,
  { href: string; hrefPage: string; IconName: ReactNode; nameFile: string }[]
> = {
  adminDashboard: [
    {
      href: "/apps/adminDashboard/#about",
      hrefPage: "/apps/adminDashboard",
      IconName: (
        <AboutIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "About",
    },
    {
      href: "/apps/adminDashboard/#challenge",
      hrefPage: "/apps/adminDashboard",
      IconName: (
        <ChallengeIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "Challenge",
    },
    {
      href: "/apps/adminDashboard/#solution",
      hrefPage: "/apps/adminDashboard",
      IconName: (
        <SolutionIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "SolutionIcon",
    },
    {
      href: "/apps/adminDashboard/#technologies",
      hrefPage: "/apps/adminDashboard",
      IconName: (
        <TechnologiesIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "Technologies",
    },
  ],
  sneakersCompany: [
    {
      href: "/apps/sneakersCompany/#about",
      hrefPage: "/apps/sneakersCompany",
      IconName: (
        <AboutIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "About",
    },
    {
      href: "/apps/sneakersCompany/#challenge",
      hrefPage: "/apps/sneakersCompany",
      IconName: (
        <ChallengeIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "Challenge",
    },
    {
      href: "/apps/sneakersCompany/#solution",
      hrefPage: "/apps/sneakersCompany",
      IconName: (
        <SolutionIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "SolutionIcon",
    },
    {
      href: "/apps/sneakersCompany/#technologies",
      hrefPage: "/apps/sneakersCompany",
      IconName: (
        <TechnologiesIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "Technologies",
    },
  ],
  rockPaperScissorsGame: [
    {
      href: "/apps/rockPaperScissorsGame/#about",
      hrefPage: "/apps/rockPaperScissorsGame",
      IconName: (
        <AboutIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "About",
    },
    {
      href: "/apps/rockPaperScissorsGame/#challenge",
      hrefPage: "/apps/rockPaperScissorsGame",
      IconName: (
        <ChallengeIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "Challenge",
    },
    {
      href: "/apps/rockPaperScissorsGame/#solution",
      hrefPage: "/apps/rockPaperScissorsGame",
      IconName: (
        <SolutionIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "SolutionIcon",
    },
    {
      href: "/apps/rockPaperScissorsGame/#technologies",
      hrefPage: "/apps/rockPaperScissorsGame",
      IconName: (
        <TechnologiesIcon
          width="18"
          height="18"
        />
      ),
      nameFile: "Technologies",
    },
  ],
};
function SrcFolder() {
  const {
    tab,
    addTab,
    changeActiveTab,
    activeTab,
    isMyFolderSideBar,
    isSrcFolderSideBar,
    changeMyFolderSideBar,
    changeSrcFolderSideBar,
  } = addTabStore();
  let titleProject = "";

  return (
    <div className="src ">
      <button
        onClick={() => {
          changeSrcFolderSideBar(!isSrcFolderSideBar);
          changeMyFolderSideBar(true);
        }}
        className="flex gap-1 items-center py-[2px] w-full hover:bg-borderDarck"
      >
        {isSrcFolderSideBar ? (
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
        <FileSrcIcon
          width="18"
          height="18"
        />
        <p className="text-base pl-1">src</p>
      </button>

      {isSrcFolderSideBar ? (
        <>
          <div className="myWorkFolder">
            <button
              onClick={() => {
                changeMyFolderSideBar(!isMyFolderSideBar);
              }}
              className="flex gap-1 items-center py-[2px] w-full hover:bg-borderDarck"
            >
              {isMyFolderSideBar ? (
                <DirectionDown01Icon
                  className="ml-8"
                  width="18"
                  height="18"
                />
              ) : (
                <DirectionRight01Icon
                  className="ml-8"
                  width="18"
                  height="18"
                />
              )}

              <FileWorkIcon
                width="18"
                height="18"
              />
              <p className="text-base pl-1">my work</p>
            </button>
            {isMyFolderSideBar && (
              <>
                {Object.entries(listMenuLinkProjecs).map(
                  ([project, listProject], index) => (
                    <div
                      key={index}
                      className={`${project}`}
                    >
                      <Link
                        onClick={() => {
                          titleProject =
                            project
                              .replace(/([A-Z])/g, " $1")
                              .trim()
                              .charAt(0)
                              .toUpperCase() +
                            project
                              .replace(/([A-Z])/g, " $1")
                              .trim()
                              .slice(1);

                          addTab(titleProject, "/apps/" + project, <StarIcon/>);
                          changeActiveTab(`/apps/${project}`);
                        }}
                        href={`/apps/${project}`}
                      >
                        <div
                          key={index}
                          className="hover:bg-borderDarck flex items-center gap-2 pl-10 py-[2px]"
                        >
                          <ReactJsIcon
                            width="18"
                            height="18"
                          />
                          <p className="text-base">
                            {project
                              .replace(/([A-Z])/g, " $1")
                              .trim()
                              .charAt(0)
                              .toUpperCase() +
                              project
                                .replace(/([A-Z])/g, " $1")
                                .trim()
                                .slice(1)}
                          </p>
                        </div>
                      </Link>
                      {activeTab === `/apps/${project}` && (
                        <>
                          {listProject.map((item, index) => (
                            <CreateFileMenu
                              key={index}
                              href={item.href}
                              hrefPage={item.hrefPage}
                              IconName={item.IconName}
                              nameFile={item.nameFile}
                            />
                          ))}
                        </>
                      )}
                    </div>
                  )
                )}

                {/* <FileProject
                  nameProject="Rock Paper Scissors Game"
                  href="/apps/rockPaperScissorsGame"
                  IconProject={
                    <ReactJsIcon
                      width="18"
                      height="18"
                    />
                  }
                /> */}
              </>
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default SrcFolder;
