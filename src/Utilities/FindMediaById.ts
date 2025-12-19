import axios from 'axios';

export const FindMediaById = async <T>(
  endpoint: string,
  language?: string
): Promise<T> => {
  const key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const lang = language ?? import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}${endpoint}?api_key=${key}&language=${lang}`;
  const result = await axios.get<T>(url);

  return result.data;
};
