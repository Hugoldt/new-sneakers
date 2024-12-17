import React, { useState } from 'react';

function PriceFilter({ onFilter }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    onFilter({ min: minPrice, max: maxPrice });
  };

  return (
    <div className="p-4 flex space-x-4">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Filter
      </button>
    </div>
  );
}

export default PriceFilter;