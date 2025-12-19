import type { IMovie } from '../Models/IMovie';
import type { IShow } from '../Models/IShow';

const FAVORITES_MOVIES_KEY = 'movieflix:favorites:movies';
const FAVORITES_SHOWS_KEY = 'movieflix:favorites:shows';

const getStorage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

const readFavorites = <T>(storageKey: string): T[] => {
  const storage = getStorage();
  if (!storage) {
    return [];
  }

  const storedValue = storage.getItem(storageKey);
  if (!storedValue) {
    return [];
  }

  try {
    return JSON.parse(storedValue) as T[];
  } catch {
    storage.removeItem(storageKey);
    return [];
  }
};

const persistFavorites = <T>(storageKey: string, items: T[]) => {
  const storage = getStorage();
  if (!storage) {
    return;
  }

  storage.setItem(storageKey, JSON.stringify(items));
};

export const getFavoriteMovies = (): IMovie[] => {
  return readFavorites<IMovie>(FAVORITES_MOVIES_KEY);
};

export const isMovieFavorite = (movieId: number): boolean => {
  return readFavorites<IMovie>(FAVORITES_MOVIES_KEY).some(
    (movie) => movie.id === movieId
  );
};

export const addFavoriteMovie = (movie: IMovie): IMovie[] => {
  const favorites = readFavorites<IMovie>(FAVORITES_MOVIES_KEY);
  if (favorites.some((fav) => fav.id === movie.id)) {
    return favorites;
  }

  const updated = [...favorites, movie];
  persistFavorites(FAVORITES_MOVIES_KEY, updated);
  return updated;
};

export const removeFavoriteMovie = (movieId: number): IMovie[] => {
  const favorites = readFavorites<IMovie>(FAVORITES_MOVIES_KEY);
  const updated = favorites.filter((movie) => movie.id !== movieId);
  persistFavorites(FAVORITES_MOVIES_KEY, updated);
  return updated;
};

export const getFavoriteShows = (): IShow[] => {
  return readFavorites<IShow>(FAVORITES_SHOWS_KEY);
};

export const isShowFavorite = (showId: number): boolean => {
  return readFavorites<IShow>(FAVORITES_SHOWS_KEY).some(
    (show) => show.id === showId
  );
};

export const addFavoriteShow = (show: IShow): IShow[] => {
  const favorites = readFavorites<IShow>(FAVORITES_SHOWS_KEY);
  if (favorites.some((fav) => fav.id === show.id)) {
    return favorites;
  }

  const updated = [...favorites, show];
  persistFavorites(FAVORITES_SHOWS_KEY, updated);
  return updated;
};

export const removeFavoriteShow = (showId: number): IShow[] => {
  const favorites = readFavorites<IShow>(FAVORITES_SHOWS_KEY);
  const updated = favorites.filter((show) => show.id !== showId);
  persistFavorites(FAVORITES_SHOWS_KEY, updated);
  return updated;
};
