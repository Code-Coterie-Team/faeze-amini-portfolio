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

function SrcFolder() {
  const [isSrc, setIsSrc] = useState(false);
  const [isFolderMyWork, setIsFolderMyWork] = useState(false);
  const [activeLinkproject, setActiveLinkproject] = useState("adminDashboard");

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
  };

  return (
    <div className="src ">
      <div className="pl-4 pr-1">
        <button
          onClick={() => {
            setIsSrc(!isSrc);
            setIsFolderMyWork(true);
            // setIsAdminDashboardProject(true);
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
              className="flex gap-1 items-center py-[2px]"
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
                <div className="projectAdminDashboard">
                  <Link
                    onClick={() => {
                      setActiveLinkproject("adminDashboard");
                    }}
                    href="/apps/adminDashboard"
                  >
                    <div className="adminDashboard hover:bg-borderDarck flex items-center gap-2 pl-10 py-[2px]">
                      <ReactJsIcon
                        width="18"
                        height="18"
                      />
                      <p className="text-base">Admin Dashboard</p>
                    </div>
                  </Link>
                  {activeLinkproject === "adminDashboard" && (
                    <>
                      {Object.entries(listMenuLinkProjecs).map(
                        ([nameProject, listMenus], index) =>
                          nameProject === "adminDashboard" &&
                          listMenus.map((list, index) => (
                            <MenuLinkProject
                              href={list.href}
                              IconName={list.IconName}
                              nameLink={list.nameLink}
                            />
                          ))
                      )}
                      {/* <Link href="/apps/adminDashboard/#about">
                          <div className="aboutProject hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
                            <AboutIcon
                              width="18"
                              height="18"
                            />
                            <p className="text-base">About</p>
                          </div>
                        </Link> */}
                    </>
                  )}
                </div>
                <div className="projectSneakersCompany">
                  <Link
                    onClick={() => {
                      setActiveLinkproject("sneakersCompany");
                    }}
                    href="/apps/sneakersCompany"
                  >
                    <div className="sneakersCompany hover:bg-borderDarck flex items-center gap-2 pl-10 py-[2px]">
                      <ReactJsIcon
                        width="18"
                        height="18"
                      />
                      <p className="text-base">Sneakers Company</p>
                    </div>
                  </Link>
                  {activeLinkproject === "sneakersCompany" && (
                    <>
                      {Object.entries(listMenuLinkProjecs).map(
                        ([nameProject, listMenus], index) =>
                          nameProject === "sneakersCompany" &&
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
