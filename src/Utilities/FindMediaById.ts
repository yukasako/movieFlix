import axios from 'axios';

export const FindMediaById = async <T>(endpoint: string): Promise<T> => {
  const key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const options = import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}${endpoint}?api_key=${key}&language=${options}`;
  const result = await axios.get<T>(url);

  return result.data;
};
