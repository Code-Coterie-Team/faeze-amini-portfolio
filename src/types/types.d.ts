import { ReactElement } from "react";
interface ItemAboutPaje {
  title: string;
  description: string;
  industry: string;
  year: string;
  service: string;
  imageSrc: string;
  imageAlt: string;
  activeHashProject: string;
}

interface ChallengeItems {
  descrption: string;
  item01?: string;
  item02?: string;
  item03?: string;
  item04?: string;
  item05?: string;
  item06?: string;
  activeHashProject: string;
}

interface FormDatas {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface CreateFileMenus {
  href: string;
  hrefPage: string;
  IconName: ReactNode;
  nameFile: string;
}
interface IChartFrameworksArray {
  listFileMenu: CreateFileMenus[];
}

interface FileProjects {
  nameProject: string;
  href: string;
  IconProject: ReactNode;
}

interface workProject {
  name: string;
  description: string;
  image: string;
  linkGit: string;
  linkDemo: string;
  href: string;
}

interface ICreateSection {
  sectionIcon: ReactNode;
  sectionName: string;
}
interface SolutionItems {
  text01?: string;
  text02?: string;
  text03?: string;
  text04?: string;
  text05?: string;
  text06?: string;
  href: string;
  activeHashProject: string;
}

interface TechnologiesItems {
  listTechnologies: Technology[];
  activeHashProject: string;
}

interface StoreState {
  sideBarShow: boolean;
  toggleSideBarShow: (isShow: boolean) => void;

  projectName: string;
  changeProjectName: (newName: string) => void;

  hoverPortfolio: boolean;
  setHoverPortfolio: (newState: boolean) => void;

  activeHash: string;
  changeActiveHash: (newHash: string) => void;
}

interface Technology {
  name: string;
  image: string;
}

interface IShowModalStatus {
  title: string;
  status: string;
}
interface ListTabs {
  tabTitle: string;
  href: string;
}

interface TabStore {
  tab: ListTabs[];
  addTab: (tabTitle: string, href: string) => void;
  removeTab: (href: string) => void;

  activeTab: string;
  changeActiveTab: (newLink: string) => void;

  isPublicSideBar: boolean;
  changeIsPublicSideBar: (isStatus: boolean) => void;

  isSrcFolderSideBar: boolean;
  changeSrcFolderSideBar: (isStatus: boolean) => void;

  isMyFolderSideBar: boolean;
  changeMyFolderSideBar: (isStatus: boolean) => void;

  isShowModalSuccessful: boolean;
  setIsShowModalSuccessful: (isStatus: boolean) => void;

  isShowModalFail: boolean;
  setIsShowModalFail: (isStatus: boolean) => void;
}
