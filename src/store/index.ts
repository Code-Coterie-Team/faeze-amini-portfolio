import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

interface StoreState {
  sideBarShow: boolean;
  toggleSideBarShow: () => void;

  projectName: string;
  changeProjectName: (newName: string) => void;
}

interface ListTabs {
  id: string;
  tabTitle: string;

  href: string;
}

interface TabStore {
  tab: ListTabs[];
  addTab: (tabTitle: string, href: string) => void;
  removeTab: (id: string) => void;

  activeTab: string;
  changeActiveTab: (newLink: string) => void;

  isPublicSideBar: boolean;
  changeIsPublicSideBar: (isStatus: boolean) => void;

  isSrcFolderSideBar: boolean;
  changeSrcFolderSideBar: (isStatus: boolean) => void;

  isMyFolderSideBar: boolean;
  changeMyFolderSideBar: (isStatus: boolean) => void;
}
export const useStore = create<StoreState>((set) => ({
  sideBarShow: false,
  toggleSideBarShow: () =>
    set((state) => ({ sideBarShow: !state.sideBarShow })),

  projectName: "adminDashboard",
  changeProjectName: (newName) => set((state) => ({ projectName: newName })),
}));
const initialTabs: ListTabs[] = [
  {
    id: uuidv4(),
    tabTitle: "About Me",
    href: "/",
  },
];
export const addTabStore = create<TabStore>()(
  persist(
    (set, get) => ({
      tab: initialTabs,
      addTab: (tabTitle, href) =>
        set((state) => {
          const exists = state.tab.some((tab) => tab.tabTitle === tabTitle);
          if (exists) {
            // console.warn(`Tab with title "${tabTitle}" already exists!`);
            return state;
          }

          const newtabId = uuidv4();
          return {
            tab: [...state.tab, { id: newtabId, tabTitle, href }],
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

      activeTab: "/",
      changeActiveTab: (newLink) => set((state) => ({ activeTab: newLink })),

      isPublicSideBar: true,
      changeIsPublicSideBar: (isStatus) =>
        set((state) => ({ isPublicSideBar: isStatus })),

      isSrcFolderSideBar: true,
      changeSrcFolderSideBar: (isStatus) =>
        set((state) => ({ isSrcFolderSideBar: isStatus })),

      isMyFolderSideBar: true,
      changeMyFolderSideBar: (isStatus) =>
        set((state) => ({ isMyFolderSideBar: isStatus })),
    }),

    {
      name: "tabLink-storage",
      partialize: (state) => ({
        tab: state.tab,
        activeTab: state.activeTab,
      }),
    }
  )
);
