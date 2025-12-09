import axios from 'axios';

export interface MoviesResponse<T> {
  results: T[]; //IMovie[] or IShow[]
  page: number;
  total_pages: number;
  total_results: number;
}

export const SearchMedia = async <T>(
  endpoint: string, // "search/movie" or "search/tv"
  searchQuery = ''
): Promise<MoviesResponse<T>> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const key = import.meta.env.VITE_API_KEY;
  const lang = import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}${endpoint}?api_key=${key}&query=${searchQuery}&language=${lang}`;
  const { data } = await axios.get(url);

  return {
    results: data.results,
    page: data.page,
    total_pages: Math.min(data.total_pages, 500), // ← 無料APIは500まで
    total_results: data.total_results,
  };
};
