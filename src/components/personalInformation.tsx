"use client";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import UserCircleIcon from "./icons/UserCircleIcon";
import Link from "next/link";
import Image from "next/image";
import SectionSeparator from "./sectionSeparator";
import { motion, useInView } from "framer-motion";
import { useStore } from "@/store";

function PersonalInformation() {
  const { changeActiveHash } = useStore();

  return (
    <div className="flex flex-col gap-80 relative">
      <motion.div
        id="aboutme"
        className=" myIntroduction pt-[10rem]"
        onViewportEnter={() => changeActiveHash("/#aboutme")}
      >
        <motion.div
         
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center text-5xl">
            <h1 className=" text-nowrap font-medium text-gray-50">
              Faeze Amini
            </h1>
            <span className="animate-rotateAnimation">&#128075;</span>
          </div>
          <div className="flex pt-3 pb-1 gap-1 items-center text-base">
            <p className="text-gray-50">Looking for a job</p>
            <span className="text-red-600 ">&#9679;</span>
            <p className="text-textActive">/ Web Front-End</p>
          </div>
          <p className="max-w-3xl text-base text-gray-50">
            I am a frontend developer with a passion for creating dynamic and
            user-friendly interfaces. Recently, I have been working on a variety
            of projects, constantly enhancing my skills and delivering diverse
            solutions. My focus is on responsive design, performance
            optimization, and utilizing the latest technologies to ensure
            seamless user experiences.
          </p>
        </motion.div>

        <div className="pt-5 flex items-center gap-4">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              className="text-gray-50 hover:opacity-80"
              href={"https://www.linkedin.com/"}
              target="_blank"
            >
              <LinkedinIcon
                width="24"
                height="24"
              />
            </Link>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              className="text-gray-50 hover:opacity-80"
              href={"https://github.com/faeze-amn"}
              target="_blank"
            >
              <GithubIcon
                width="24"
                height="24"
              />
            </Link>
          </motion.div>

          <motion.div
            className="bg-gray-50 text-gray-950 px-3 py-1 rounded-full hover:opacity-80 flex gap-2"
            whileInView={{ y: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href={"/#contactMe"}>Contact Me</Link>
            <ArrowRightIcon
              width="24"
              height="24"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="aboutMe">
        <SectionSeparator />
        <div className="flex pt-12 items-center">
          <div className="text-gray-50">
            <UserCircleIcon
              width="28"
              height="28"
            />
          </div>
          <motion.p
            className="text-gray-50 text-2xl pl-7"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Me
          </motion.p>
        </div>
        <motion.div
          className="max-w-3xl text-5xl pt-9"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-gray-50">I&apos;m a </span>
          <span className="text-textGreen">software developer</span>
          <span className="text-gray-50"> specialized on </span>
          <span className="text-textGreen">Web Applications</span>
        </motion.div>
        <div className="pt-24 flex flex-col gap-8 lg:flex-row justify-between">
          <motion.div
            className="max-w-xl"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-gray-50 text-lg font-semibold">Faeze Amini</h3>
            <p className="text-base text-textGreen">Front-End Web Developer </p>
            <p className="text-lg pt-4">
              I am a passionate frontend developer focused on continuous
              learning and delivering high-quality, user-centered solutions.
            </p>
          </motion.div>
          <motion.div
            className="bg-blue-500 rounded-full w-[208px] h-[208px] flex items-center mx-auto"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              className="rounded-full w-[208px] h-[208px]"
              src="/Image/faezeImage.jpg"
              alt=""
              width={208}
              height={208}
            />
          </motion.div>
        </div>
        <div className="pt-16 flex lg:flex-row flex-col gap-5 w-full ">
          <div className="lg:mx-auto">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-textGreen text-base border-b  pb-1">
                | Languages
              </h4>
              <div className="flex gap-2 font-bold text-lg py-2 border-b border-t border-tGrayAll/30 ">
                <p className=" text-gray-50">English</p>
                <span>-</span>
                <p>Average</p>
              </div>
            </motion.div>

            <div className="pt-5 flex items-center gap-4">
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  className="text-gray-50 hover:opacity-80"
                  target="_blank"
                  href="https://tailwindcss.com/docs/font-size"
                >
                  <LinkedinIcon
                    width="24"
                    height="24"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  className="text-gray-50 hover:opacity-80"
                  target="_blank"
                  href={"https://github.com/faeze-amn"}
                >
                  <GithubIcon
                    width="24"
                    height="24"
                  />
                </Link>
              </motion.div>

              <motion.div
                className="bg-gray-50 text-gray-950 px-3 py-1 rounded-full hover:opacity-80 flex gap-2"
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link href={"/#contactMe"}>Contact Me</Link>
                <ArrowRightIcon
                  width="24"
                  height="24"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            className="mx-auto lg:p-12 p-6 flex lg:flex-row flex-col border gap-8 border-tGrayAll/30 rounded-2xl"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-[144px] h-[144px] rounded-2xl bg-gray-50 mx-auto">
              <Image
                className="rounded-2xl w-[144px] h-[144px]"
                src="/Image/IAUN_logo.png"
                alt=""
                width={144}
                height={144}
              />
            </div>
            <div className="max-w-xl">
              <h3 className="text-lg text-gray-50 font-semibold">
                B.S. in Computer Science and Technology
              </h3>
              <p className="text-base text-textGreen">
                Islamic Azad University Najafabad
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center absolute top-[35%] left-1/2">
        {[...Array(3)].map((_, index) => (
          <motion.span
            key={index}
            className="size-4 border-white border-r-2 border-b-2"
            animate={{
              rotate: [45, 45, 45],
              y: [-15, 0, 15],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay:index*0.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

    </div>
  );
}

export default PersonalInformation;
