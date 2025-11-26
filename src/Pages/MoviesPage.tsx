import { useState, useEffect } from 'react';
import type { IMovie } from '../Models/IMovie';
import { LoadMovies } from '../Utilities/LoadMovies';
import { NavLink } from 'react-router-dom';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setMovies(await LoadMovies('discover/movie'));
  };

  return (
    <>
      <h1 className='page-title'>Popular Films</h1>
      <section className='grid'>
        {movies.map((movie) => (
          <section className='card' key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </NavLink>
            <div className='card-body'>
              <h5>{movie.title}</h5>
              <small className='text-muted'>{movie.release_date}</small>
            </div>
          </section>
        ))}
      </section>
    </>
  );
};
