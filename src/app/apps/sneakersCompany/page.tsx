import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import SectionSeparator from "@/components/sectionSeparator";
import Image from "next/image";
import Link from "next/link";
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
        <div
          id="about"
          className="about"
        >
          <div className=" px-4 py-6">
            <div className="flex flex-col justify-center items-center mt-24 gap-4">
              <p className=" text-base font-semibold text-textActive">
                Case Study
              </p>
              <h1 className="text-6xl text-gray-50 font-semibold pt-3 tracking-tight">
                Sneakers Company
              </h1>
              <p className="text-xl max-w-3xl text-center pt-2">
                This platform is designed to make your shopping experience
                easier and more enjoyable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 border border-tGrayAll/30 ">
            <div className="flex flex-col  px-6 py-4 border-r border-r-tGrayAll/30">
              <span className="text-textActive font-semibold">Industry</span>
              <span>Web Store </span>
            </div>
            <div className="flex flex-col px-6 py-4 border-r border-r-tGrayAll/30">
              <span className="text-textActive font-semibold">Year</span>
              <span>2024</span>
            </div>
            <div className="flex flex-col px-6 py-4">
              <span className="text-textActive font-semibold">Service</span>
              <span>Web application</span>
            </div>
          </div>
          <div className="p-24 w-full h-full flex justify-center items-center bg-colotBgProject bg-backgroundImgProject">
            <Image
              className="w-full h-full"
              src={"/Image/sneakers-company-project01.png"}
              alt={"imageSneakersCompany"}
              width={144}
              height={955}
            ></Image>
          </div>
        </div>

        <div
          id="challenge"
          className="challenge px-14 py-6"
        >
          <SectionSeparator />
          <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
            Challenge
          </h1>
          <p className=" text-lg">
            This platform displays all the information related to the product.
            You can select the quantity of orders and add them to your shopping
            cart.
          </p>

          <ul className="pl-10 list-disc ">
            <li className="mt-5 lg:text-lg">
              Implementing Redux for displaying the website in both dark mode
              and light mode.
            </li>
            <li className="mt-5 lg:text-lg">
              Displaying the number of products available in the shopping cart,
              along with options to increase or decrease the quantity of each
              item.
            </li>

            <li className="mt-5 lg:text-lg">
              Showcasing images for each product.
            </li>
          </ul>
        </div>
        <div
          id="solution"
          className="solution px-14 py-6"
        >
          <SectionSeparator />
          <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
            Solution
          </h1>
          <p className="text-lg">..........</p>
          <div className="mt-5">
            <span className="text-lg text-textActive">
              Delete Application (system triggered){" "}
            </span>
            <span>..........</span>
          </div>
          <div className="inline-block mt-8">
            <div className="bg-gray-50 text-gray-950 px-3 py-1 rounded-full hover:opacity-80 flex gap-2">
              <Link href={"/#contactMe"}>Visit website</Link>
              <ArrowRightIcon
                width="24"
                height="24"
              />
            </div>
          </div>
        </div>

        <div
          id="technologies"
          className="technologies  px-14 py-6 mb-48"
        >
          <div>
            <SectionSeparator />
            <h1 className="mt-8 mb-5 font-medium text-4xl text-gray-50 tracking-tight ">
              Technologies
            </h1>
          </div>
          <div className="flex gap-4 mt-6 flex-wrap">
            {technologies.map((technology, index) => (
              <div className="h-[115px] flex flex-col items-center">
                <Image
                  className="w-[64px] h-[64px] "
                  src={technology.image}
                  alt=""
                  width={144}
                  height={144}
                />
                <h4 className="mt-2 px-2 font-medium tracking-tight text-lg text-gray-50 ">
                  {technology.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
