import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast('Please enter something :)');
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your favorite movie"
          value={query}
          name="query"
          onChange={handleNameChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
