import { Search } from '../Components/Search';
import { SearchMedia } from '../Utilities/SearchMedia';
import { useState, useEffect } from 'react';
import type { IMovie } from '../Models/IMovie';
import type { IShow } from '../Models/IShow';
import GridList from '../Components/GridList';

type SearchType = 'movie' | 'tv';

export const SearchPage = () => {
  const [mediaList, setMediaList] = useState<IMovie[] | IShow[]>([]);
  const [searchType, setSearchType] = useState<SearchType>('movie');
  const [searchWord, setSearchWord] = useState<string>('');

  const handleSearchType = (type: SearchType) => {
    setSearchType(type);
  };

  const handleSearchWord = (searchWord: string) => {
    setSearchWord(searchWord);
  };

  useEffect(() => {
    if (!searchWord) return;

    const fetchData = async () => {
      if (searchType === 'movie') {
        const data = await SearchMedia<IMovie>('search/movie', searchWord);
        setMediaList(data.results);
      } else {
        const data = await SearchMedia<IShow>('search/tv', searchWord);
        setMediaList(data.results);
      }
    };

    fetchData();
  }, [searchType, searchWord]);

  return (
    <>
      <h1 className='page-title'>Search Movie</h1>

      <div className='search-toggle'>
        <button
          type='button'
          className={searchType === 'movie' ? 'active' : ''}
          onClick={() => handleSearchType('movie')}
        >
          Movie
        </button>
        <button
          type='button'
          className={searchType === 'tv' ? 'active' : ''}
          onClick={() => handleSearchType('tv')}
        >
          TV
        </button>
      </div>

      <Search inputSearchText={handleSearchWord} />

      {mediaList.length > 0 && <GridList items={mediaList} />}
    </>
  );
};
