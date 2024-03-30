import { create } from 'zustand';
import {
  WaitingTapStoreState,
  WaitingListStore,
  CmsWaitingData,
} from 'types/waiting';
import { SuccessResponse } from 'types/response';
import { get as axGet } from '@lib/axios';

export const useWaitingTapStore = create<WaitingTapStoreState>((set) => ({
  activeTab: 0,
  setActiveTab: (index) => set({ activeTab: index }),
}));

export const useWaitingListStore = create<WaitingListStore>((set, get) => ({
  selectedDate: null,
  waitingDatas: undefined,
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedToday: () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`;
    set({ selectedDate: formattedToday });
  },
  getAllWaitingList: async () => {
    try {
      const selectedDate = get().selectedDate;
      const res = await axGet<SuccessResponse<CmsWaitingData>>(
        `/api/v1/waiting?date=${selectedDate}`
      );
      set({ waitingDatas: res.data.data });
    } catch (error) {
      console.log('전체 리스트를 불러오는데 실패했습니다.', error);
    }
  },
}));
