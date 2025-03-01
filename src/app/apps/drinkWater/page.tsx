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
          title="Drink Water"
          description=""
          industry="Web Store "
          year="2024"
          service="Web application"
          imageSrc="/Image/Drink-Water02.png"
          imageAlt="imgdrinkWater"
          activeHashProject={"drinkWater"}
        />
        <ChallengeProject
          descrption=""
          item01=""
          item02=""
          item03=""
          activeHashProject={"drinkWater"}
        />

        <SolutionProject
          text01={"example...."}
          titleText={"Delete Application (system triggered): "}
          text02={"example02........"}
          activeHashProject={"drinkWater"}
          href={"https://drinkwater-js.netlify.app/"}
        />
        <TechnologiesProject
          listTechnologies={technologies}
          activeHashProject={"drinkWater"}
        />
      </div>
    </div>
  );
}

export default page;
