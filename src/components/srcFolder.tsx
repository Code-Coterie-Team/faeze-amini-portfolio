"use client";
import React, { ReactNode, useState } from "react";
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
import MenuLinkProject from "./menuLinkProject";
import FileProject from "./fileProject";
import { useStore } from "@/store";

const listMenuLinkProjecs: Record<
  string,
  { href: string; IconName: ReactNode; nameLink: string }[]
> = {
  adminDashboard: [
    {
      href: "/apps/adminDashboard/#about",
      IconName: (
        <AboutIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "About",
    },
    {
      href: "/apps/adminDashboard/#challenge",
      IconName: (
        <ChallengeIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "Challenge",
    },
    {
      href: "/apps/adminDashboard/#solution",
      IconName: (
        <SolutionIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "SolutionIcon",
    },
    {
      href: "/apps/adminDashboard/#technologies",
      IconName: (
        <TechnologiesIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "Technologies",
    },
  ],
  sneakersCompany: [
    {
      href: "/apps/sneakersCompany/#about",
      IconName: (
        <AboutIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "About",
    },
    {
      href: "/apps/sneakersCompany/#challenge",
      IconName: (
        <ChallengeIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "Challenge",
    },
    {
      href: "/apps/sneakersCompany/#solution",
      IconName: (
        <SolutionIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "SolutionIcon",
    },
    {
      href: "/apps/sneakersCompany/#technologies",
      IconName: (
        <TechnologiesIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "Technologies",
    },
  ],
  rockPaperScissorsGame: [
    {
      href: "/apps/rockPaperScissorsGame/#about",
      IconName: (
        <AboutIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "About",
    },
    {
      href: "/apps/rockPaperScissorsGame/#challenge",
      IconName: (
        <ChallengeIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "Challenge",
    },
    {
      href: "/apps/rockPaperScissorsGame/#solution",
      IconName: (
        <SolutionIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "SolutionIcon",
    },
    {
      href: "/apps/rockPaperScissorsGame/#technologies",
      IconName: (
        <TechnologiesIcon
          width="18"
          height="18"
        />
      ),
      nameLink: "Technologies",
    },
  ],
};
function SrcFolder() {
  const [isSrc, setIsSrc] = useState(false);
  const [isFolderMyWork, setIsFolderMyWork] = useState(false);
  const [activeLinkproject, setActiveLinkproject] = useState("adminDashboard");

  const { projectName, changeProjectName } = useStore();

  return (
    <div className="src ">
      <div className="pl-4 pr-1">
        <button
          onClick={() => {
            setIsSrc(!isSrc);
            setIsFolderMyWork(true);
          }}
          className="flex gap-1 items-center py-[2px] w-full hover:bg-borderDarck"
        >
          {isSrc ? (
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
          <FileSrcIcon
            width="18"
            height="18"
          />
          <p className="text-base pl-1">src</p>
        </button>
      </div>
      {isSrc ? (
        <>
          <div className="myWorkFolder pl-8">
            <button
              onClick={() => {
                setIsFolderMyWork(!isFolderMyWork);
                setActiveLinkproject("adminDashboard");
              }}
              className="flex gap-1 items-center py-[2px] w-full hover:bg-borderDarck"
            >
              {isFolderMyWork ? (
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

              <FileWorkIcon
                width="18"
                height="18"
              />
              <p className="text-base pl-1">my work</p>
            </button>
            {isFolderMyWork && (
              <>
                {Object.entries(listMenuLinkProjecs).map(
                  ([project, listProject], index) => (
                    <div
                      key={index}
                      className={`${project}`}
                    >
                      <Link
                        onClick={() => {
                          setActiveLinkproject(project);
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
                      {activeLinkproject === project && (
                        <>
                          {listProject.map((item, index) => (
                            <MenuLinkProject
                              key={index}
                              href={item.href}
                              IconName={item.IconName}
                              nameLink={item.nameLink}
                            />
                          ))}
                          {/* {Object.entries(listMenuLinkProjecs).map(
                            ([nameProject, listMenus], index) =>
                              nameProject === "adminDashboard" &&
                              listMenus.map((list, index) => (
                                <MenuLinkProject
                                  href={list.href}
                                  IconName={list.IconName}
                                  nameLink={list.nameLink}
                                />
                              ))
                          )} */}
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
