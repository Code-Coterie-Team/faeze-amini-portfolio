import React, { ReactNode } from "react";
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

interface listPajageFiles {
  IconName: ReactNode;
  nameFile: string;
}

function ItemPortfolio() {
  const listPakageFile: listPajageFiles[] = [
    {
      IconName: <EslintrcIcon width="18" height="18" />,
      nameFile: ".eslintrc.json",
    },
    {
      IconName: <GitignoreIcon width="18" height="18" />,
      nameFile: ".gitignore",
    },
    {
      IconName: <NextConfigIcon width="18" height="18" />,
      nameFile: "next.config.js",
    },
    {
      IconName: <PackageIcon width="18" height="18" />,
      nameFile: "package-lock.json",
    },
    {
      IconName: <PackageIcon width="18" height="18" />,
      nameFile: "package.json",
    },
    {
      IconName: <TailwindIcon width="18" height="18" />,
      nameFile: "tailwind.config.ts",
    },
    {
      IconName: <TsconfigIcon width="18" height="18" />,
      nameFile: "tsconfig.json",
    },
  ];
  return (
    <div className="itemPortfolio  overflow-y-auto h-full pb-4">
      <PakageFolder
        IconName={<FileNextIcon width="18" height="18" />}
        nameFolder=".next"
      />
      <PakageFolder
        IconName={<FileNodeModulesIcon width="18" height="18" />}
        nameFolder="node_modules"
      />

      <PublicFolder />

      <SrcFolder />

      {listPakageFile.map((pakageFile, index) => (
        <PakageFile
          key={index}
          IconName={pakageFile.IconName}
          nameFile={pakageFile.nameFile}
        />
      ))}
    </div>
  );
}

export default ItemPortfolio;
