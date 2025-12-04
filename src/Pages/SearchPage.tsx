import { Search } from '../Components/Search';
import { SearchMovies } from '../Utilities/SearchMovie';
import { useState } from 'react';
import type { IMovie } from '../Models/IMovie';
import GridList from '../Components/GridList';

export const SearchPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSearch = async (searchWord: string) => {
    const data = await SearchMovies('search/movie', searchWord);
    setMovies(data.results);
  };

  return (
    <>
      <div className='landing'></div>
      <div className='overlay'></div>
      <h1 className='page-title'>Search Movie</h1>

      <Search onSearch={handleSearch} />

      {movies.length > 0 && <GridList items={movies} />}
    </>
  );
};
