import create from 'zustand';

type WaitingStoreState = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

export const useWaitingStore = create<WaitingStoreState>((set) => ({
  activeTab: 0,
  setActiveTab: (index) => set({ activeTab: index }),
}));
