import { fetchViaProxy } from './ApiProxy';

export interface MoviesResponse<T> {
  results: T[]; //IMovie[] or IShow[]
  page: number;
  total_pages: number;
  total_results: number;
}

export const SearchMedia = async <T>(
  endpoint: string, // "search/movie" or "search/tv"
  searchQuery = '',
  language?: string
): Promise<MoviesResponse<T>> => {
  const lang = language ?? import.meta.env.VITE_LANGUAGE;

  return fetchViaProxy<MoviesResponse<T>>(endpoint, {
    query: searchQuery || undefined,
    language: lang,
  });
};
