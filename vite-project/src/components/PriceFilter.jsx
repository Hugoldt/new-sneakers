
  
  // PriceFilter Component (src/components/PriceFilter.js)
  import React, { useState } from 'react';
  
  function PriceFilter({ onFilter }) {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
  
    const handleFilter = () => {
      onFilter({ min: minPrice, max: maxPrice });
    };
  
    return (
      <div className="flex justify-center space-x-2 mt-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-1 rounded w-24 text-sm"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-1 rounded w-24 text-sm"
        />
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white py-1 px-2 rounded text-sm"
        >
          Apply
        </button>
      </div>
    );
  }
  
  export default PriceFilter;