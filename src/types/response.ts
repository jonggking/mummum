import { AxiosResponse } from 'axios';

export type SuccessResponse<TData> = AxiosResponse & {
  data: TData;
};

export type DeleteResponse = AxiosResponse;
