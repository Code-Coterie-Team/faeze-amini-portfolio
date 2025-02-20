import { ReactElement } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  sideBarShow: boolean;
  toggleSideBarShow: () => void;

  projectName: string;
  changeProjectName: (newName: string) => void;
}

interface ListTabs {
  tabTitle: string;
  href: string;
  iconTab: ReactElement;
}

interface TabStore {
  tab: ListTabs[];
  addTab: (tabTitle: string, href: string, iconTab: ReactElement) => void;
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
      addTab: (tabTitle, href, iconTab) =>
        set((state) => {
          const exists = state.tab.some((tab) => tab.tabTitle === tabTitle);
          if (exists) {
            // console.warn(`Tab with title "${tabTitle}" already exists!`);
            return state;
          }

          return {
            tab: [...state.tab, { tabTitle, href, iconTab }],
          };
        }),
      removeTab: (href) =>
        set((state) => {
          console.log(
            "tab href delete",
            state.tab.filter((tab) => tab.href !== href)
          );

          if (state.tab.length === 1) {
            return state;
          }
          const newTabs = state.tab.filter((tab) => tab.href !== href);
          const indexTabDelete = state.tab.findIndex(
            (tab) => tab.href === href
          );
          const newActiveTab =
            newTabs[indexTabDelete - 1]?.href || newTabs[0]?.href;
          console.log("new Active Tav", newActiveTab);
          return {
            tab: newTabs,
            activeTab: newActiveTab,
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

      isShowModalSuccessful: false,
      setIsShowModalSuccessful: (stateModal) =>
        set(() => ({ isShowModalSuccessful: stateModal })),

      isShowModalFail: false,
      setIsShowModalFail: (stateModal) =>
        set(() => ({ isShowModalFail: stateModal })),
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
