'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import cx from './index.module.css';

const SearchComponent = () => {
  const [search, setSearch] = useState('');
  const { push } = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className={cx.input}
        type="text"
        value={search}
        placeholder="Введите текст..."
        onChange={handleInputChange}
      />
      <button type="submit" className={cx.btn}>
        Поиск
      </button>
    </form>
  );
};

export default SearchComponent;
