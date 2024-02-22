import axios, { AxiosInstance } from "axios";
import { Api, BookData } from "../types/types";

export const createApi = (baseURL: string): Api => {
  const api: AxiosInstance = axios.create({
    baseURL: baseURL,
  });

  const get = async () => {
    const response = await api.get("");
    return response.data;
  };

  const post = async (data: BookData) => {
    const response = await api.post("", data);
    return response.data;
  };

  const put = async (id: string, data: BookData) => {
    const response = await api.put(id, data);
    return response.data;
  };

  const remove = async (id: string) => {
    const response = await api.delete(id);
    return response.data;
  };

  return { get, post, put, remove };
};
