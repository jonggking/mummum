export type WaitingUserInput = {
  totalPerson: number;
  babyChair: number;
  kidsUtensils: number;
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
  isDeferred: number | null;
};
