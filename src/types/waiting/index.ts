export type WaitingUserInput = {
  personCount: number;
  toddlerChairCount: number;
  childrenTablewareCount: number;
  phoneNumber: string;
};

export type AddWaitingUserResult = {
  waitingId: string;
  waitingNumber: number;
};

export type WaitingUser = WaitingUserInput &
  AddWaitingUserResult & {
    time: string;
    waitingEndTime: string | undefined;
    service: string | null;
    isServiceUsed: boolean | undefined;
    remainingCalls: number;
    cancelReason: number;
  };

export type savedWaitingUser = WaitingUser & {
  order: number;
  isDeferred?: number | null;
};

export type MobileWaitingData = AddWaitingUserResult &
  WaitingUserInput & {
    frontWaitingNumber: number;
    waitingTimeMinute: number;
    callList: string[];
    createdAt: string;
  };

export type CmsWaitingData = MobileWaitingData & {
  waitingStatus: string;
  callCount: number;
};

export type AllCmsWaitingDatas = {
  WAITING?: CmsWaitingData[];
  FINISHED?: CmsWaitingData[];
  CANCELED?: CmsWaitingData[];
};

export interface WaitingTapStoreState {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export interface WaitingListStore {
  selectedDate: string | null;
  waitingDatas: AllCmsWaitingDatas | undefined;
  setSelectedDate: (date: string) => void;
  setSelectedToday: () => void;
  getAllWaitingList: () => Promise<void>;
}
