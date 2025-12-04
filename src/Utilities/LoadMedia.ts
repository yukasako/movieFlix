import axios from 'axios';

export interface MediaResponse<T> {
  results: T[]; // Generic. IMedia[] or IShow[]
  page: number;
  total_pages: number;
  total_results: number;
}

export const LoadMedia = async <T>(
  endpoint: string,
  page: number = 1
): Promise<MediaResponse<T>> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const key = import.meta.env.VITE_API_KEY;
  const lang = import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}${endpoint}?api_key=${key}&language=${lang}&page=${page}`;
  const { data } = await axios.get(url);

  return {
    results: data.results,
    page: data.page,
    total_pages: Math.min(data.total_pages, 500), // ← 無料APIは500まで
    total_results: data.total_results,
  };
};
