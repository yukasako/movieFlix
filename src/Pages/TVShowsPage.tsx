import { useState, useEffect } from 'react';
import type { IShow } from '../Models/IShow';
import { LoadShows } from '../Utilities/LoadShows';
import GridList from '../Components/GridList';

export const TVShowsPage = () => {
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setShows(await LoadShows('discover/tv'));
  };

  return (
    <>
      <h1 className='page-title'>Popular TV Series</h1>
      <GridList items={shows} />
    </>
  );
};
