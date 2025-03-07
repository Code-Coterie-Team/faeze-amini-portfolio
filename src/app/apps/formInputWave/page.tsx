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
          title="Form Input Wave"
          description="Logging Page"
          industry="Web Store "
          year="2024"
          service="Web application"
          imageSrc="/Image/Form-Input-Wave01.png"
          imageAlt=""
          activeHashProject={"formInputWave"}
        />
        <ChallengeProject
          descrption="The platform is implemented using JavaScript. The objective is to create an animated label for input fields that behaves as follows:"
          item01="When the input field is focused, the label should animate."
          item02="If the input field is empty and the user clicks anywhere else on the page, the label should return to its initial position."
          item03="If the input field is filled, the label should remain in its animated position.
"
          activeHashProject={"formInputWave"}
        />

        <SolutionProject
          text01={
            "- Define a CSS class for the label and apply it to the input field based on its state (filled or empty). This will ensure that the label animates correctly according to user interactions."
          }
          activeHashProject={"formInputWave"}
          href={"https://form-inputwave.netlify.app/?"}
        />
        <TechnologiesProject
          listTechnologies={technologies}
          activeHashProject={"formInputWave"}
        />
      </div>
    </div>
  );
}

export default page;
