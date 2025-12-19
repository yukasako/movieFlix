import { useState } from 'react';
import GridList from '../Components/GridList';
import type { IMovie } from '../Models/IMovie';
import type { IShow } from '../Models/IShow';
import { getFavoriteMovies, getFavoriteShows } from '../Utilities/Favorites';

export const FavoritePage = () => {
  const [favoriteMovies] = useState<IMovie[]>(() => getFavoriteMovies());
  const [favoriteShows] = useState<IShow[]>(() => getFavoriteShows());

  const hasMovies = favoriteMovies.length > 0;
  const hasShows = favoriteShows.length > 0;
  const hasFavorites = hasMovies || hasShows;

  return (
    <>
      <h1 className='page-title'>My Favorites</h1>

      {!hasFavorites && (
        <p className='text-muted'>
          You do not have any favorites yet. Add some from a movie or show
          detail page.
        </p>
      )}

      {hasMovies && (
        <section className='favorites-group'>
          <h2>Favorite Movies</h2>
          <GridList items={favoriteMovies} />
        </section>
      )}

      {hasShows && (
        <section className='favorites-group'>
          <h2>Favorite TV Shows</h2>
          <GridList items={favoriteShows} />
        </section>
      )}
    </>
  );
};
