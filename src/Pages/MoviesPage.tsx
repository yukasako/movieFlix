import { useState, useEffect } from 'react';
import type { IMovie } from '../Models/IMovie';
import { Pagination } from '../Components/Pagination';
import GridList from '../Components/GridList';
import { LoadMedia, type MediaResponse } from '../Utilities/LoadMedia';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data: MediaResponse<IMovie> = await LoadMedia(
          'discover/movie',
          page
        );
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
      <GridList items={movies} />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};
