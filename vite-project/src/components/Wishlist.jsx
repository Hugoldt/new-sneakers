// Wishlist Component (src/components/Wishlist.js)
import React, { useState } from 'react';

function Wishlist() {
  const [wishlist, setWishlist] = useState(["Sneaker 1", "Sneaker 2"]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlist.length ? (
        <ul className="list-disc pl-6">
          {wishlist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default Wishlist;