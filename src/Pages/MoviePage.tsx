import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindMediaById } from '../Utilities/FindMediaById';
import type { IMovie } from '../Models/IMovie';
import {
  addFavoriteMovie,
  isMovieFavorite,
  removeFavoriteMovie,
} from '../Utilities/Favorites';
import FavoriteButton from '../Components/UI/FavoriteButton';

export const MoviePage = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const found = await FindMediaById<IMovie>(`movie/${id}`);
      setBackgroundImage(
        `https://image.tmdb.org/t/p/original/${found.backdrop_path}`
      );
      setPoster(`https://image.tmdb.org/t/p/w500${found.poster_path}`);
      setMovie(found);
      setIsFavorite(isMovieFavorite(found.id));
    };
    getMovie();
  }, [id]);

  const handleToggleFavorite = () => {
    if (!movie) {
      return;
    }

    if (isFavorite) {
      removeFavoriteMovie(movie.id);
      setIsFavorite(false);
      return;
    }

    addFavoriteMovie(movie);
    setIsFavorite(true);
  };

  return (
    <>
      <img
        className='overlay'
        src={backgroundImage || undefined}
        alt={movie?.title}
      />

      <section className='details'>
        <div>
          <img src={poster || undefined} alt={movie?.title} />
        </div>
        <div className='details-info'>
          <h2>{movie?.title}</h2>
          <p>
            <i className='fas fa-star rating'></i>{' '}
            {movie?.vote_average.toFixed(1)} / 10
          </p>
          <p className='text-muted'>Release date: {movie?.release_date}</p>
          <p>{movie?.overview}</p>
          <FavoriteButton
            isActive={isFavorite}
            disabled={!movie}
            onToggle={handleToggleFavorite}
          />
        </div>
      </section>
    </>
  );
};
