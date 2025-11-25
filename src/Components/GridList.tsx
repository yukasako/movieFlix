import type { IMovie } from '../Models/IMovie';
import styles from './gridlist.module.css';
import Item from './Item';

function GridList({ movies }: { movies: IMovie[] }) {
  return (
    <section className={styles.grid}>
      {movies.map((movie) => (
        <Item key={movie.id} movie={movie}></Item>
      ))}
    </section>
  );
}

export default GridList;
