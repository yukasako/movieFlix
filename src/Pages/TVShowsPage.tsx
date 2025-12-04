import { useState, useEffect } from 'react';
import type { IShow } from '../Models/IShow';
import GridList from '../Components/GridList';
import { Pagination } from '../Components/Pagination';
import type { MediaResponse } from '../Utilities/LoadMedia';
import { LoadMedia } from '../Utilities/LoadMedia';

export const TVShowsPage = () => {
  const [shows, setShows] = useState<IShow[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      try {
        const data: MediaResponse<IShow> = await LoadMedia('discover/tv', page);
        setShows(data.results);
        setTotalPages(data.total_pages);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [page]);

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <h1 className='page-title'>Popular TV Series</h1>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {loading && <p>Loading...</p>}
      <GridList items={shows} />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};
