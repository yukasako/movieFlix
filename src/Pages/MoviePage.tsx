import { useEffect, useState } from 'react';
import type { IMovie } from '../Models/IMovie';
import { LoadMovies } from '../Utilities/LoadMovies';
import Header from '../Components/Header';
import GridList from '../Components/GridList';

function MoviePage() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const loadMovies = async () => {
    setMovies(await LoadMovies(`discover/movie`));
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <Header title='Popular Movies' />
      <GridList movies={movies} />
    </>
  );
}

export default MoviePage;
