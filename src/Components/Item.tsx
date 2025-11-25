import type { IMovie } from '../Models/IMovie';
import styles from './item.module.css';

function Item({ movie }: { movie: IMovie }) {
  const img: string = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <section className={styles.card}>
      <img src={img} alt='' />
      <div className={styles[`card-body`]}>
        <h5>{movie.title}</h5>
        <small>{movie.release_date}</small>
      </div>
    </section>
  );
}

export default Item;
