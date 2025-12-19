import { fetchViaProxy } from './ApiProxy';

export interface MediaResponse<T> {
  results: T[]; // Generic. IMedia[] or IShow[]
  page: number;
  total_pages: number;
  total_results: number;
}

export const LoadMedia = async <T>(
  endpoint: string, // "discover/movie" or "discover/tv"
  page: number = 1,
  language?: string
): Promise<MediaResponse<T>> => {
  const lang = language ?? import.meta.env.VITE_LANGUAGE;

  return fetchViaProxy<MediaResponse<T>>(endpoint, {
    page,
    language: lang,
  });
};
