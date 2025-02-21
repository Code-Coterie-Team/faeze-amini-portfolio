import React from "react";
import Image from "next/image";

interface ItemAboutPaje {
  title: string;
  description: string;
  industry: string;
  year: string;
  service: string;
  imageSrc: string;
  imageAlt: string;
}
function AboutProject({
  title,
  description,
  industry,
  year,
  service,
  imageSrc,
  imageAlt,
}: ItemAboutPaje) {
  return (
    <div id="about" className="about">
      <div className=" px-4 py-6">
        <div className="flex flex-col justify-center items-center mt-24 gap-4">
          <p className=" text-base font-semibold text-textActive">Case Study</p>
          <h1 className="text-6xl text-gray-50 font-semibold pt-3 tracking-tight">
            {title}
          </h1>
          <p className="text-xl max-w-3xl text-center pt-2">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 border border-tGrayAll/30 ">
        <div className="flex flex-col  px-6 py-4 border-r border-r-tGrayAll/30">
          <span className="text-textActive font-semibold">Industry</span>
          <span>{industry} </span>
        </div>
        <div className="flex flex-col px-6 py-4 border-r border-r-tGrayAll/30">
          <span className="text-textActive font-semibold">Year</span>
          <span>{year}</span>
        </div>
        <div className="flex flex-col px-6 py-4">
          <span className="text-textActive font-semibold">Service</span>
          <span>{service}</span>
        </div>
      </div>
      <div className="p-24 w-full h-full flex justify-center items-center bg-colotBgProject bg-backgroundImgProject">
        <Image
          className="w-full h-full"
          src={imageSrc}
          alt={imageAlt}
          width={144}
          height={955}
        ></Image>
      </div>
    </div>
  );
}

export default AboutProject;
