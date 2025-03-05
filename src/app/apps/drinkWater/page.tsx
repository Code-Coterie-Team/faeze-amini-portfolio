import AboutProject from "@/components/aboutProject";
import ChallengeProject from "@/components/challengeProject";
import SolutionProject from "@/components/solutionProject";
import TechnologiesProject from "@/components/technologiesProject";
import React from "react";
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
          description="Creating a platform to track your water intake visually."
          industry="Web Store "
          year="2024"
          service="Web application"
          imageSrc="/Image/Drink-Water02.png"
          imageAlt="imgdrinkWater"
          activeHashProject={"drinkWater"}
        />
        <ChallengeProject
          descrption="Creating a platform to track your water intake visually, built using javascript."
          item01="Select any of the small cups (CupSmall) and display the percentage of water filled in the cup."
          item02="Show the amount of empty space in the cup."
          item03="Upon clicking any CupSmall, reduce the amount of water in the cup."
          activeHashProject={"drinkWater"}
        />

        <SolutionProject
          text01={"- Utilize JavaScript to modify the styles dynamically."}
          text02={"- Use classList to highlight the selected CupSmall."}
          text03={
            "- Apply CSS transitions to enhance the visual experience when filling or emptying the cup."
          }
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
