import Link from "next/link";
import React, { ReactNode } from "react";
import { useStore } from "@/store";
import AboutIcon from "./icons/AboutIcon";
import ChallengeIcon from "./icons/ChallengeIcon";
import SolutionIcon from "./icons/SolutionIcon";
import TechnologiesIcon from "./icons/TechnologiesIcon";
import MenuLinkProject from "./menuLinkProject";

interface FileProjects {

    nameProject: string;
    href: string;
    IconProject: ReactNode;
  }

function FileProject(props : FileProjects) {

    const {projectName,changeProjectName} = useStore();

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
                <MenuLinkProject
                  href={list.href}
                  IconName={list.IconName}
                  nameLink={list.nameLink}
                />
              ))
          )}
        </>
      )}
    </div>
  );
}

export default FileProject;
