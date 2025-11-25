import axios from 'axios';

export const LoadMovies = async (endpoint: string) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const key = import.meta.env.VITE_API_KEY;
  const lang = import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}${endpoint}?api_key=${key}&language=${lang}`;
  console.log(url);

  const result = await axios.get(url);
  return result.data.results;
};
