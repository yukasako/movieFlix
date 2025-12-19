import { Search } from '../Components/Search';
import { SearchMedia } from '../Utilities/SearchMedia';
import { useState, useEffect } from 'react';
import type { IMovie } from '../Models/IMovie';
import type { IShow } from '../Models/IShow';
import GridList from '../Components/GridList';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

type SearchType = 'movie' | 'tv';

export const SearchPage = () => {
  const [mediaList, setMediaList] = useState<IMovie[] | IShow[]>([]);
  const [searchType, setSearchType] = useState<SearchType>('movie');
  const [searchWord, setSearchWord] = useState<string>('');
  const { language } = useLanguage();
  const { t } = useTranslation();

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
        const data = await SearchMedia<IMovie>(
          'search/movie',
          searchWord,
          language
        );
        setMediaList(data.results);
      } else {
        const data = await SearchMedia<IShow>('search/tv', searchWord, language);
        setMediaList(data.results);
      }
    };

    fetchData();
  }, [searchType, searchWord, language]);

  return (
    <>
      <h1 className='page-title'>{t('search.title')}</h1>

      <div className='search-toggle'>
        <button
          type='button'
          className={searchType === 'movie' ? 'active' : ''}
          onClick={() => handleSearchType('movie')}
        >
          {t('search.toggleMovie')}
        </button>
        <button
          type='button'
          className={searchType === 'tv' ? 'active' : ''}
          onClick={() => handleSearchType('tv')}
        >
          {t('search.toggleTv')}
        </button>
      </div>

      <Search inputSearchText={handleSearchWord} />

      {mediaList.length > 0 && <GridList items={mediaList} />}
    </>
  );
};
