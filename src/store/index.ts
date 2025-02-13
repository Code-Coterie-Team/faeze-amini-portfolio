import { ReactNode } from "react";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import StarIcon from "../components/icons/StarIcon";
interface StoreState {
  sideBarShow: boolean;
  toggleSideBarShow: () => void;

  projectName: string;
  changeProjectName: (newName: string) => void;
}

interface ListTabs {
  id: string;
  tabTitle: string;
  iconTab: ReactNode;
  href: string;
}

interface TabStore {
  tab: ListTabs[];
  addTab: (tabTitle: string, iconTab: ReactNode, href: string) => void;
  removeTab: (id: string) => void;

  activeTab:string;
  changeActiveTab: (newLink: string) => void;
}
export const useStore = create<StoreState>((set) => ({
  sideBarShow: false,
  toggleSideBarShow: () =>
    set((state) => ({ sideBarShow: !state.sideBarShow })),

  projectName: "adminDashboard",
  changeProjectName: (newName) => set((state) => ({ projectName: newName })),

  listTab: [],
}));
// const initialTabs: ListTabs[] = [
//   {
//     id: uuidv4(),
//     tabTitle: "About Me",
//     iconTab: (
//       <StarIcon
//         width="18"
//         height="18"
//       />
//     ),
//   },
// ];
export const addTabStore = create<TabStore>((set) => ({
  tab: [],
  addTab: (tabTitle, iconTab, href) =>
    set((state) => {
      const exists = state.tab.some((tab) => tab.tabTitle === tabTitle);
      if (exists) {
        // console.warn(`Tab with title "${tabTitle}" already exists!`);
        return state;
      }

      const newtabId = uuidv4();
      return {
        tab: [...state.tab, { id: newtabId, tabTitle, iconTab, href }],
      };
    }),
  removeTab: (id) =>
    set((state) => {
      if (state.tab.length === 1) {
        return state;
      }
      return {
        tab: state.tab.filter((tab) => tab.id !== id),
      };
    }),

    activeTab: "",
    changeActiveTab: (newLink) => set((state) => ({ activeTab: newLink })),
}));
