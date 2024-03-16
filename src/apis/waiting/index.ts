import { useMutation, useQueryClient } from 'react-query';
import { post } from '@lib/axios';
import { WaitingUserInput, AddWaitingUserResult } from 'types/waiting';

export const useAddWaitingUser = () => {
  const queryClient = useQueryClient();

  const addWaitingUser = async (data: WaitingUserInput) => {
    const response = await post<AddWaitingUserResult>('/api/v1/waiting', data);
    return response.data;
  };

  return useMutation<AddWaitingUserResult, Error, WaitingUserInput>(
    addWaitingUser,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['waitingUser', data.waitingId], data);
      },
    }
  );
};
