import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GridList from '../Components/GridList';
import type { IMovie } from '../Models/IMovie';
import type { IShow } from '../Models/IShow';
import { getFavoriteMovies, getFavoriteShows } from '../Utilities/Favorites';

export const FavoritePage = () => {
  const [favoriteMovies] = useState<IMovie[]>(() => getFavoriteMovies());
  const [favoriteShows] = useState<IShow[]>(() => getFavoriteShows());
  const { t } = useTranslation();

  const hasMovies = favoriteMovies.length > 0;
  const hasShows = favoriteShows.length > 0;
  const hasFavorites = hasMovies || hasShows;

  return (
    <>
      <h1 className='page-title'>{t('favorites.title')}</h1>

      {!hasFavorites && (
        <p className='text-muted center'>{t('favorites.empty')}</p>
      )}

      {hasMovies && (
        <section className='favorites-group'>
          <h2>{t('favorites.moviesHeading')}</h2>
          <GridList items={favoriteMovies} />
        </section>
      )}

      {hasShows && (
        <section className='favorites-group'>
          <h2>{t('favorites.showsHeading')}</h2>
          <GridList items={favoriteShows} />
        </section>
      )}
    </>
  );
};
