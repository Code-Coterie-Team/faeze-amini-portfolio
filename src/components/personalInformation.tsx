import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import UserCircleIcon from "./icons/UserCircleIcon";

function PersonalInformation() {
  return (
    <div className="flex flex-col gap-80">
      <div
        id="aboutme"
        className=" myIntroduction pt-[10rem]"
      >
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
          26 yo software engineer with a B.S. in Computer Science and Technology
          with experience in Front-End and Back-End technologies.
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
            <h3 className="text-gray-50 text-lg font-semibold">Faeze Amini</h3>
            <p className="text-base text-textGreen">Front-End Web Developer </p>
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
    </div>
  );
}

export default PersonalInformation;
