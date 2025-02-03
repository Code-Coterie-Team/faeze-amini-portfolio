"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import OpenChangeIcon from "./icons/OpenChangeIcon";
import Layout10Icon from "./icons/Layout10Icon";
import MenuCircleVerticalIcon from "./icons/MenuCircleVerticalIcon";
import StarIcon from "./icons/StarIcon";
import RemoveIcon from "./icons/RemoveIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import UserCircleIcon from "./icons/UserCircleIcon";
import BriefcaseIcon from "./icons/BriefcaseIcon";
import OpenBookIcon from "./icons/OpenBookIcon";
import PackageBox from "./icons/PackageBox";
import Image from "next/image";
import MailIcon from "./icons/MailIcom";

function AboutMe() {
  const [colorChange, setColorChange] = useState("rgb(255,255,255)");
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isInputChangeName, setInputChangeName] = useState(false);

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isInputChangeEmail, setInputChangeEmail] = useState(false);

  const [isFocusedCompany, setIsFocusedCompany] = useState(false);
  const [isInputChangeCompany, setInputChangeCompany] = useState(false);

  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  const [isInputChangeMessage, setInputChangeMessage] = useState(false);

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setColorChange(randomColor);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeName(false);
    } else if (event.target.value != null) {
      setInputChangeName(true);
    }
  }
  function handleChangeName(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeEmail(false);
    } else if (event.target.value != null) {
      setInputChangeEmail(true);
    }
  }
  function handleChangeCompany(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeCompany(false);
    } else if (event.target.value != null) {
      setInputChangeCompany(true);
    }
  }
  function handleChangeMessage(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeMessage(false);
    } else if (event.target.value != null) {
      setInputChangeMessage(true);
    }
  }
  return (
    <div className="">
      <div className="headerMain flex items-center border-borderDarck border-b-2">
        <div className="title flex items-center gap-2 text-textActive border-r-borderDarck border-b-blue-600 border-r-2 border-b-2 p-2">
          <StarIcon
            width="18"
            height="18"
          />

          <p className="text-base">About Me</p>
          <button className="p-1 hover:bg-gray-500/30 rounded-md">
            <RemoveIcon
              width="16"
              height="16"
            />
          </button>
        </div>
        <div className="title flex items-center gap-2 border-r-borderDarck border-b-blue-600 border-r-2 p-2">
          <StarIcon
            width="18"
            height="18"
          />

          <p className="text-base">Work</p>
          <button className="p-1 hover:bg-gray-500/30 rounded-md">
            <RemoveIcon
              width="16"
              height="16"
            />
          </button>
        </div>
        <div className="flex-1"></div>
        <div className="flex px-4">
          <button className="p-1 hover:bg-gray-500/30 rounded-md">
            <OpenChangeIcon
              className=""
              width="18"
              height="18"
            />
          </button>
          <button className="p-1 hover:bg-gray-500/30 rounded-md">
            <Layout10Icon
              width="18"
              height="18"
            />
          </button>
          <button className="p-1 hover:bg-gray-500/30 rounded-md">
            <MenuCircleVerticalIcon
              width="18"
              height="18"
            />
          </button>
        </div>
      </div>
      <div className="px-12 flex flex-col gap-80">
        <div className="myIntroduction pt-[10rem]">
          <div className="flex items-center">
            <h1 className="text-5xl text-nowrap font-medium text-gray-50">
              Faeze Amini
            </h1>
            <span className="text-5xl animate-rotate">&#128075;</span>
          </div>
          <div className="flex pt-3 pb-1 gap-1 items-center text-base">
            <p className="text-gray-50">Looking for a job</p>
            <span className="text-red-600 ">&#9679;</span>
            <p className="text-textActive">/ Web Front-End</p>
          </div>
          <p className="max-w-3xl text-base text-gray-50">
            26 yo software engineer with a B.S. in Computer Science and
            Technology with experience in Front-End and Back-End technologies.
          </p>
          <div className="pt-5 flex items-center gap-4">
            <a
              className="text-gray-50 hover:opacity-80"
              target="_blank"
              href="https://tailwindcss.com/docs/font-size"
            >
              <LinkedinIcon
                width="24"
                height="24"
              />
            </a>
            <a
              className="text-gray-50 hover:opacity-80"
              target="_blank"
              href=""
            >
              <GithubIcon
                width="24"
                height="24"
              />
            </a>
            <div className="bg-gray-50 text-gray-950 px-3 py-1 rounded-full hover:opacity-80 flex gap-2">
              <a href="">Contact Me</a>
              <ArrowRightIcon
                width="24"
                height="24"
              />
            </div>
          </div>
        </div>

        <div className="aboutMe">
          <div className="sectionSeparator flex gap-2">
            <div className="w-6 border-t-2 border-gray-50 "></div>
            <div className="w-full border-t-2 border-tGrayAll/30 "></div>
          </div>
          <div className="flex pt-12 items-center">
            <div className="text-gray-50">
              <UserCircleIcon
                width="28"
                height="28"
              />
            </div>
            <p className="text-gray-50 text-2xl pl-7">About Me</p>
          </div>
          <div className="max-w-3xl text-5xl pt-9">
            <span className="text-gray-50">I'm a </span>
            <span className="text-textGreen">software developer</span>
            <span className="text-gray-50"> specialized on </span>
            <span className="text-textGreen">Web Applications</span>
          </div>
          <div className="pt-24  flex justify-between">
            <div className="max-w-xl">
              <h3 className="text-gray-50 text-lg font-semibold">
                Faeze Amini
              </h3>
              <p className="text-base text-textGreen">
                Front-End Web Developer{" "}
              </p>
              <p className="text-lg pt-4">
                I'm an experienced software engineer who constantly seeks out
                innovative solutions to everyday problems.
              </p>
              <p className="text-lg pt-4">
                After 4 years in this industry I have worked with multiple
                front-end and back-end technologies.
              </p>
            </div>
            <div className="bg-blue-500 w-[208px] h-[208px] rounded-full">
              <img
                src="/public/image/imgFaeze.JPG"
                alt=""
              />
            </div>
          </div>
          <div className="pt-16 flex gap-5 w-full justify-between">
            <div className="">
              <h4 className="text-textGreen text-base border-b  pb-1">
                | Languages
              </h4>
              <div className="flex gap-2 font-bold text-lg py-2 border-b border-t border-tGrayAll/30 ">
                <p className=" text-gray-50">English</p>
                <span>-</span>
                <p>Average</p>
              </div>
              <div className="pt-5 flex items-center gap-4">
                <a
                  className="text-gray-50 hover:opacity-80"
                  target="_blank"
                  href="https://tailwindcss.com/docs/font-size"
                >
                  <LinkedinIcon
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  className="text-gray-50 hover:opacity-80"
                  target="_blank"
                  href=""
                >
                  <GithubIcon
                    width="24"
                    height="24"
                  />
                </a>
                <div className="bg-gray-50 text-gray-950 px-3 py-1 rounded-full hover:opacity-80 flex gap-2">
                  <a href="">Contact Me</a>
                  <ArrowRightIcon
                    width="24"
                    height="24"
                  />
                </div>
              </div>
            </div>
            <div className="lg:p-12 p-6 flex border gap-8 border-tGrayAll/30 rounded-2xl">
              <div className="w-[144px] h-[144px] rounded-2xl bg-purple-600">
                <img
                  src="/"
                  alt=""
                />
              </div>
              <div className="max-w-xl">
                <h3 className="text-lg text-gray-50 font-semibold">
                  B.S. in Computer Science and Technology
                </h3>
                <p className="text-base text-textGreen">
                  Instituto Tecnologico de Monterrey
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="workExperience">
          <div className="sectionSeparator flex gap-2">
            <div className="w-6 border-t-2 border-gray-50 "></div>
            <div className="w-full border-t-2 border-tGrayAll/30 "></div>
          </div>
          <div className="flex pt-12 items-center">
            <div className="text-gray-50 w-[28px] h-[28px]">
              <BriefcaseIcon className="" />
            </div>
            <p className="text-gray-50 text-2xl pl-7 ">Work Experience</p>
          </div>
          <div className="max-w-3xl text-5xl pt-9">
            <span className="text-textLightRed">Semi-Senior Engineer </span>
            <span className="text-gray-50">with </span>
            <span className="text-textLightRed">4 years </span>
            <span className="text-gray-50">
              of experience in the software industry
            </span>
          </div>
          <div className="border-l mt-24 border-l-tGrayAll/30 pl-2">
            <div className="flex ">
              <div>
                <div>
                  <span className="px-4 font-semibold text-gray-50">
                    Dic 2023 - Present
                  </span>
                </div>
                <div className="w-[96px] h-[96px] m-20">
                  <Image
                    src="/Image/westondev.webp"
                    alt=""
                    width={96}
                    height={96}
                  />
                </div>
              </div>
              <div>
                <p className="text-textLightRed text-lg font-semibold mb-4">
                  WestonDev | Full Stack Developer.
                </p>
                <ul className="list-disc pl-10 text-base pb-8">
                  <li className="py-1">
                    Developed front-end user interface using React, React Native
                    and JavaScript for Web Apps, iOS and Android mobile
                    applications.
                  </li>
                  <li className="py-1">
                    Developed and maintained React Native components, screens,
                    and features for the mobile app using TDD practices.
                  </li>
                  <li className="py-1">
                    Collaborated with other developers to implement new features
                    in a way that is consistent with existing codebase
                    conventions.
                  </li>
                </ul>
                <div className="sectionSeparator flex gap-2">
                  <div className="w-6 border-t-2 border-gray-50 "></div>
                  <div className="w-full border-t-2 border-tGrayAll/30 "></div>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div>
                <div>
                  <span className="px-4 font-semibold text-gray-50">
                    Dic 2023 - Present
                  </span>
                </div>
                <div className="w-[96px] h-[96px] m-20">
                  <Image
                    src="/Image/zenith.webp"
                    alt=""
                    width={96}
                    height={96}
                  />
                </div>
              </div>
              <div>
                <p className="text-textLightRed text-lg font-semibold mb-4">
                  WestonDev | Full Stack Developer.
                </p>
                <ul className="list-disc pl-10 text-base pb-8">
                  <li className="py-1">
                    Developed front-end user interface using React, React Native
                    and JavaScript for Web Apps, iOS and Android mobile
                    applications.
                  </li>
                  <li className="py-1">
                    Developed and maintained React Native components, screens,
                    and features for the mobile app using TDD practices.
                  </li>
                  <li className="py-1">
                    Collaborated with other developers to implement new features
                    in a way that is consistent with existing codebase
                    conventions.
                  </li>
                </ul>
                <div className="sectionSeparator flex gap-2">
                  <div className="w-6 border-t-2 border-gray-50 "></div>
                  <div className="w-full border-t-2 border-tGrayAll/30 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="sectionSeparator flex gap-2">
            <div className="w-6 border-t-2 border-gray-50 "></div>
            <div className="w-full border-t-2 border-tGrayAll/30 "></div>
          </div>
          <div className="flex pt-12 items-center">
            <div className="text-gray-50">
              <OpenBookIcon
                width="28"
                height="28"
              />
            </div>
            <p className="text-gray-50 text-2xl pl-7">Skills</p>
          </div>
          <div className="max-w-3xl text-5xl pt-9">
            <span className="text-textPurpLeLight">Full Stack </span>
            <span className="text-gray-50">
              software developer with experience in{" "}
            </span>
            <span className="text-textPurpLeLight">Front-End</span>
            <span className="text-gray-50">and</span>
            <span className="text-textPurpLeLight">Back-End</span>
            <span className="text-gray-50">technologies</span>
          </div>
          <div className="programmingSkills flex mt-20 gap-8">
            <div className="rounded-full w-[335px] h-[335px] border-4 border-black shadow-styleShadowCircle place-self-center relative">
              <div
                className="rounded-full w-[325px] h-[325px] "
                style={{ background: colorChange }}
              >
                <div className="grid grid-cols-2 gap-2 absolute top-[2.4rem] left-[2.3rem] rotate-45">
                  <button className="w-[122px] h-[122px] bg-black rounded-tl-full rounded-[500px] flex items-center justify-center">
                    <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                      Languages
                    </p>
                  </button>
                  <button className="w-[122px] h-[122px] bg-black rounded-tr-full rounded-[500px] flex items-center justify-center">
                    <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                      Front
                    </p>
                  </button>
                  <button className="w-[122px] h-[122px] bg-black rounded-bl-full rounded-[500px] flex items-center justify-center">
                    <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                      Tools
                    </p>
                  </button>
                  <button className="w-[122px] h-[122px] bg-black  rounded-br-full rounded-[500px] flex items-center justify-center">
                    <p className="-rotate-45 text-3xl text-gray-50 font-semibold border-b-2 border-blue-500">
                      Back
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-gray-50">
                Programming Languages
              </h2>
              <div className="flex gap-8 pt-8">
                <div className="h-[115px] flex flex-col items-center">
                  <img
                    className="w-[64px] h-[64px] bg-black"
                    src="/"
                    alt=""
                  />
                  <h3 className="bg-gray-50 text-blue-500 mt-2 rounded-full px-2">
                    Node.js
                  </h3>
                </div>
                <div className="h-[115px] flex flex-col items-center">
                  <img
                    className="w-[64px] h-[64px] bg-black"
                    src="/"
                    alt=""
                  />
                  <h3 className="bg-gray-50 text-blue-500 mt-2 rounded-full px-2">
                    javaScript
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="myWork">
          <div className="sectionSeparator flex gap-2">
            <div className="w-6 border-t-2 border-gray-50 "></div>
            <div className="w-full border-t-2 border-tGrayAll/30 "></div>
          </div>
          <div className="flex pt-12 items-center">
            <div className="text-gray-50">
              <PackageBox
                width="28"
                height="28"
              />
            </div>
            <p className="text-gray-50 text-2xl pl-7">My Work</p>
          </div>
          <div className="max-w-3xl text-5xl pt-9 mb-24">
            <span className="text-gray-50">Some of </span>
            <span className="text-textYelowLight">my work </span>
            <span className="text-gray-50">as a full stack </span>
            <span className="text-textYelowLight">web </span>
            <span className="text-gray-50">developer</span>
          </div>
          <div className="workChildren flex flex-col gap-6">
            <div className="item flex gap-8 items-center border border-tGrayAll/30 rounded-2xl shadow">
              <div className="w-1/2 p-12 pb-5">
                <h3 className="text-3xl text-gray-50">
                  saas platform that enables realtors to deploy a professional
                  website in minutes.
                </h3>

                <a
                  className="flex items-center mt-7"
                  href="#"
                >
                  <span className="text-3xl text-gray-50">Learn More</span>
                  <ArrowRightIcon
                    width="24"
                    height="24"
                  />
                </a>
              </div>
              <div className="h-full w-1/2 bg-black rounded-2xl ">
                <img
                  className=""
                  src="/"
                  alt=""
                />
              </div>
            </div>
            <div className="item flex gap-10 items-center border border-tGrayAll/30 rounded-2xl shadow">
              <div className="w-1/2 p-12 pb-5">
                <h3 className="text-3xl text-gray-50">
                  saas platform that enables realtors to deploy a professional
                  website in minutes.
                </h3>

                <a
                  className="flex items-center mt-7"
                  href="#"
                >
                  <span className="text-3xl text-gray-50">Learn More</span>
                  <div className="w-[24px] h-[24px]">
                    <ArrowRightIcon
                      width="24"
                      height="24"
                    />
                  </div>
                </a>
              </div>
              <div className="h-full w-1/2 bg-purple-700 rounded-2xl ">
                <img
                  className="bg-purple-700 h-full w-full"
                  src="/"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="contactMe">
          <div className="sectionSeparator flex gap-2">
            <div className="w-6 border-t-2 border-gray-50 "></div>
            <div className="w-full border-t-2 border-tGrayAll/30 "></div>
          </div>
          <div className="flex pt-12 items-center">
            <div className="text-gray-50">
              <MailIcon
                width="28"
                height="28"
              />
            </div>
            <p className="text-gray-50 text-2xl pl-7">Contact Me</p>
          </div>
          <div className="max-w-3xl text-5xl pt-9 mb-10">
            <span className="text-gray-50">
              Get in contact and let's work together{" "}
            </span>
          </div>
          <div className="listContact  rounded-3xl py-16">
            <div className="flex flex-col relative">
              <label
                className={`absolute text-base  pl-6 ${
                  isFocusedName
                    ? "top-3 text-colorInputB"
                    : "top-1/3 text-gray-50 "
                }`}
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 rounded-t-3xl 
                focus:outline-none focus:border-colorInputB focus:border-2"
                id="name"
                type="text"
                onChange={() => {
                  handleChangeName;
                }}
                onFocus={() => setIsFocusedName(true)}
                onBlur={() => {
                  if (isInputChangeEmail) {
                    setIsFocusedName(true);
                  } else {
                    setIsFocusedName(false);
                  }
                }}
              />
            </div>
            <div className="flex flex-col relative">
              <label
                className={`absolute text-gray-50 text-base  pl-6 ${
                  isFocusedEmail
                    ? "top-3 text-colorInputB"
                    : "top-1/3 text-gray-50 "
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
                focus:outline-none focus:border-colorInputB focus:border-2"
                type="text"
                onChange={() => {
                  handleChangeEmail;
                }}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => {
                  if (isInputChangeName) {
                    setIsFocusedEmail(true);
                  } else {
                    setIsFocusedEmail(false);
                  }
                }}
              />
            </div>
            <div className="flex flex-col relative">
              <label
                className={`absolute text-gray-50 text-base  pl-6 ${
                  isFocusedCompany
                    ? "top-3 text-colorInputB"
                    : "top-1/3 text-gray-50 "
                }`}
                htmlFor="company"
              >
                Company
              </label>
              <input
                id="company"
                className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
                focus:outline-none focus:border-colorInputB focus:border-2"
                type="text"
                onChange={() => {
                  handleChangeCompany;
                }}
                onFocus={() => setIsFocusedCompany(true)}
                onBlur={() => {
                  if (isInputChangeName) {
                    setIsFocusedCompany(true);
                  } else {
                    setIsFocusedCompany(false);
                  }
                }}
              />
            </div>
            <div className="flex flex-col relative">
              <label
                className={`absolute text-gray-50 text-base  pl-6 ${
                  isFocusedMessage
                    ? "top-3 text-colorInputB"
                    : "top-1/3 text-gray-50 "
                }`}
                htmlFor="message"
              >
                Message
              </label>
              <input
               id="message"
               className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
               focus:outline-none focus:border-colorInputB focus:border-2 rounded-b-3xl"
               type="text"
               onChange={() => {
                 handleChangeMessage;
               }}
               onFocus={() => setIsFocusedMessage(true)}
               onBlur={() => {
                 if (isInputChangeName) {
                   setIsFocusedMessage(true);
                 } else {
                   setIsFocusedMessage(false);
                 }
               }}
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-gray-50 text-black rounded-full px-3 py-1 mt-6">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
