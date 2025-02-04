import { create } from 'zustand'

interface StoreState {
    sideBarShow: boolean;
    toggleSideBarShow: () => void;
  }
  

export const useStore = create<StoreState>((set) => ({
    sideBarShow: false,
    toggleSideBarShow:() => set((state) => ({ sideBarShow: !state.sideBarShow })),
 
}))