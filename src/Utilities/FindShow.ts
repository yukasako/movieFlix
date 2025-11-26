import axios from 'axios';
import type { IShow } from '../Models/IShow';

export const FindShow = async (endpoint: string): Promise<IShow> => {
  const key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const options = import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}${endpoint}?api_key=${key}&language=${options}`;
  const result = await axios.get(url);

  return result.data;
};
