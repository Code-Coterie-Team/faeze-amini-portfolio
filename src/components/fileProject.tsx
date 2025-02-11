import Link from "next/link";
import React, { ReactNode } from "react";
import { useStore } from "@/store";
import AboutIcon from "./icons/AboutIcon";
import ChallengeIcon from "./icons/ChallengeIcon";
import SolutionIcon from "./icons/SolutionIcon";
import TechnologiesIcon from "./icons/TechnologiesIcon";
import CreateFileMenu from "./createFileMenu";

interface FileProjects {

    nameProject: string;
    href: string;
    IconProject: ReactNode;
  }

function FileProject(props : FileProjects) {

    const {projectName,changeProjectName} = useStore();

    const listMenuLinkProjecs: Record<
    string,
    { href: string; IconName: ReactNode; nameFile: string }[]
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
        nameFile: "About",
      },
      {
        href: "/apps/adminDashboard/#challenge",
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
          href: "/apps/sneakersCompany/#about",
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

  return (
    <div className="projectAdminDashboard">
      <Link
        onClick={() => {
        //   setActiveLinkproject("adminDashboard")
        changeProjectName(props.nameProject)
        }}
        href={props.href}
      >
        <div className="adminDashboard hover:bg-borderDarck flex items-center gap-2 pl-10 py-[2px]">
         {props.IconProject}
          <p className="text-base">{props.nameProject}</p>
        </div>
      </Link>
      {projectName === props.nameProject && (
        <>
          {Object.entries(listMenuLinkProjecs).map(
            ([project, listMenus], index) =>
                project === props.nameProject &&
              listMenus.map((list, index) => (
                <CreateFileMenu
                  href={list.href}
                  IconName={list.IconName}
                  nameFile={list.nameFile}
                />
              ))
          )}
        </>
      )}
    </div>
  );
}

export default FileProject;
