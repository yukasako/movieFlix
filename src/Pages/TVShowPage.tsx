import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindMediaById } from '../Utilities/FindMediaById';
import type { IShow } from '../Models/IShow';
import FavoriteButton from '../Components/UI/FavoriteButton';
import {
  addFavoriteShow,
  isShowFavorite,
  removeFavoriteShow,
} from '../Utilities/Favorites';
import { useLanguage } from '../contexts/LanguageContext';

export const TVShowPage = () => {
  const [show, setShow] = useState<IShow>();
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [poster, setPoster] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const { language } = useLanguage();

  useEffect(() => {
    const getShow = async () => {
      const found = await FindMediaById<IShow>(`tv/${id}`, language);
      setBackgroundImage(
        `https://image.tmdb.org/t/p/original/${found.backdrop_path}`
      );
      setPoster(`https://image.tmdb.org/t/p/w500${found.poster_path}`);
      setShow(found);
      setIsFavorite(isShowFavorite(found.id));
    };
    getShow();
  }, [id, language]);

  const handleToggleFavorite = () => {
    if (!show) {
      return;
    }

    if (isFavorite) {
      removeFavoriteShow(show.id);
      setIsFavorite(false);
      return;
    }

    addFavoriteShow(show);
    setIsFavorite(true);
  };

  return (
    <>
      <img
        className='overlay'
        src={backgroundImage || undefined}
        alt={show?.name}
      />

      <section className='details'>
        <div>
          <img src={poster || undefined} alt={show?.name} />
        </div>
        <div className='details-info'>
          <h2>{show?.name}</h2>
          <p>
            <i className='fas fa-star rating'></i>{' '}
            {show?.vote_average.toFixed(1)} / 10
          </p>
          <p className='text-muted'>Release date: {show?.first_air_date}</p>
          <p>{show?.overview}</p>
          <FavoriteButton
            isActive={isFavorite}
            disabled={!show}
            onToggle={handleToggleFavorite}
          />
        </div>
      </section>
    </>
  );
};
