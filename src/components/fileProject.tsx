import Link from "next/link";
import React, { ReactNode } from "react";
import { useStore } from "@/store";
import AboutIcon from "./icons/AboutIcon";
import ChallengeIcon from "./icons/ChallengeIcon";
import SolutionIcon from "./icons/SolutionIcon";
import TechnologiesIcon from "./icons/TechnologiesIcon";
import CreateFileMenu from "./createFileMenu";



function FileProject(props: FileProjects) {
  const { projectName, changeProjectName } = useStore();

  const listMenuLinkProjecs: Record<
    string,
    { href: string; IconName: ReactNode; nameFile: string; hrefPage: string }[]
  > = {
    adminDashboard: [
      {
        href: "/apps/adminDashboard/#about",
        IconName: <AboutIcon width="18" height="18" />,
        nameFile: "About",
        hrefPage: "/apps/adminDashboard",
      },
      {
        href: "/apps/adminDashboard/#challenge",
        IconName: <ChallengeIcon width="18" height="18" />,
        nameFile: "Challenge",
        hrefPage: "/apps/adminDashboard",
      },
      {
        href: "/apps/adminDashboard/#solution",
        IconName: <SolutionIcon width="18" height="18" />,
        nameFile: "SolutionIcon",
        hrefPage: "/apps/adminDashboard",
      },
      {
        href: "/apps/adminDashboard/#technologies",
        IconName: <TechnologiesIcon width="18" height="18" />,
        nameFile: "Technologies",
        hrefPage: "/apps/adminDashboard",
      },
    ],
    sneakersCompany: [
      {
        href: "/apps/sneakersCompany/#about",
        IconName: <AboutIcon width="18" height="18" />,
        nameFile: "About",
        hrefPage: "/apps/sneakersCompany",
      },
      {
        href: "/apps/sneakersCompany/#challenge",
        IconName: <ChallengeIcon width="18" height="18" />,
        nameFile: "Challenge",
        hrefPage: "/apps/sneakersCompany",
      },
      {
        href: "/apps/sneakersCompany/#solution",
        IconName: <SolutionIcon width="18" height="18" />,
        nameFile: "SolutionIcon",
        hrefPage: "/apps/sneakersCompany",
      },
      {
        href: "/apps/sneakersCompany/#technologies",
        IconName: <TechnologiesIcon width="18" height="18" />,
        nameFile: "Technologies",
        hrefPage: "/apps/sneakersCompany",
      },
    ],
    rockPaperScissorsGame: [
      {
        href: "/apps/sneakersCompany/#about",
        IconName: <AboutIcon width="18" height="18" />,
        nameFile: "About",
        hrefPage: "/apps/sneakersCompany",
      },
      {
        href: "/apps/sneakersCompany/#challenge",
        IconName: <ChallengeIcon width="18" height="18" />,
        nameFile: "Challenge",
        hrefPage: "/apps/sneakersCompany",
      },
      {
        href: "/apps/sneakersCompany/#solution",
        IconName: <SolutionIcon width="18" height="18" />,
        nameFile: "SolutionIcon",
        hrefPage: "/apps/sneakersCompany",
      },
      {
        href: "/apps/sneakersCompany/#technologies",
        IconName: <TechnologiesIcon width="18" height="18" />,
        nameFile: "Technologies",
        hrefPage: "/apps/sneakersCompany",
      },
    ],
  };

  return (
    <div className="projectAdminDashboard">
      <Link
        onClick={() => {
          changeProjectName(props.nameProject);
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
            ([project, listMenus],index) =>
              project === props.nameProject &&
                <CreateFileMenu key={index} listFileMenu={listMenus}                  
                />
          )}
        </>
      )}
    </div>
  );
}

export default FileProject;
