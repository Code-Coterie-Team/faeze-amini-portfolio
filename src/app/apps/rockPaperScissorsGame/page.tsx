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
          title="Rock Paper Scissors Game"
          description="Implementation of Rock-Paper-Scissors Game"
          industry="Web Store "
          year="2024"
          service="Web application"
          imageSrc="/Image/challenges-rock-paper-scissors-game01.png"
          imageAlt="rock-paper-scissors"
          activeHashProject={"rockPaperScissorsGame"}
        />
        <ChallengeProject
          descrption="This project implements the classic game of Rock, Paper, Scissors using JavaScript."
          item01="Random Selection by the System: Implement a feature that allows the system to randomly select a choice in the game."
          item02="Styling for the Winner: Create an appealing style to highlight the winning choice visually."
          item03="Dedicated Section for Game Results: Establish a separate area to clearly display the outcome of each game round."
          item04="Modal Implementation with Animation: Design a modal that appears to show results, complete with engaging animations."
          activeHashProject={"rockPaperScissorsGame"}
        />

        <SolutionProject
          text01={
            "- Utilization of JavaScript Methods: Make use of various JavaScript methods to manage game logic and interactions."
          }
          text02={
            "- Dynamic CSS Styling with JavaScript: Change CSS styles dynamically using JavaScript to enhance user experience and visual feedback."
          }
          activeHashProject={"rockPaperScissorsGame"}
          href={"https://gamerockpaperscissors-js.netlify.app/"}
        />
        <TechnologiesProject
          listTechnologies={technologies}
          activeHashProject={"rockPaperScissorsGame"}
        />
      </div>
    </div>
  );
}

export default page;
