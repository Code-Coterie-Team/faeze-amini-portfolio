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
import JavascriptIcon from "./icons/JavascriptIcon";

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
			nameFile: "Solution",
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
			nameFile: "Solution",
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
			nameFile: "Solution",
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
	drinkWater: [
		{
			href: "/apps/drinkWater/#about",
			hrefPage: "/apps/drinkWater",
			IconName: (
				<AboutIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "About",
		},
		{
			href: "/apps/drinkWater/#challenge",
			hrefPage: "/apps/drinkWater",
			IconName: (
				<ChallengeIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Challenge",
		},
		{
			href: "/apps/drinkWater/#solution",
			hrefPage: "/apps/drinkWater",
			IconName: (
				<SolutionIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Solution",
		},
		{
			href: "/apps/drinkWater/#technologies",
			hrefPage: "/apps/drinkWater",
			IconName: (
				<TechnologiesIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Technologies",
		},
	],
	routingNavigation: [
		{
			href: "/apps/routingNavigation/#about",
			hrefPage: "/apps/routingNavigation",
			IconName: (
				<AboutIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "About",
		},
		{
			href: "/apps/routingNavigation/#challenge",
			hrefPage: "/apps/routingNavigation",
			IconName: (
				<ChallengeIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Challenge",
		},
		{
			href: "/apps/routingNavigation/#solution",
			hrefPage: "/apps/routingNavigation",
			IconName: (
				<SolutionIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Solution",
		},
		{
			href: "/apps/routingNavigation/#technologies",
			hrefPage: "/apps/routingNavigation",
			IconName: (
				<TechnologiesIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Technologies",
		},
	],
	formInputWave: [
		{
			href: "/apps/formInputWave/#about",
			hrefPage: "/apps/formInputWave",
			IconName: (
				<AboutIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "About",
		},
		{
			href: "/apps/formInputWave/#challenge",
			hrefPage: "/apps/formInputWave",
			IconName: (
				<ChallengeIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Challenge",
		},
		{
			href: "/apps/formInputWave/#solution",
			hrefPage: "/apps/formInputWave",
			IconName: (
				<SolutionIcon
					width="18"
					height="18"
				/>
			),
			nameFile: "Solution",
		},
		{
			href: "/apps/formInputWave/#technologies",
			hrefPage: "/apps/formInputWave",
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

const iconProject = [
	<ReactJsIcon key="react-1" width="18" height="18" />,
	<ReactJsIcon key="react-2" width="18" height="18" />,
	<JavascriptIcon key="js-1" width="16" height="16" />,
	<JavascriptIcon key="js-2" width="16" height="16" />,
	<JavascriptIcon key="js-3" width="16" height="16" />,
	<JavascriptIcon key="js-4" width="16" height="16" />,
];


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
												<div className="hover:bg-borderDarck flex items-center gap-2 pl-14 py-[2px]">
													{iconProject[index]}
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
