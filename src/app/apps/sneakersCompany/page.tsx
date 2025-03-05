import AboutProject from "@/components/aboutProject";
import ChallengeProject from "@/components/challengeProject";
import SolutionProject from "@/components/solutionProject";
import TechnologiesProject from "@/components/technologiesProject";
import React from "react";

function page() {
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
            "This platform displays all the information related to the product. You can select the quantity of orders and add them to your shopping cart, built using React."
          }
          item01="Image Selection and Rotation: Allow users to select any product image and rotate through them during the display."
          item02="Modal for Cart Display: Create a modal to show the shopping cart."
          item03="Order Quantity Selection: Enable users to select the quantity of items to order and add them to the cart."
          item04="Remove Selected Product from Cart: Provide functionality to remove a selected product from the cart and reset the order quantity to zero."
          item05="Dark and Light Mode: Implement a toggle for dark and light modes within the platform."
          activeHashProject={"sneakersCompany"}
        />
        <SolutionProject
          text01={
            "- Image Activation with useRef: Utilize the useRef hook to activate the display of each selected product image."
          }
          text02={
            "- Redux for Cart Modal State: Create a variable using Redux to manage the visibility of the cart modal."
          }
          text03={"- Redux for Order Quantity: Establish a variable in Redux to track and display the quantity of items added to the cart."}
          text04={"- Method for Removing Products: Implement a method in Redux to remove products from the cart, effectively resetting the quantity to zero."}
          text05={"- Dark/Light Mode with Redux and Tailwind CSS: Implement dark and light mode functionality using Redux for state management and Tailwind CSS for styling."}
          href={"https://pageproductsneakerweb.netlify.app/"}
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
