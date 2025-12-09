import { useState } from 'react';
import type { FormEvent } from 'react';

type SearchProps = {
  inputSearchText: (searchWord: string) => void;
};

export const Search = ({ inputSearchText }: SearchProps) => {
  const [text, setText] = useState('');

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
            placeholder='Search keyword...'
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
