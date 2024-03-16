import axios, { type AxiosResponse } from 'axios';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  withCredentials: true,
  timeout: 10000,
});

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  return instance.get<T, AxiosResponse<T>>(...args);
};

export const post = <T>(...args: Parameters<typeof instance.post>) => {
  return instance.post<T, AxiosResponse<T>>(...args);
};

export const put = <T>(...args: Parameters<typeof instance.put>) => {
  return instance.put<T, AxiosResponse<T>>(...args);
};

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T, AxiosResponse<T>>(...args);
};
