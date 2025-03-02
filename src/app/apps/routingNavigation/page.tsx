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
          description="This platform features a rotating menu and page display."
          industry="Web Store "
          year="2024"
          service="Web application"
          imageSrc="/Image/Routing-Navigation01.png"
          imageAlt="imgRoutingNavigation"
          activeHashProject={"routingNavigation"}
        />
        <ChallengeProject
          descrption="The rotating menu is implemented using JavaScript."
          item01="allowing for simultaneous rotation of the page and the menu, along with dynamic icon changes."
          activeHashProject={"routingNavigation"}
        />

        <SolutionProject
          text01={"- To enhance the user experience, we will add animations to the menu by defining CSS classes and applying them to the elements using JavaScript. This approach will ensure smooth transitions and visually appealing effects."}
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
