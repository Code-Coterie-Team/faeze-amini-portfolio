import React from "react";
import FileNextIcon from "./icons/FileNextIcon";
import FileNodeModulesIcon from "./icons/FileNodeModulesIcon";
import EslintrcIcon from "./icons/EslintrcIcon";
import GitignoreIcon from "./icons/GitignoreIcon";
import NextConfigIcon from "./icons/NextConfigIcon";
import PackageIcon from "./icons/PackageIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TsconfigIcon from "./icons/TsconfigIcon";
import PakageFile from "./pakageFile";
import PakageFolder from "./pakageFolder";
import PublicFolder from "./publicFolder";
import SrcFolder from "./srcFolder";
import { ICreateSection } from "@/types/types";

function ItemPortfolio() {
  const listPakageFile: ICreateSection[] = [
    {
      sectionIcon: (
        <EslintrcIcon
          width="18"
          height="18"
        />
      ),
      sectionName: ".eslintrc.json",
    },
    {
      sectionIcon: (
        <GitignoreIcon
          width="18"
          height="18"
        />
      ),
      sectionName: ".gitignore",
    },
    {
      sectionIcon: (
        <NextConfigIcon
          width="18"
          height="18"
        />
      ),
      sectionName: "next.config.js",
    },
    {
      sectionIcon: (
        <PackageIcon
          width="18"
          height="18"
        />
      ),
      sectionName: "package-lock.json",
    },
    {
      sectionIcon: (
        <PackageIcon
          width="18"
          height="18"
        />
      ),
      sectionName: "package.json",
    },
    {
      sectionIcon: (
        <TailwindIcon
          width="18"
          height="18"
        />
      ),
      sectionName: "tailwind.config.ts",
    },
    {
      sectionIcon: (
        <TsconfigIcon
          width="18"
          height="18"
        />
      ),
      sectionName: "tsconfig.json",
    },
  ];
  return (
    <div className="itemPortfolio  overflow-y-auto h-full pb-4">
      <PakageFolder
        sectionIcon={
          <FileNextIcon
            width="18"
            height="18"
          />
        }
        sectionName=".next"
      />
      <PakageFolder
        sectionIcon={
          <FileNodeModulesIcon
            width="18"
            height="18"
          />
        }
        sectionName="node_modules"
      />

      <PublicFolder />

      <SrcFolder />

      {listPakageFile.map((pakageFile, index) => (
        <PakageFile
          key={index}
          sectionIcon={pakageFile.sectionIcon}
          sectionName={pakageFile.sectionName}
        />
      ))}
    </div>
  );
}

export default ItemPortfolio;
