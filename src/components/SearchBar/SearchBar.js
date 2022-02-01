import { useState } from 'react';
import { SearchBarStyle } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('You need to write something!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <div>
      <SearchBarStyle onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Searching......new movie for you"
          value={query}
          name="query"
          onChange={handleNameChange}
        />
        <button type="submit"></button>
      </SearchBarStyle>
    </div>
  );
};
export default SearchBar;
