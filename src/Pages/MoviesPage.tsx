import { useState, useEffect } from 'react';
import type { IMovie } from '../Models/IMovie';
import { LoadMovies } from '../Utilities/LoadMovies';
import { NavLink } from 'react-router-dom';
import { Pagination } from '../Components/Pagination';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await LoadMovies('discover/movie', page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <h1 className='page-title'>Popular Films</h1>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {loading && <p>Loading...</p>}

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

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};
