import { fetchViaProxy } from './ApiProxy';

export const FindMediaById = async <T>(
  endpoint: string,
  language?: string
): Promise<T> => {
  const lang = language ?? import.meta.env.VITE_LANGUAGE;
  return fetchViaProxy<T>(endpoint, { language: lang });
};
