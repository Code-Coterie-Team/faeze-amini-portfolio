import { create } from 'zustand'

interface StoreState {
    sideBarShow: boolean;
    toggleSideBarShow: () => void;
    
    projectName: string;
    changeProjectName: (newName: string) => void;
  }
  

export const useStore = create<StoreState>((set) => ({
    sideBarShow: false,
    toggleSideBarShow:() => set((state) => ({ sideBarShow: !state.sideBarShow })),
 
    projectName: "adminDashboard",
    changeProjectName: (newName) => set((state) => ({ projectName: newName })),
}))

