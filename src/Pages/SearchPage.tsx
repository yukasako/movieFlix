import { Link } from 'react-router-dom';
import { Search } from '../Components/Search';
import { SearchMovies } from '../Utilities/SearchMovie';
import { useState } from 'react';
import type { IMovie } from '../Models/IMovie';

export const SearchPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSearch = async (searchWord: string) => {
    const data = await SearchMovies('search/movie', searchWord);
    setMovies(data.results);
  };

  return (
    <section>
      <div className='landing'></div>
      <div className='overlay'></div>
      <h1 className='page-title'>MovieFlix</h1>

      <Search onSearch={handleSearch} />

      {movies.length > 0 && (
        <section className='grid'>
          {movies.map((movie) => (
            <section className='card' key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <div className='card-body'>
                <h5>{movie.title}</h5>
                <small className='text-muted'>{movie.release_date}</small>
              </div>
            </section>
          ))}
        </section>
      )}
    </section>
  );
};
