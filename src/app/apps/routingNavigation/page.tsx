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
    name: "Github",
    image: "/Image/github-logo.webp",
  },
  {
    name: "js",
    image: "/Image/js-logo.webp",
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
          title="Routing Navigation"
          description=""
          industry="Web Store "
          year="2024"
          service="Web application"
          imageSrc="/Image/Routing-Navigation01.png"
          imageAlt="imgRoutingNavigation"
          activeHashProject={"routingNavigation"}
        />
        <ChallengeProject
          descrption=""
          item01=" "
          item02=""
          item03=" "
          activeHashProject={"routingNavigation"}
        />

        <SolutionProject
          text01={"example...."}
          titleText={"Delete Application (system triggered): "}
          text02={"example02........"}
          activeHashProject={"routingNavigation"}
          href={"https://routingnavigation.netlify.app/"}
        />
        <TechnologiesProject
          listTechnologies={technologies}
          activeHashProject={"routingNavigation"}
        />
      </div>
    </div>
  );
}

export default page;
