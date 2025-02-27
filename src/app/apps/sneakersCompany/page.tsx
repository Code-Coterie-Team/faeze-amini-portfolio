import AboutProject from "@/components/aboutProject";
import ChallengeProject from "@/components/challengeProject";
import SolutionProject from "@/components/solutionProject";
import TechnologiesProject from "@/components/technologiesProject";
import React from "react";

function page() {
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
      name: "react-redux",
      image: "/Image/redux-logo.webp",
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
      name: "Git",
      image: "/Image/git-logo.webp",
    },
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col gap-9">
        <AboutProject
          title={"Sneakers Company"}
          description={
            "This platform is designed to make your shopping experience easier and more enjoyable."
          }
          industry={"Web Store"}
          year={"2024"}
          service={"Web application"}
          imageSrc={"/Image/sneakers-company-project01.png"}
          imageAlt={"imageSneakersCompany"}
          activeHashProject={"sneakersCompany"}
        />

        <ChallengeProject
          descrption={
            " This platform displays all the information related to the product. You can select the quantity of orders and add them to your shopping cart."
          }
          item01=" Implementing Redux for displaying the website in both dark mode
              and light mode."
          item02="Displaying the number of products available in the shopping cart,
              along with options to increase or decrease the quantity of each
              item."
          item03="Showcasing images for each product."
          activeHashProject={"sneakersCompany"}
        />
        <SolutionProject
          text01={"example"}
          titleText={"Delete Application (system triggered)"}
          text02={"example"}
          href={"/"}
          activeHashProject={"sneakersCompany"}
        />

        <TechnologiesProject
          listTechnologies={technologies}
          activeHashProject={"sneakersCompany"}
        />
      </div>
    </div>
  );
}

export default page;
