import AboutProject from "@/components/aboutProject";
import ChallengeProject from "@/components/challengeProject";
import SolutionProject from "@/components/solutionProject";
import TechnologiesProject from "@/components/technologiesProject";
import React from "react";

interface Technology {
  name: string;
  image: string;
}
const technologies: Technology[] = [
  {
    name: "HTML",
    image: "/Image/html5-logo.webp",
  },
  {
    name: "CSS",
    image: "/Image/csharp-logo.webp",
  },
  {
    name: "ReactJS",
    image: "/Image/react-logo.webp",
  },
  {
    name: "Zustand",
    image: "/Image/zustand.png",
  },
  {
    name: "Recharts",
    image: "/Image/recharts01.png",
  },
  {
    name: "React Router Dom",
    image: "/Image/react-router01.svg",
  },
  {
    name: "typescript",
    image: "/Image/ts-logo.webp",
  },
  {
    name: "tailwindcss",
    image: "/Image/tailwindcss-logo.webp",
  },
  {
    name: "Github",
    image: "/Image/github-logo.webp",
  },
  {
    name: "js",
    image: "/Image/js-logo.webp",
  },
  {
    name: "api",
    image: "/Image/",
  },
  {
    name: "Git",
    image: "/Image/git-logo.webp",
  },
];

function page() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col gap-9">
        <AboutProject
          title="Admin Dashboard"
          description="The management panel enables y"
          industry="Web Store "
          year="2024"
          service="Web application"
          imageSrc="/Image/react-admin-project01.png"
          imageAlt="imageAdminDashboard"
          activeHashProject={"adminDashboard"}
        />
        <ChallengeProject
          descrption="This platform is designed for managing the sales department and user
            management, built using React."
          item01=" Utilization of Recharts: Implements various chart types for quick
              visualization of management metrics and results across different
              sections."
          item02="API Development: Creates APIs for product and user search
              functionalities."
          item03=" State Management with Zustand: Leverages Zustand for efficient
              state management within the application."
              activeHashProject={"adminDashboard"}
        />

        <SolutionProject
          text01={"example...."}
          titleText={"Delete Application (system triggered): "}
          text02={"example02........"}
          activeHashProject={"adminDashboard"}
          href={"/"}
        />
        <TechnologiesProject listTechnologies={technologies}   activeHashProject={"adminDashboard"}/>
      </div>
    </div>
  );
}

export default page;
