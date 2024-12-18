import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search sneakers..."
        value={query}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
    </div>
  );
}

export default SearchBar;
