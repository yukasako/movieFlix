import type { IMovie } from '../Models/IMovie';
import type { IShow } from '../Models/IShow';
import Item from './Item';

const GridList = ({ items }: { items: IMovie[] | IShow[] }) => {
  return (
    <section className='grid'>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};
export default GridList;
