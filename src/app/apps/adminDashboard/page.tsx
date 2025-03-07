import AboutProject from "@/components/aboutProject";
import ChallengeProject from "@/components/challengeProject";
import SolutionProject from "@/components/solutionProject";
import TechnologiesProject from "@/components/technologiesProject";
import React from "react";

const technologies: ITechnology[] = [
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
          description="The management panel enables you to efficiently manage the products section with ease."
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
          item01="Create various charts using different datasets."
          item02="Implement product creation and search functionality based on product names."
          item03="Display users based on their active or inactive status and user search based on names."
          item04="Generate user profile images using the first letter of the user's name."
          item05="Add a toggle button in the settings section."
          item06="Implement functionality for opening and closing the sidebar."
          activeHashProject={"adminDashboard"}
        />

        <SolutionProject
          text01={"- Utilize Recharts for creating dynamic charts."}
          text02={
            "- Develop a shared component for common charts and pass arrays as props to the chart components."
          }
          text03={"- Use MockAPI to create diverse users and products."}
          text04={
            "- Implement API calls for filtering and searching products and users by name."
          }
          text05={
            "- Leverage Zustand for managing the opening and closing of the sidebar."
          }
          text06={
            "- Create a toggle button that adjusts based on the useState value and changes the background accordingly."
          }
          activeHashProject={"adminDashboard"}
          href={"https://adminpanelprojectweb.netlify.app/"}
        />
        <TechnologiesProject
          listTechnologies={technologies}
          activeHashProject={"adminDashboard"}
        />
      </div>
    </div>
  );
}

export default page;
