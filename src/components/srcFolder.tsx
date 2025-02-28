"use client";
import React, { ReactElement } from "react";
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

const listMenuLinkProjecs: Record<
  string,
  { href: string; hrefPage: string; IconName: ReactElement; nameFile: string }[]
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
    addTab,
    changeActiveTab,
    activeTab,
    isMyFolderSideBar,
    isSrcFolderSideBar,
    changeMyFolderSideBar,
    changeSrcFolderSideBar,
  } = addTabStore();

  const { hoverPortfolio, changeActiveHash } = useStore();
  let titleProject = "";

  return (
    <div className="src relative overflow-hidden">
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
          <div className="myWorkFolder relative overflow-hidden">
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

                          addTab(titleProject, "/apps/" + project);
                          changeActiveTab(`/apps/${project}`);
                          changeActiveHash(`/apps/${project}/#about`);
                        }}
                        href={`/apps/${project}`}
                      >
                        <div
                          key={index}
                          className="hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]"
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
                          <CreateFileMenu listFileMenu={listProject} />

                          <div className="lineBordMyFolde"></div>
                        </>
                      )}
                    </div>
                  )
                )}
              </>
            )}
            {hoverPortfolio && <div className="lineBordMyFolde"></div>}
          </div>
        </>
      ) : (
        ""
      )}
      {hoverPortfolio && <div className="lineBordSrc"></div>}
    </div>
  );
}

export default SrcFolder;
