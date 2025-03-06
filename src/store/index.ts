import { StoreState, TabStore } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create<StoreState>((set) => ({
  sideBarShow: false,
  toggleSideBarShow: () =>
    set((state) => ({ sideBarShow: !state.sideBarShow })),

  projectName: "adminDashboard",
  changeProjectName: (newName) => set(() => ({ projectName: newName })),

  hoverPortfolio: false,
  setHoverPortfolio: (newState) => set(() => ({ hoverPortfolio: newState })),

  activeHash: "/#aboutme",
  changeActiveHash: (newHash) => set(() => ({ activeHash: newHash })),
}));

export const addTabStore = create<TabStore>()(
  persist(
    (set) => ({
      tab: [],
      addTab: (tabTitle, href) =>
        set((state) => {
          const exists = state.tab.some((tab) => tab.tabTitle === tabTitle);
          if (exists) {
            return state;
          }

          return {
            tab: [...state.tab, { tabTitle, href }],
          };
        }),
      removeTab: (href) =>
        set((state) => {
          if (state.tab.length === 1) {
            return state;
          }
          const newTabs = state.tab.filter((tab) => tab.href !== href);
          const indexTabDelete = state.tab.findIndex(
            (tab) => tab.href === href
          );
          const hrefTabDelete = state.tab.find((tab) => tab.href === href);
          let { activeTab } = state;

          if (indexTabDelete == 0 && activeTab === hrefTabDelete?.href) {
            activeTab = newTabs[indexTabDelete]?.href;
          } else if (indexTabDelete > 0 && activeTab === hrefTabDelete?.href) {
            activeTab = newTabs[indexTabDelete - 1]?.href;
          } else if (activeTab !== hrefTabDelete?.href) {
            activeTab = state.activeTab;
          }
          return {
            tab: newTabs,
            activeTab: activeTab,
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
