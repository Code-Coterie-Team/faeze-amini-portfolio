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
  changeProjectName: (newName) => set(() => ({ projectName: newName })),
}));

export const addTabStore = create<TabStore>()(
  persist(
    (set) => ({
      tab: [],
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

      activeTab: "",
      changeActiveTab: (newLink) => set(() => ({ activeTab: newLink })),

      isPublicSideBar: true,
      changeIsPublicSideBar: (isStatus) =>
        set(() => ({ isPublicSideBar: isStatus })),

      isSrcFolderSideBar: true,
      changeSrcFolderSideBar: (isStatus) =>
        set(() => ({ isSrcFolderSideBar: isStatus })),

      isMyFolderSideBar: true,
      changeMyFolderSideBar: (isStatus) =>
        set(() => ({ isMyFolderSideBar: isStatus })),
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
