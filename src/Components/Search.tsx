import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

type SearchProps = {
  inputSearchText: (searchWord: string) => void;
};

export const Search = ({ inputSearchText }: SearchProps) => {
  const [text, setText] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    inputSearchText(text);
  };

  return (
    <section className='search-container'>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <input
            type='text'
            placeholder={t('search.placeholder')}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <i
            className='fa-solid fa-magnifying-glass'
            onClick={handleSubmit}
          ></i>
        </div>
      </form>
    </section>
  );
};
